import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useThemeMode } from '@/hooks/useThemeMode'

const STORAGE_KEY = 'orders-list:theme'

describe('useThemeMode', () => {
  it('defaults to light when no stored value exists', () => {
    const { result } = renderHook(() => useThemeMode())
    expect(result.current.theme).toBe('light')
  })

  it('hydrates from localStorage and toggles theme', () => {
    localStorage.setItem(STORAGE_KEY, 'dark')
    const { result } = renderHook(() => useThemeMode())

    expect(result.current.theme).toBe('dark')

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('light')
    expect(localStorage.getItem(STORAGE_KEY)).toBe('light')
  })

  it('updates state when storage event comes from another tab', () => {
    const { result } = renderHook(() => useThemeMode())
    expect(result.current.theme).toBe('light')

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: STORAGE_KEY,
          newValue: 'dark',
        })
      )
    })

    expect(result.current.theme).toBe('dark')
  })
})
