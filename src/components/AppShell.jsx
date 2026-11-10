import { useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useFavorites } from '../state/useFavorites.js'
import Icon from './Icon.jsx'
import SearchBar from './SearchBar.jsx'

export default function AppShell() {
  const { favorites, storageError } = useFavorites()
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isGallery = location.pathname === '/' || location.pathname === '/characters'

  const updateSearch = (value) => {
    setSearch(value)
    if (location.pathname !== '/') navigate('/')
  }

  return (
    <div className={`app-shell${isGallery ? ' gallery-shell' : ''}`}>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-brand-search">
            <NavLink className="brand" to="/" aria-label="Disney Explorer home">
              <span className="brand-mark"><Icon name="star" size={23} /></span>
              <span className="brand-copy">
                <span className="brand-title">Disney</span>
                <span className="brand-subtitle">Characters</span>
              </span>
            </NavLink>
            <SearchBar value={search} onChange={updateSearch} />
          </div>
          <div className="header-menu">
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span>Menu</span><Icon name="grid" size={17} />
            </button>
            {menuOpen && (
              <nav className="menu-popover" id="site-menu" aria-label="Main navigation">
                <NavLink to="/" onClick={() => setMenuOpen(false)}>Explore characters</NavLink>
                <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>Favorites <span>{favorites.length}</span></NavLink>
              </nav>
            )}
          </div>
        </div>
      </header>
      {storageError && <div className="storage-alert" role="alert">{storageError}</div>}
      <main className="page-main"><Outlet context={{ search, setSearch }} /></main>
      <nav className="cinema-dock" aria-label="Quick navigation">
        <NavLink to="/" end aria-label="Explore characters"><Icon name="star" size={17} /></NavLink>
        <NavLink to="/favorites" aria-label={`Favorites, ${favorites.length} saved`}><Icon name="heart" size={17} /><span>{favorites.length}</span></NavLink>
        <a href="https://disneyapi.dev/" target="_blank" rel="noreferrer" aria-label="Disney API"><Icon name="external" size={16} /></a>
      </nav>
      <footer className="site-footer">
        <span>THE STORIES THAT STAY WITH US.</span>
        <span>CHARACTER DATA BY <a href="https://disneyapi.dev/" target="_blank" rel="noreferrer">DISNEY API</a></span>
      </footer>
    </div>
  )
}
