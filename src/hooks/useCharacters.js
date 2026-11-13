import { useEffect, useState } from 'react'
import { fetchCharacters } from '../api/disneyApi.js'

export function useCharacters(name, appearanceType, appearance, page) {
  const [data, setData] = useState({
    results: [],
    count: 0,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    const timer = window.setTimeout(async () => {
      setLoading(true)
      setError('')
      try {
        const response = await fetchCharacters({
          name,
          appearanceType,
          appearance,
          page,
          signal: controller.signal,
        })
        setData(response)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unable to load Disney characters.')
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }, name || appearance ? 250 : 0)

    return () => {
      window.clearTimeout(timer)
      controller.abort()
    }
  }, [name, appearanceType, appearance, page, refreshKey])

  return {
    ...data,
    loading,
    error,
    refresh: () => setRefreshKey((current) => current + 1),
  }
}
