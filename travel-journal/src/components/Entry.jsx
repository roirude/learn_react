/**
 * Challenge: Fix our component! 😱
 */

export default function Entry({entry}) {
  return (
    <article>
      <div className="main-image-container">
        <img className="main-image" src={entry.img.src} alt={entry.img.alt} />
      </div>
      <div>
        <p className="location">
          <img src="src/assets/marker.png" alt="Location mark" />
          <span>{entry.country}</span>
          <a href={entry.googleMapsLink}>
            View on Google Maps
          </a>
        </p>
        <h2 className="title">{ entry.title }</h2>
        <p className="date">{ entry.dates }</p>
        <p className="description">
          {
            entry.text
          }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        </p>
      </div>
    </article>
  );
}
