import { describe, expect, it } from 'vitest'
import { orders } from '@/data/orders'
import {
  filterOrdersByQuery,
  filterOrdersByStatus,
  sortOrdersByDate,
} from '@/utils/orderFiltering'

describe('orderFiltering', () => {
  it('returns all orders when status filter is All', () => {
    expect(filterOrdersByStatus(orders, 'All')).toEqual(orders)
  })

  it('filters orders by status', () => {
    const result = filterOrdersByStatus(orders, 'Picking')
    expect(result.map((order) => order.id)).toEqual([1013, 1017])
  })

  it('filters by customer name and order id query', () => {
    expect(filterOrdersByQuery(orders, 'maya').map((order) => order.id)).toEqual([1014])
    expect(filterOrdersByQuery(orders, '1016').map((order) => order.id)).toEqual([1016])
  })

  it('treats empty or whitespace query as no-op', () => {
    expect(filterOrdersByQuery(orders, '   ')).toEqual(orders)
  })

  it('sorts by newest first and does not mutate original array', () => {
    const original = [...orders]
    const result = sortOrdersByDate(orders, 'newest')

    expect(result.map((order) => order.id)).toEqual([1016, 1017, 1013, 1012, 1014, 1015])
    expect(orders).toEqual(original)
  })

  it('sorts by oldest first', () => {
    const result = sortOrdersByDate(orders, 'oldest')
    expect(result.map((order) => order.id)).toEqual([1015, 1014, 1012, 1013, 1017, 1016])
  })
})
