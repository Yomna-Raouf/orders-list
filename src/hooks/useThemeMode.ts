import { useCallback, useEffect, useState } from 'react'
import type { ThemeMode } from '@/types/theme'

const STORAGE_KEY = 'orders-list:theme'

const isThemeMode = (value: unknown): value is ThemeMode =>
  value === 'light' || value === 'dark'

const readStoredTheme = (): ThemeMode | null => {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY)
    return storedValue !== null && isThemeMode(storedValue) ? storedValue : null
  } catch {
    return null
  }
}

const writeStoredTheme = (theme: ThemeMode) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* ignore quota / private mode */
  }
}

export const useThemeMode = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => readStoredTheme() ?? 'light')

  useEffect(() => {
    writeStoredTheme(theme)
  }, [theme])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY || event.newValue === null) {
        return
      }
      if (isThemeMode(event.newValue)) {
        setTheme(event.newValue)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme }
}
