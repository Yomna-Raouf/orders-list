import { DataTable, type DataTableColumn } from '@/components/DataTable/DataTable'
import { OrderCard } from '@/components/OrderCard/OrderCard'
import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { PersonIcon } from '@/components/icons/PersonIcon'
import { ShoppingCartIcon } from '@/components/icons/ShoppingCartIcon'
import type { Order } from '@/types/order'
import { formatDate } from '@/utils/date'
import { formatOrderItemCountLabel, orderStatusToCssKey } from '@/utils/orderDisplay'
import styles from './OrdersList.module.css'

type OrdersListProps = {
  orders: Order[]
}

const buildOrderColumns = (listStyles: typeof styles): DataTableColumn<Order>[] => [
  {
    id: 'id',
    header: 'Order ID',
    cell: (order) => (
      <strong className={listStyles['orders-list__order-id']}>#{order.id}</strong>
    ),
  },
  {
    id: 'customer',
    header: 'Customer',
    cell: (order) => (
      <span className={listStyles['orders-list__customer']}>
        <PersonIcon className={listStyles['orders-list__customer-icon']} />
        {order.customerName}
      </span>
    ),
  },
  {
    id: 'items',
    header: 'Items',
    cell: (order) => (
      <span className={listStyles['orders-list__items']} title={order.items.join(', ')}>
        <ShoppingCartIcon className={listStyles['orders-list__items-icon']} />
        {formatOrderItemCountLabel(order)}
      </span>
    ),
  },
  {
    id: 'date',
    header: 'Date',
    cell: (order) => (
      <span className={listStyles['orders-list__date']}>
        <CalendarIcon className={listStyles['orders-list__date-icon']} />
        {formatDate(order.createdAt)}
      </span>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    cell: (order) => {
      const key = orderStatusToCssKey(order.status)
      return (
        <span
          className={`${listStyles['orders-list__status-pill']} ${listStyles[`orders-list__status-pill--${key}`]}`}
        >
          {order.status}
        </span>
      )
    },
  },
]
const ORDER_COLUMNS = buildOrderColumns(styles)

export const OrdersList = ({ orders }: OrdersListProps) => {
  if (orders.length === 0) {
    return (
      <div className={styles['orders-list__empty-state']}>
        <p className={styles['orders-list__empty-title']}>No orders found</p>
        <p className={styles['orders-list__empty-subtitle']}>
          Try adjusting your filters or search to see more results.
        </p>
      </div>
    )
  }

  return (
    <div className={styles['orders-list__orders-region']}>
      <div
        className={`${styles['orders-list__view']} ${styles['orders-list__view--table']}`}
      >
        <DataTable
          ariaLabel="Orders"
          columns={ORDER_COLUMNS}
          rows={orders}
          getRowKey={(order) => order.id}
        />
      </div>

      <div
        className={`${styles['orders-list__view']} ${styles['orders-list__view--cards']}`}
      >
        <div className={styles['orders-list__grid']}>
          {orders.map((order, index) => (
            <OrderCard key={order.id} order={order} isStriped={index % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  )
}
