import { Select, type SelectOption } from '@/components/Select/Select'
import { STATUS_OPTIONS } from '@/data/orders'
import type { DateOrder, StatusFilter } from '@/types/order'
import styles from './OrdersFilters.module.css'

const DATE_SORT_OPTIONS: SelectOption<DateOrder>[] = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
]

const STATUS_SELECT_OPTIONS: SelectOption<StatusFilter>[] = STATUS_OPTIONS.map(
  (status) => ({
    value: status,
    label: status,
  })
)

type OrdersFiltersProps = {
  statusFilter: StatusFilter
  onStatusChange: (value: StatusFilter) => void
  query: string
  onQueryChange: (value: string) => void
  dateOrder: DateOrder
  onDateOrderChange: (value: DateOrder) => void
}

export const OrdersFilters = ({
  statusFilter,
  onStatusChange,
  query,
  onQueryChange,
  dateOrder,
  onDateOrderChange,
}: OrdersFiltersProps) => (
  <section className={styles['orders__filters']} aria-label="Filter and sort orders">
    <div className={styles['orders__toolbar']}>
      <label className={styles['orders__search']} htmlFor="orders-search">
        <span className={styles['orders__search-icon']} aria-hidden="true" />
        <input
          id="orders-search"
          className={styles['orders__search-input']}
          type="search"
          placeholder="Search by customer name or order ID"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          autoComplete="off"
        />
      </label>

      <div className={styles['orders__control-group']}>
        <Select<StatusFilter>
          id="order-status-filter"
          label="Order status"
          value={statusFilter}
          options={STATUS_SELECT_OPTIONS}
          onChange={onStatusChange}
        />
        <Select<DateOrder>
          id="order-date-sort"
          label="Sort by date"
          value={dateOrder}
          options={DATE_SORT_OPTIONS}
          onChange={onDateOrderChange}
        />
      </div>
    </div>
  </section>
)
