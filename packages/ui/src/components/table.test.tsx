import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

function renderTable() {
  return render(
    <Table>
      <TableCaption>Fruit stock</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Fruit</TableHead>
          <TableHead className="text-right">Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Apple</TableCell>
          <TableCell className="text-right">12</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">12</TableCell>
        </TableRow>
      </TableFooter>
    </Table>,
  )
}

describe('Table', () => {
  it('renders native table semantics', () => {
    renderTable()
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Fruit' })).toHaveAttribute('scope', 'col')
    expect(screen.getByRole('cell', { name: 'Apple' })).toBeInTheDocument()
    expect(screen.getByText('Fruit stock')).toBeInTheDocument()
  })

  it('exposes data-slot attributes for styling', () => {
    const { container } = renderTable()
    expect(container.querySelector('[data-slot="table"]')).not.toBeNull()
    expect(container.querySelector('[data-slot="table-header"]')).not.toBeNull()
    expect(container.querySelector('[data-slot="table-row"]')).not.toBeNull()
    expect(container.querySelector('[data-slot="table-cell"]')).not.toBeNull()
  })

  it('wraps the table in a scroll container', () => {
    const { container } = renderTable()
    expect(container.querySelector('[data-slot="table-container"]')).not.toBeNull()
  })
})
