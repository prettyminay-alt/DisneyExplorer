import { Link } from 'react-router-dom'
import { getCharacterAppearances, getCharacterRoute, getCharacterTitle, normalizeImageUrl } from '../data/characters.js'
import Icon from './Icon.jsx'

function appearanceTags(character) {
  return [
    ['films', 'Film'],
    ['tvShows', 'TV'],
    ['videoGames', 'Game'],
    ['parkAttractions', 'Parks'],
  ].filter(([key]) => character[key]?.length)
}

export default function FeaturedCharacter({ character, onPrevious, onNext, isFavorite, onToggleFavorite }) {
  const image = normalizeImageUrl(character.imageUrl)
  const appearances = getCharacterAppearances(character)
  const tags = appearanceTags(character)

  return (
    <section className="feature-stage" aria-label={`Featured character: ${getCharacterTitle(character)}`}>
      {image && <div className="feature-backdrop" style={{ backgroundImage: `url("${image}")` }} />}
      <div className="feature-art-glow" />
      {image && <img className="feature-artwork" src={image} alt="" />}
      <div className="feature-vignette" />

      <div className="feature-content">
        <span className="feature-eyebrow"><span className="live-indicator" /> DISNEY CHARACTER SPOTLIGHT</span>
        <h1>{getCharacterTitle(character)}</h1>
        <p>
          {appearances.length
            ? `A familiar face from ${appearances.slice(0, 2).join(' and ')}${appearances.length > 2 ? ` and ${appearances.length - 2} more stories` : ''}.`
            : 'Discover this character and explore their place in the Disney storybook.'}
        </p>
        <div className="feature-tags" aria-label="Appearance types">
          {tags.length
            ? tags.map(([, label]) => <span key={label}>{label}</span>)
            : <span>Character profile</span>}
          {character._id && <span>#{character._id}</span>}
        </div>
        <div className="feature-actions">
          <Link className="feature-watch" to={getCharacterRoute(character)}>
            <Icon name="play" size={16} /> View character
          </Link>
          <button
            className={`feature-save${isFavorite ? ' saved' : ''}`}
            type="button"
            onClick={onToggleFavorite}
            aria-pressed={isFavorite}
          >
            <Icon name="heart" size={16} /> {isFavorite ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>

      <div className="feature-carousel-controls">
        <button type="button" onClick={onPrevious} aria-label="Previous featured character">
          <Icon name="back" size={19} />
        </button>
        <button type="button" onClick={onNext} aria-label="Next featured character">
          <Icon name="arrow" size={19} />
        </button>
      </div>

    </section>
  )
}
