import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchCharacter } from '../api/disneyApi.js'
import Icon from '../components/Icon.jsx'
import { CHARACTER_FIELDS, getCharacterTitle, normalizeImageUrl } from '../data/characters.js'
import { useFavorites } from '../state/useFavorites.js'

export default function ItemPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const validId = /^\d+$/.test(id)
  const [loading, setLoading] = useState(validId)
  const [error, setError] = useState(validId ? '' : 'This character could not be found.')
  const { isFavorite, toggleFavorite } = useFavorites()

  useEffect(() => {
    if (!validId) return undefined
    const controller = new AbortController()
    fetchCharacter(id, controller.signal)
      .then(setCharacter)
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unable to load this character.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })
    return () => controller.abort()
  }, [id, validId])

  const visibleFields = character
    ? CHARACTER_FIELDS.filter(([key]) => Array.isArray(character[key]) && character[key].length)
    : []
  const imageUrl = normalizeImageUrl(character?.imageUrl)

  return (
    <section className="detail-page">
      <Link to="/characters" className="back-link">
        <Icon name="back" size={16} /> BACK TO CHARACTERS
      </Link>
      {loading ? (
        <div className="detail-loading"><div className="loading-ring" /><span>TURNING THE PAGE...</span></div>
      ) : error ? (
        <div className="state-panel detail-error" role="alert">
          <span className="state-symbol">!</span>
          <h2>Character unavailable</h2>
          <p>{error}</p>
          <Link to="/characters" className="button button-dark">BACK TO CHARACTERS</Link>
        </div>
      ) : character && (
        <>
          <div className="detail-hero">
            <div className="detail-art">
              <div className="detail-image-fallback"><Icon name="star" size={72} /></div>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={getCharacterTitle(character)}
                  onError={(event) => {
                    event.currentTarget.hidden = true
                  }}
                />
              )}
              <span className="detail-art-label">A DISNEY CHARACTER</span>
              <span className="detail-art-code">STORYBOOK FILE • #{id}</span>
              <span className="detail-art-star">✦</span>
            </div>
            <div className="detail-heading">
              <span className="eyebrow"><span className="eyebrow-line" /> CHARACTER NO. {id}</span>
              <h1>{getCharacterTitle(character)}<span className="heading-period">.</span></h1>
              <p>A familiar face from the Disney storybook. Discover the films, shows, and adventures this character appears in.</p>
              <button
                type="button"
                className={`button ${isFavorite(character) ? 'button-saved' : 'button-dark'}`}
                onClick={() => toggleFavorite(character, 'characters')}
                aria-pressed={isFavorite(character)}
              >
                <Icon name="heart" size={16} />
                {isFavorite(character) ? 'SAVED TO YOUR FAVORITES' : 'SAVE THIS CHARACTER'}
              </button>
            </div>
          </div>
          <div className="detail-data-heading">
            <div><span className="eyebrow"><span className="eyebrow-line" /> THE STORY SO FAR</span><h2>Appearances & more<span className="heading-period">.</span></h2></div>
            <span>{visibleFields.length.toString().padStart(2, '0')} CATEGORIES</span>
          </div>
          {visibleFields.length ? (
            <div className="appearance-sections">
              {visibleFields.map(([key, label]) => (
                <section key={key} className="appearance-section">
                  <h3>{label}<span>{character[key].length.toString().padStart(2, '0')}</span></h3>
                  <ul>
                    {character[key].map((value, index) => <li key={`${value}-${index}`}>{value}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <div className="empty-appearances">No appearances have been listed for this character yet.</div>
          )}
          <div className="detail-source">
            <span>COMMUNITY-MAINTAINED DISNEY CHARACTER API</span>
            {character.url && <a href={character.url} target="_blank" rel="noreferrer">VIEW API RECORD <Icon name="external" size={14} /></a>}
          </div>
        </>
      )}
    </section>
  )
}
