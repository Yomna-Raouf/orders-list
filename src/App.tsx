import { OrdersFilters } from '@/components/OrdersFilters/OrdersFilters'
import { OrdersHeader } from '@/components/OrdersHeader/OrdersHeader'
import { OrdersList } from '@/components/OrdersList/OrdersList'
import { orders } from '@/data/orders'
import { useOrderFilters } from '@/hooks/useOrderFilters'
import { useThemeMode } from '@/hooks/useThemeMode'
import styles from './App.module.css'

function App() {
  const { theme, toggleTheme } = useThemeMode()
  const {
    statusFilter,
    setStatusFilter,
    query,
    setQuery,
    dateOrder,
    setDateOrder,
    displayedOrders,
  } = useOrderFilters(orders)

  return (
    <main className={styles['orders-dashboard']} data-theme={theme}>
      <section className={styles['orders-dashboard__card']}>
        <div className={styles['orders-dashboard__intro']}>
          <OrdersHeader theme={theme} onToggleTheme={toggleTheme} />
          <OrdersFilters
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            query={query}
            onQueryChange={setQuery}
            dateOrder={dateOrder}
            onDateOrderChange={setDateOrder}
          />
        </div>
        <div className={styles['orders-dashboard__scroll']}>
          <OrdersList orders={displayedOrders} />
        </div>
      </section>
    </main>
  )
}

export default App
