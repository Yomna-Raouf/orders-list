export type OrderStatus = 'New' | 'Picking' | 'Delivering' | 'Delivered'

export type DateOrder = 'newest' | 'oldest'

export type StatusFilter = OrderStatus | 'All'

export type Order = {
  id: number
  customerName: string
  status: OrderStatus
  items: string[]
  createdAt: string
}
