import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { PersonIcon } from '@/components/icons/PersonIcon'
import { ShoppingCartIcon } from '@/components/icons/ShoppingCartIcon'
import type { Order } from '@/types/order'
import { formatDate, formatDateShort } from '@/utils/date'
import { formatOrderItemCountLabel, orderStatusToCssKey } from '@/utils/orderDisplay'
import styles from './OrderCard.module.css'

type OrderCardProps = {
  order: Order
  isStriped: boolean
}

export const OrderCard = ({ order, isStriped }: OrderCardProps) => {
  const statusKey = orderStatusToCssKey(order.status)
  const itemsLabel = formatOrderItemCountLabel(order)

  return (
    <article
      className={`${styles['order-card']} ${isStriped ? styles['order-card--striped'] : ''}`}
      aria-label={`Order ${order.id}`}
    >
      <header className={styles['order-card__header']}>
        <span className={styles['order-card__id']}>Order #{order.id}</span>
        <span
          className={`${styles['order-card__badge']} ${
            styles[`order-card__badge--${statusKey}`]
          }`}
        >
          {order.status}
        </span>
      </header>
      <div className={styles['order-card__body']}>
        <div className={styles['order-card__tags']}>
          <span className={styles['order-card__tag']}>
            <PersonIcon />
            <span className={styles['order-card__tag-text']}>{order.customerName}</span>
          </span>
          <span className={styles['order-card__tag']}>
            <ShoppingCartIcon />
            <span className={styles['order-card__tag-text']}>{itemsLabel}</span>
          </span>
          <span className={styles['order-card__tag']}>
            <CalendarIcon />
            <span
              className={styles['order-card__tag-text']}
              title={formatDate(order.createdAt)}
            >
              {formatDateShort(order.createdAt)}
            </span>
          </span>
        </div>
        <p className={styles['order-card__items-preview']} title={order.items.join(', ')}>
          <span className={styles['order-card__items-label']}>Items: </span>
          {order.items.join(', ')}
        </p>
      </div>
    </article>
  )
}
