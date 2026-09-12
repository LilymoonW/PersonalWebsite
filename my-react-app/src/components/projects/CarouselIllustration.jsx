import carousel from '../../assets/light/decorations/carousel.png'
import './CarouselIllustration.css'

// All pieces come from the same original image, so the fixed structure never
// changes registration. Horses travel independently instead of swapping frames.
export default function CarouselIllustration() {
  return (
    <div className="carousel-illustration" aria-hidden="true">
      <svg className="carousel-illustration__structure" viewBox="0 0 600 600">
        <defs>
          <clipPath id="carousel-canopy"><path d="M0 0H600V258H0Z" /></clipPath>
          <clipPath id="carousel-plinth"><path d="M0 552H600V600H0Z" /></clipPath>
          <clipPath id="carousel-tower"><path d="M230 250H367L330 408H266Z" /></clipPath>
        </defs>
        {[83, 106, 169, 298, 448, 496].map(x => <path key={x} d={`M${x} 248V554`} stroke="#f5f1ef" strokeWidth="7" />)}
        <image href={carousel} width="600" height="600" clipPath="url(#carousel-canopy)" />
        <ellipse cx="282" cy="550" rx="229" ry="24" fill="#f0eceb" />
        <image href={carousel} width="600" height="600" clipPath="url(#carousel-plinth)" />
      </svg>
      <svg className="carousel-illustration__column" viewBox="0 0 600 600">
        <path d="M265 400H331L350 548Q300 561 249 548Z" fill="#f0eceb" stroke="#d4cdca" strokeWidth="1.5" />
        <image href={carousel} width="600" height="600" clipPath="url(#carousel-tower)" />
        <path d="M284 402L278 543M305 402L312 550" stroke="#fff" strokeWidth="6" />
      </svg>
      {Array.from({ length: 6 }, (_, index) => (
        <div className="carousel-illustration__rider" key={index} style={{ '--horse-phase': `${index * -2}s` }}>
          <svg className="carousel-illustration__horse" viewBox="200 400 215 157">
            <defs>
              <clipPath id={`carousel-horse-${index}`}>
                <path d="M207 536L215 515L218 494L231 483L238 470L255 471L270 475L292 474L309 461L320 439L334 424L341 412L350 416L359 412L365 424L377 433L389 445L388 454L379 457L367 448L360 445L355 459L352 477L344 490L348 506L368 519L391 536L398 547L389 549L377 537L353 526L332 510L320 501L309 506L302 520L291 531L281 547L272 552L266 549L274 532L287 516L291 505L278 510L267 510L258 503L246 499L238 508L231 523L220 538L210 550L202 547Z" />
              </clipPath>
            </defs>
            <image href={carousel} width="600" height="600" clipPath={`url(#carousel-horse-${index})`} />
          </svg>
        </div>
      ))}
    </div>
  )
}
