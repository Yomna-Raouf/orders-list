import styles from './Icon.module.css'

type MoonIconProps = {
  className?: string
}

export const MoonIcon = ({ className }: MoonIconProps) => (
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
    <path d="M14.9 3.6A8.9 8.9 0 1 0 20.4 16a8.1 8.1 0 1 1-5.5-12.4Z" />
  </svg>
)
