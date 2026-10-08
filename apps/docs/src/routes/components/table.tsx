import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/table")({
  component: TablePage,
})

const props: PropRow[] = [
  {
    name: "Table",
    type: "HTMLAttributes<HTMLTableElement>",
    description: "Wraps the table in a horizontal scroll container (320px safe).",
  },
  {
    name: "TableHeader / TableBody / TableFooter",
    type: "HTMLAttributes<HTMLTableSectionElement>",
    description: "Semantic sections; the footer row is not affected by the hover style.",
  },
  {
    name: "TableRow",
    type: "HTMLAttributes<HTMLTableRowElement>",
    description: "Row with bottom border, hover wash and data-[state=selected] styling.",
  },
  {
    name: "TableHead",
    type: "ThHTMLAttributes<HTMLTableCellElement>",
    description: "Column header; scope=\"col\" is set for you and can be overridden.",
  },
  {
    name: "TableCell",
    type: "TdHTMLAttributes<HTMLTableCellElement>",
    description: "Body cell. Add className=\"text-right\" for numbers.",
  },
  {
    name: "TableCaption",
    type: "HTMLAttributes<HTMLTableCaptionElement>",
    description: "Table description rendered below the rows.",
  },
]

function TablePage() {
  return (
    <DocPage
      title="Table"
      intro="Semantic data table with header styles, hover rows and a scroll wrapper so wide tables stay usable at 320px."
      demo={
        <Table>
          <TableCaption>Fruit stock this week</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Fruit</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead className="text-right">In stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Apple</TableCell>
              <TableCell>Valencia</TableCell>
              <TableCell className="text-right">128</TableCell>
            </TableRow>
            <TableRow data-state="selected">
              <TableCell>Pear</TableCell>
              <TableCell>Lisbon</TableCell>
              <TableCell className="text-right">54</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cherry</TableCell>
              <TableCell>Kalamata</TableCell>
              <TableCell className="text-right">17</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      }
      examples={[
        {
          title: "With a footer total",
          code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Item</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Hosting</TableCell>
      <TableCell className="text-right">$20.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell className="text-right">$20.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`,
          render: (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Hosting</TableCell>
                  <TableCell className="text-right">$20.00</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">$20.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          ),
        },
        {
          title: "Badges as cell content",
          code: `<TableCell>
  <Badge variant="secondary">Active</Badge>
</TableCell>`,
          render: (
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>workspace-42</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Active</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ),
        },
      ]}
      a11y={[
        "Renders a real <table> with <th scope=\"col\"> — screen readers announce column headers with each cell.",
        "Every visual row is a real <tr>; no div-based grids, so row/header relationships survive.",
        "Add a TableCaption: it becomes the table's accessible description.",
        "The wrapper scrolls horizontally instead of shrinking text — zooming to 200% still works.",
        "Mark the selected row with data-state=\"selected\" plus an aria-label if selection is not otherwise explained.",
      ]}
      props={props}
    />
  )
}
