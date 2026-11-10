import { Link } from 'react-router-dom'
import { getCharacterAppearances, getCharacterRoute, getCharacterTitle, normalizeImageUrl } from '../data/characters.js'
import { useFavorites } from '../state/useFavorites.js'
import Icon from './Icon.jsx'

export default function ResourceCard({ character, index }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(character)
  const appearances = getCharacterAppearances(character)
  const imageUrl = normalizeImageUrl(character.imageUrl)

  return (
    <article className={`resource-card card-tone-${(index % 4) + 1}`}>
      <div className="card-art">
        <div className="card-color-panel">
          <span className="card-title">{getCharacterTitle(character)}</span>
          <span className="card-movie">
            {appearances[0] ? <>Movie&nbsp; <strong>{appearances[0]}</strong></> : 'Disney character'}
          </span>
        </div>
        {imageUrl && (
          <img
            className="character-image"
            src={imageUrl}
            alt={getCharacterTitle(character)}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.hidden = true
            }}
          />
        )}
        <div className="image-fallback"><Icon name="star" size={58} /></div>
        <button
          className={`favorite-button${favorite ? ' is-favorite' : ''}`}
          type="button"
          onClick={() => toggleFavorite(character, 'characters')}
          aria-label={favorite ? `Remove ${getCharacterTitle(character)} from favorites` : `Save ${getCharacterTitle(character)}`}
          aria-pressed={favorite}
        >
          <Icon name="heart" size={18} />
        </button>
      </div>
      <Link className="card-content" to={getCharacterRoute(character)}>
        <span>VIEW CHARACTER PROFILE <Icon name="arrow" size={15} /></span>
      </Link>
    </article>
  )
}
