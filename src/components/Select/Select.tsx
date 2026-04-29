import { useCallback, useEffect, useId, useRef, useState } from 'react'
import styles from './Select.module.css'

export type SelectOption<T extends string = string> = {
  value: T
  label: string
}

type SelectProps<T extends string> = {
  id: string
  label: string
  value: T
  options: SelectOption<T>[]
  onChange: (value: T) => void
}

export const Select = <T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: SelectProps<T>) => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listboxId = useId()
  const selectedLabel = options.find((option) => option.value === value)?.label ?? value

  const close = useCallback((restoreFocus = false) => {
    setOpen(false)
    if (restoreFocus) {
      triggerRef.current?.focus()
    }
  }, [])

  const selectIndex = useCallback(
    (index: number) => {
      const option = options[index]
      if (option) {
        onChange(option.value)
      }
      close(true)
    },
    [close, onChange, options]
  )

  const toggleMenu = useCallback(() => {
    if (open) {
      close()
      return
    }
    if (options.length === 0) {
      return
    }
    setOpen(true)
  }, [close, open, options.length])

  useEffect(() => {
    if (!open) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      const node = rootRef.current
      if (node && !node.contains(event.target as Node)) {
        close(true)
      }
    }

    const handleDocumentKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        close(true)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleDocumentKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleDocumentKeyDown)
    }
  }, [close, open])

  return (
    <div ref={rootRef} className={styles.select}>
      <span className={styles.select__label} id={`${id}-label`}>
        {label}
      </span>
      <button
        ref={triggerRef}
        id={id}
        type="button"
        className={styles.select__trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-labelledby={`${id}-label ${id}-value`}
        onClick={toggleMenu}
        disabled={options.length === 0}
      >
        <span id={`${id}-value`} className={styles.select__value}>
          {selectedLabel}
        </span>
        <span className={styles.select__chevron} aria-hidden="true" />
      </button>
      {open && (
        <ul
          id={listboxId}
          className={styles.select__list}
          role="listbox"
          aria-labelledby={`${id}-label`}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={styles.select__option}
              onClick={() => selectIndex(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
