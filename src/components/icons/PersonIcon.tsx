import styles from './Icon.module.css'

type PersonIconProps = {
  className?: string
}

export const PersonIcon = ({ className }: PersonIconProps) => (
  <svg
    className={[styles.icon, className].filter(Boolean).join(' ')}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)
