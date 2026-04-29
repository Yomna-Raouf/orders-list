import type { ReactNode } from 'react'
import styles from './DataTable.module.css'

export type DataTableColumn<T> = {
  id: string
  header: string
  cell: (row: T) => ReactNode
}

type DataTableProps<T> = {
  ariaLabel: string
  columns: DataTableColumn<T>[]
  rows: T[]
  getRowKey: (row: T) => string | number
}

export const DataTable = <T,>({
  ariaLabel,
  columns,
  rows,
  getRowKey,
}: DataTableProps<T>) => (
  <div className={styles['data-table__wrap']}>
    <table className={styles['data-table']} aria-label={ariaLabel}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id} className={styles['data-table__head']} scope="col">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={getRowKey(row)}>
            {columns.map((column) => (
              <td key={column.id} className={styles['data-table__cell']}>
                {column.cell(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
