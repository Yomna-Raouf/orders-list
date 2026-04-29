import type { Order, OrderStatus } from '@/types/order'

type OrderStatusCssKey = 'new' | 'picking' | 'delivering' | 'delivered'

/** Maps  status to CSS module suffix (`order-card__badge--*`, `orders-list__status-pill--*`). */
export const orderStatusToCssKey = (status: OrderStatus): OrderStatusCssKey =>
  status.toLowerCase() as OrderStatusCssKey

/** Short label for item count, e.g. table and card tags. */
export const formatOrderItemCountLabel = (order: Pick<Order, 'items'>): string => {
  const n = order.items.length
  return `${n} ${n === 1 ? 'Item' : 'Items'}`
}
