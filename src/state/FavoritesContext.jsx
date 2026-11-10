import { useState } from 'react'
import FavoritesContext from './FavoritesContext.js'

const STORAGE_KEY = 'disney-explorer-favorites'

function readFavorites() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed)
      ? parsed.filter((favorite) => favorite && typeof favorite.url === 'string')
      : []
  } catch (error) {
    console.error('Unable to read saved favorites from local storage.', error)
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(readFavorites)
  const [storageError, setStorageError] = useState('')

  const toggleFavorite = (item, resource) => {
    const url = item.url
    const exists = favorites.some((favorite) => favorite.url === url)
    const updated = exists
      ? favorites.filter((favorite) => favorite.url !== url)
      : [{ ...item, resource }, ...favorites]

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setFavorites(updated)
      setStorageError('')
    } catch (error) {
      console.error('Unable to save favorites to local storage.', error)
      setStorageError('Your browser could not save this favorite. Check your storage settings and try again.')
    }
  }

  const value = {
    favorites,
    storageError,
    toggleFavorite,
    isFavorite: (item) => favorites.some((favorite) => favorite.url === item.url),
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
