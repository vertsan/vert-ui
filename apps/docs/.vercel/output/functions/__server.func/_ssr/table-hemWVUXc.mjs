import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { G as TableCell, H as Table, J as TableHeader, K as TableFooter, Lt as Badge$1, U as TableBody, W as TableCaption, Y as TableRow, q as TableHead } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/table-hemWVUXc.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "Table",
		type: "HTMLAttributes<HTMLTableElement>",
		description: "Wraps the table in a horizontal scroll container (320px safe)."
	},
	{
		name: "TableHeader / TableBody / TableFooter",
		type: "HTMLAttributes<HTMLTableSectionElement>",
		description: "Semantic sections; the footer row is not affected by the hover style."
	},
	{
		name: "TableRow",
		type: "HTMLAttributes<HTMLTableRowElement>",
		description: "Row with bottom border, hover wash and data-[state=selected] styling."
	},
	{
		name: "TableHead",
		type: "ThHTMLAttributes<HTMLTableCellElement>",
		description: "Column header; scope=\"col\" is set for you and can be overridden."
	},
	{
		name: "TableCell",
		type: "TdHTMLAttributes<HTMLTableCellElement>",
		description: "Body cell. Add className=\"text-right\" for numbers."
	},
	{
		name: "TableCaption",
		type: "HTMLAttributes<HTMLTableCaptionElement>",
		description: "Table description rendered below the rows."
	}
];
function TablePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Table",
		intro: "Semantic data table with header styles, hover rows and a scroll wrapper so wide tables stay usable at 320px.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCaption, { children: "Fruit stock this week" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Fruit" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Origin" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "In stock"
				})
			] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "Apple" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "Valencia" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: "128"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					"data-state": "selected",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "Pear" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "Lisbon" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right",
							children: "54"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "Cherry" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "Kalamata" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: "17"
					})
				] })
			] })
		] }),
		examples: [{
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
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Item" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Amount"
				})] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "Hosting" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-right",
					children: "$20.00"
				})] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-right",
					children: "$20.00"
				})] }) })
			] })
		}, {
			title: "Badges as cell content",
			code: `<TableCell>
  <Badge variant="secondary">Active</Badge>
</TableCell>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: "workspace-42" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
				variant: "secondary",
				children: "Active"
			}) })] }) }) })
		}],
		a11y: [
			"Renders a real <table> with <th scope=\"col\"> — screen readers announce column headers with each cell.",
			"Every visual row is a real <tr>; no div-based grids, so row/header relationships survive.",
			"Add a TableCaption: it becomes the table's accessible description.",
			"The wrapper scrolls horizontally instead of shrinking text — zooming to 200% still works.",
			"Mark the selected row with data-state=\"selected\" plus an aria-label if selection is not otherwise explained."
		],
		props
	});
}
//#endregion
export { TablePage as component };
