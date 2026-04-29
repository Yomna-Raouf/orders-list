import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'
import type { ThemeMode } from '@/types/theme'
import styles from './OrdersHeader.module.css'

type OrdersHeaderProps = {
  theme: ThemeMode
  onToggleTheme: () => void
}

export const OrdersHeader = ({ theme, onToggleTheme }: OrdersHeaderProps) => (
  <header className={styles['orders__header']}>
    <div className={styles['orders__header-main']}>
      <h1 className={styles['orders__title']}>Orders</h1>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </div>
  </header>
)
