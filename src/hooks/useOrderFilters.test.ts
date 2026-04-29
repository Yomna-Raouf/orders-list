import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { orders } from '@/data/orders'
import { useOrderFilters } from '@/hooks/useOrderFilters'

describe('useOrderFilters', () => {
  it('initializes with default filters and newest-first list', () => {
    const { result } = renderHook(() => useOrderFilters(orders))

    expect(result.current.statusFilter).toBe('All')
    expect(result.current.query).toBe('')
    expect(result.current.dateOrder).toBe('newest')
    expect(result.current.displayedOrders.map((order) => order.id)).toEqual([
      1016, 1017, 1013, 1012, 1014, 1015,
    ])
  })

  it('updates displayed orders when status, query, and sort change', () => {
    const { result } = renderHook(() => useOrderFilters(orders))

    act(() => {
      result.current.setStatusFilter('Picking')
    })
    expect(result.current.displayedOrders.map((order) => order.id)).toEqual([1017, 1013])

    act(() => {
      result.current.setQuery('omar')
    })
    expect(result.current.displayedOrders.map((order) => order.id)).toEqual([1013])

    act(() => {
      result.current.setDateOrder('oldest')
      result.current.setQuery('')
    })
    expect(result.current.displayedOrders.map((order) => order.id)).toEqual([1013, 1017])
  })
})
