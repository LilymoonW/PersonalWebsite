// Carousel layout adapted for blank placeholders from Aceternity UI:
// https://ui.aceternity.com/components/apple-cards-carousel
// The finite scroll row is replaced with two matching groups for looping.
// No modal or card actions until actual project content is supplied.
export default function AppleCardsCarousel({ paused }) {
  return (
    <div className="project-carousel" role="region" aria-label="Upcoming projects">
      <div className="project-carousel__track" data-paused={paused}>
        {[0, 1].map(copy => (
          <div className="project-carousel__group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
            {Array.from({length: 6}, (_, index) => (
              <div className="project-carousel__card" role="img" aria-label={`Project ${index + 1} placeholder`} key={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
