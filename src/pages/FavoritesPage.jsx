import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import CharacterGrid from '../components/CharacterGrid.jsx'
import { useFavorites } from '../state/useFavorites.js'

export default function FavoritesPage() {
  const { favorites } = useFavorites()

  return (
    <section className="saved-page">
      <div className="saved-header">
        <span className="eyebrow"><span className="eyebrow-line" /> YOUR PERSONAL COLLECTION</span>
        <h1>Favorite <em>characters.</em></h1>
        <p>Keep the characters you love close, ready for another story whenever you are.</p>
        <div className="saved-total"><Icon name="heart" size={17} /> {favorites.length} SAVED {favorites.length === 1 ? 'CHARACTER' : 'CHARACTERS'}</div>
      </div>
      {favorites.length ? (
        <CharacterGrid characters={favorites} className="favorites-grid" />
      ) : (
        <div className="empty-saved">
          <div className="empty-orbit"><Icon name="orbit" size={40} /></div>
          <h2>No favorites <em>just yet.</em></h2>
          <p>Tap the heart on a character card to save someone special to your collection.</p>
          <Link className="button button-dark" to="/characters">EXPLORE CHARACTERS <Icon name="arrow" size={16} /></Link>
        </div>
      )}
    </section>
  )
}
