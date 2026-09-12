// Aceternity UI Timeline by Manu Arora, translated from Tailwind to local CSS.
// https://ui.aceternity.com/components/timeline
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

export default function Timeline({ data }) {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    const measure = () => setHeight(element.getBoundingClientRect().height)
    measure()
    // Keep the original measured beam aligned when details expand or reflow.
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Matching viewport offsets keeps the beam tip at the reading position.
    offset: ['start 60%', 'end 60%'],
  })
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])

  return (
    <div className="experience-timeline" ref={containerRef}>
      <div className="experience-timeline__body" ref={ref}>
        {data.map(item => (
          <div className="experience-timeline__entry" key={item.id}>
            <div className="experience-timeline__label">
              <div className="experience-timeline__node-wrap" aria-hidden="true">
                <div className="experience-timeline__node" />
              </div>
              <div className="experience-timeline__desktop-date">
                <p className="experience-timeline__year">{item.dates.match(/\d{4}/)?.[0]}</p>
                <p className="experience-timeline__dates">{item.dates}</p>
              </div>
            </div>
            <div className="experience-timeline__content">
              <div className="experience-timeline__mobile-date">
                <p className="experience-timeline__year">{item.dates.match(/\d{4}/)?.[0]}</p>
                <p className="experience-timeline__dates">{item.dates}</p>
              </div>
              <h3 className="experience-timeline__role">{item.title}</h3>
              <p className="experience-timeline__company">{item.company}</p>
              {item.content}
            </div>
          </div>
        ))}
        <div className="experience-timeline__rail" style={{ height }} aria-hidden="true">
          <motion.div className="experience-timeline__beam" style={{
            height: reducedMotion ? height : heightTransform,
          }} />
        </div>
      </div>
    </div>
  )
}
