import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import FeaturedCharacter from './FeaturedCharacter.jsx'
import CharacterGrid from './CharacterGrid.jsx'
import Icon from './Icon.jsx'
import Pagination from './Pagination.jsx'
import { APPEARANCE_TYPES } from '../data/characters.js'
import { useCharacters } from '../hooks/useCharacters.js'
import { useFavorites } from '../state/useFavorites.js'

function LoadingStage() {
  return (
    <div className="feature-loading" role="status">
      <span className="loading-ring" />
      <span>Finding a little Disney magic...</span>
    </div>
  )
}

export default function CharacterExplorer() {
  const { search: name, setSearch: setName } = useOutletContext()
  const [appearanceType, setAppearanceType] = useState('')
  const [appearance, setAppearance] = useState('')
  const [pagination, setPagination] = useState({ query: '', page: 1 })
  const query = `${name}\0${appearanceType}\0${appearance}`
  const page = pagination.query === query ? pagination.page : 1
  const selectionKey = `${query}\0${page}`
  const [selection, setSelection] = useState({ key: '', id: null })
  const { results, totalPages, hasNext, hasPrevious, loading, error, refresh } =
    useCharacters(name, name ? '' : appearanceType, name ? '' : appearance, page)
  const { isFavorite, toggleFavorite } = useFavorites()
  const featured = results.find((character) => character._id === selection.id && selection.key === selectionKey) || results[0]
  const featuredIndex = results.findIndex((character) => character._id === featured?._id)
  const selectedAppearanceType = APPEARANCE_TYPES.find((type) => type.value === appearanceType)

  const clearFilters = () => {
    setName('')
    setAppearanceType('')
    setAppearance('')
    setPagination({ query: '', page: 1 })
  }

  const selectCharacter = (character) => setSelection({ key: selectionKey, id: character._id })
  const moveFeatured = (step) => {
    if (!results.length) return
    const nextIndex = (featuredIndex + step + results.length) % results.length
    selectCharacter(results[nextIndex])
  }

  const movePage = (nextPage) => {
    setPagination({ query, page: nextPage })
    setSelection({ key: '', id: null })
  }

  return (
    <section className="explorer-section">
      {loading ? <LoadingStage /> : error ? (
        <div className="feature-message error-panel" role="alert">
          <span className="state-symbol">!</span>
          <h1>We lost the magic for a moment</h1>
          <p>{error}</p>
          <button className="button button-dark" type="button" onClick={refresh}>Try again</button>
        </div>
      ) : featured ? (
        <FeaturedCharacter
          character={featured}
          onPrevious={() => moveFeatured(-1)}
          onNext={() => moveFeatured(1)}
          isFavorite={isFavorite(featured)}
          onToggleFavorite={() => toggleFavorite(featured, 'characters')}
        />
      ) : (
        <div className="feature-message">
          <span className="state-symbol"><Icon name="search" size={22} /></span>
          <h1>No characters found</h1>
          <p>Try a different name or appearance, and see where the story takes you.</p>
          <button className="button button-dark" type="button" onClick={clearFilters}>Clear search</button>
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <section className="character-grid-section" aria-labelledby="character-grid-title">
          <div className="character-grid-heading">
            <div>
              <span>
                {selectedAppearanceType && !name
                  ? `FILTERED BY ${selectedAppearanceType.label.toUpperCase()}`
                  : 'THE DISNEY COLLECTION'}
              </span>
              <h2 id="character-grid-title">
                {selectedAppearanceType && !name
                  ? `${selectedAppearanceType.label} characters`
                  : 'Characters to discover'}
              </h2>
            </div>
            <span>{results.length} profiles</span>
          </div>
          <CharacterGrid characters={results} />
        </section>
      )}

      <div className="explorer-footer-controls">
        <div className="appearance-filter">
          <span>Looking for a certain story?</span>
          <label className="filter-select">
            <select
              value={appearanceType}
              onChange={(event) => {
                setName('')
                setAppearanceType(event.target.value)
                if (!event.target.value) setAppearance('')
                setSelection({ key: '', id: null })
              }}
              aria-label="Filter by appearance type"
              disabled={Boolean(name)}
            >
              <option value="">All characters</option>
              {APPEARANCE_TYPES.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </label>
          <input
            className="appearance-input"
            type="search"
            value={appearance}
            onChange={(event) => {
              setAppearance(event.target.value)
              setSelection({ key: '', id: null })
            }}
            placeholder={selectedAppearanceType?.searchPlaceholder || 'Choose a category first'}
            aria-label="Filter by appearance name"
            disabled={!appearanceType || Boolean(name)}
          />
        </div>
        {!loading && !error && results.length > 0 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            hasPrevious={hasPrevious}
            hasNext={hasNext}
            onPrevious={() => movePage(page - 1)}
            onNext={() => movePage(page + 1)}
          />
        )}
      </div>
    </section>
  )
}
