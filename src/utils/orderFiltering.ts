import type { DateOrder, Order, StatusFilter } from '@/types/order'

export const filterOrdersByStatus = (
  orders: Order[],
  statusFilter: StatusFilter
): Order[] => {
  if (statusFilter === 'All') {
    return orders
  }
  return orders.filter((order) => order.status === statusFilter)
}

export const filterOrdersByQuery = (orders: Order[], query: string): Order[] => {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) {
    return orders
  }
  return orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(normalizedQuery) ||
      String(order.id).includes(normalizedQuery)
  )
}

export const sortOrdersByDate = (orders: Order[], dateOrder: DateOrder): Order[] =>
  orders.toSorted((left, right) => {
    const leftTime = new Date(left.createdAt).getTime()
    const rightTime = new Date(right.createdAt).getTime()
    return dateOrder === 'newest' ? rightTime - leftTime : leftTime - rightTime
  })
