import { useEffect, useRef } from 'react'
import fragment from './vendor/fragment-shader.glsl?raw'
import vertex from './vendor/vertex-shader.glsl?raw'

// Liquid Logo by Alan Ang, MIT; original shader retained in vendor/.
export default function MetalLogo({ src }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return
    const shaders = []
    const program = gl.createProgram()
    for (const [type, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment.replace('gl_FragColor = finalColor;', 'float sheen = dot(finalColor.rgb, vec3(.299,.587,.114)); gl_FragColor = vec4(mix(vec3(.53,.22,.39), vec3(1.0,.91,.96), sheen), logoAlpha);')]]) {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source); gl.compileShader(shader)
      shaders.push(shader); gl.attachShader(program, shader)
    }
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW)
    const attr = gl.getAttribLocation(program, 'aVertexPosition')
    gl.enableVertexAttribArray(attr); gl.vertexAttribPointer(attr,2,gl.FLOAT,false,0,0)
    const uniform = name => gl.getUniformLocation(program, name)
    gl.uniform2f(uniform('u_resolution'),128,128)
    const params = {speed:.18,iterations:12,scale:3.12,dotFactor:.04,dotMultiplier:.21,vOffset:5.1,intensityFactor:.07,expFactor:.2,colorShift:.9,logoInteractStrength:.4,noiseIntensity:.15,logoScale:1,logoOpacity:1,logoAspectRatio:1}
    for (const [key,value] of Object.entries(params)) gl.uniform1f(uniform(`u_${key}`),value)
    gl.uniform3f(uniform('u_colorFactors'),1.1,.7,.9)
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D,texture)
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR)
    const image = new Image()
    let frame, disposed=false, visible=false, loaded=false, hovered=false
    const motion=matchMedia('(prefers-reduced-motion: reduce)')
    const draw = time => {
      gl.uniform1f(uniform('u_time'),motion.matches ? 0 : time/1000)
      gl.drawArrays(gl.TRIANGLES,0,6)
      if (visible && hovered && !motion.matches) frame=requestAnimationFrame(draw)
    }
    const refresh = () => { cancelAnimationFrame(frame); if (loaded && visible && hovered) frame=requestAnimationFrame(draw) }
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;refresh()})
    observer.observe(canvas); motion.addEventListener('change',refresh)
    // Only animate while hovered: the program and texture stay compiled, so the
    // first frame after pointerenter is immediate instead of a cold spin-up.
    const logo=canvas.closest('.tool-logo')
    const enter=()=>{hovered=true;refresh()}, leave=()=>{hovered=false;refresh()}
    logo?.addEventListener('pointerenter',enter); logo?.addEventListener('pointerleave',leave)
    image.onload=()=>{
      if(disposed)return
      const source=document.createElement('canvas');source.width=128;source.height=128
      source.getContext('2d').drawImage(image,0,0,128,128)
      gl.bindTexture(gl.TEXTURE_2D,texture)
      gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,source)
      loaded=true
      gl.uniform1f(uniform('u_time'),0);gl.drawArrays(gl.TRIANGLES,0,6)
      refresh()
    }
    image.src=src
    return ()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();logo?.removeEventListener('pointerenter',enter);logo?.removeEventListener('pointerleave',leave);motion.removeEventListener('change',refresh);gl.deleteTexture(texture);gl.deleteBuffer(buffer);gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s))}
  }, [src])
  return <canvas ref={ref} width="128" height="128" aria-hidden="true" />
}
