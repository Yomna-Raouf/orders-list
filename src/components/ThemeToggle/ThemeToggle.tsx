import { MoonIcon } from '@/components/icons/MoonIcon'
import { SunIcon } from '@/components/icons/SunIcon'
import type { ThemeMode } from '@/types/theme'
import styles from './ThemeToggle.module.css'

type ThemeToggleProps = {
  theme: ThemeMode
  onToggle: () => void
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    className={styles['orders-dashboard__theme-toggle']}
    onClick={onToggle}
    aria-pressed={theme === 'dark'}
    aria-label={theme === 'light' ? 'Enable dark theme' : 'Enable light theme'}
  >
    <span className={styles['orders-dashboard__theme-toggle-track']} aria-hidden="true">
      <span className={styles['orders-dashboard__theme-toggle-icon-slot']}>
        <SunIcon className={styles['orders-dashboard__theme-toggle-icon']} />
      </span>
      <span className={styles['orders-dashboard__theme-toggle-icon-slot']}>
        <MoonIcon className={styles['orders-dashboard__theme-toggle-icon']} />
      </span>
      <span className={styles['orders-dashboard__theme-toggle-thumb']} />
    </span>
  </button>
)
