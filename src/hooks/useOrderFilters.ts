import { useMemo, useState } from 'react'
import type { DateOrder, Order, StatusFilter } from '@/types/order'
import {
  filterOrdersByQuery,
  filterOrdersByStatus,
  sortOrdersByDate,
} from '@/utils/orderFiltering'

export const useOrderFilters = (orders: Order[]) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')
  const [query, setQuery] = useState('')
  const [dateOrder, setDateOrder] = useState<DateOrder>('newest')

  const displayedOrders = useMemo(() => {
    const byStatus = filterOrdersByStatus(orders, statusFilter)
    const byQuery = filterOrdersByQuery(byStatus, query)
    return sortOrdersByDate(byQuery, dateOrder)
  }, [dateOrder, orders, query, statusFilter])

  return {
    statusFilter,
    setStatusFilter,
    query,
    setQuery,
    dateOrder,
    setDateOrder,
    displayedOrders,
  }
}
