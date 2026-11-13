const API_BASE_URL = 'https://api.disneyapi.dev'
const PAGE_SIZE = 12

async function requestJson(url, signal) {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`The Disney API returned ${response.status}. Please try again.`)
  }
  return response.json()
}

export async function fetchCharacters({
  page = 1,
  name = '',
  appearanceType = '',
  appearance = '',
  signal,
} = {}) {
  const url = new URL(`${API_BASE_URL}/character`)
  url.searchParams.set('page', page)
  url.searchParams.set('pageSize', PAGE_SIZE)

  if (name.trim()) url.searchParams.set('name', name.trim())
  if (appearanceType) {
    url.searchParams.set(appearanceType, appearance.trim())
  }

  const payload = await requestJson(url, signal)
  if (!Array.isArray(payload.data) || !payload.info) {
    throw new Error('The Disney API returned an unexpected response. Please try again.')
  }

  return {
    results: payload.data,
    count: payload.info.count,
    totalPages: payload.info.totalPages,
    hasNext: Boolean(payload.info.nextPage),
    hasPrevious: Boolean(payload.info.previousPage),
  }
}

export async function fetchCharacter(id, signal) {
  const payload = await requestJson(`${API_BASE_URL}/character/${encodeURIComponent(id)}`, signal)
  const character = payload.data ?? payload
  if (!character || typeof character !== 'object' || !character.name) {
    throw new Error('The Disney API returned an unexpected character record.')
  }
  return character
}

export const DISNEY_API_URL = API_BASE_URL
export const CHARACTER_PAGE_SIZE = PAGE_SIZE
