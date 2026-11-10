export const APPEARANCE_TYPES = [
  { value: 'films', label: 'Film', searchPlaceholder: 'Film title...' },
  { value: 'tvShows', label: 'TV show', searchPlaceholder: 'TV show title...' },
  { value: 'videoGames', label: 'Video game', searchPlaceholder: 'Video game title...' },
  { value: 'parkAttractions', label: 'Park attraction', searchPlaceholder: 'Attraction name...' },
]

export const getCharacterTitle = (character) => character?.name || 'Unknown character'

export const getCharacterId = (character) => character?._id?.toString() || ''

export const getCharacterRoute = (character) => `/character/${getCharacterId(character)}`

export const getCharacterAppearances = (character) => [
  ...(character?.films || []),
  ...(character?.tvShows || []),
]

export const formatKey = (key) =>
  key.replace(/([a-z])([A-Z])/g, '$1 $2').replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())

export const CHARACTER_FIELDS = [
  ['films', 'Films'],
  ['shortFilms', 'Short films'],
  ['tvShows', 'TV shows'],
  ['videoGames', 'Video games'],
  ['parkAttractions', 'Park attractions'],
  ['allies', 'Allies'],
  ['enemies', 'Enemies'],
]

export const normalizeImageUrl = (url) =>
  typeof url === 'string' && /^https?:\/\//i.test(url) ? url : ''
