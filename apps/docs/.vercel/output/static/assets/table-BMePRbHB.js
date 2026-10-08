import{G as e,H as t,It as n,J as r,K as i,U as a,V as o,W as s,Xt as c,q as l}from"./index-eoeucM7E.js";import{t as u}from"./doc-page-DelbIsTU.js";var d=c(),f=[{name:`Table`,type:`HTMLAttributes<HTMLTableElement>`,description:`Wraps the table in a horizontal scroll container (320px safe).`},{name:`TableHeader / TableBody / TableFooter`,type:`HTMLAttributes<HTMLTableSectionElement>`,description:`Semantic sections; the footer row is not affected by the hover style.`},{name:`TableRow`,type:`HTMLAttributes<HTMLTableRowElement>`,description:`Row with bottom border, hover wash and data-[state=selected] styling.`},{name:`TableHead`,type:`ThHTMLAttributes<HTMLTableCellElement>`,description:`Column header; scope="col" is set for you and can be overridden.`},{name:`TableCell`,type:`TdHTMLAttributes<HTMLTableCellElement>`,description:`Body cell. Add className="text-right" for numbers.`},{name:`TableCaption`,type:`HTMLAttributes<HTMLTableCaptionElement>`,description:`Table description rendered below the rows.`}];function p(){return(0,d.jsx)(u,{title:`Table`,intro:`Semantic data table with header styles, hover rows and a scroll wrapper so wide tables stay usable at 320px.`,demo:(0,d.jsxs)(o,{children:[(0,d.jsx)(a,{children:`Fruit stock this week`}),(0,d.jsx)(l,{children:(0,d.jsxs)(r,{children:[(0,d.jsx)(i,{children:`Fruit`}),(0,d.jsx)(i,{children:`Origin`}),(0,d.jsx)(i,{className:`text-right`,children:`In stock`})]})}),(0,d.jsxs)(t,{children:[(0,d.jsxs)(r,{children:[(0,d.jsx)(s,{children:`Apple`}),(0,d.jsx)(s,{children:`Valencia`}),(0,d.jsx)(s,{className:`text-right`,children:`128`})]}),(0,d.jsxs)(r,{"data-state":`selected`,children:[(0,d.jsx)(s,{children:`Pear`}),(0,d.jsx)(s,{children:`Lisbon`}),(0,d.jsx)(s,{className:`text-right`,children:`54`})]}),(0,d.jsxs)(r,{children:[(0,d.jsx)(s,{children:`Cherry`}),(0,d.jsx)(s,{children:`Kalamata`}),(0,d.jsx)(s,{className:`text-right`,children:`17`})]})]})]}),examples:[{title:`With a footer total`,code:`<Table>
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
</Table>`,render:(0,d.jsxs)(o,{children:[(0,d.jsx)(l,{children:(0,d.jsxs)(r,{children:[(0,d.jsx)(i,{children:`Item`}),(0,d.jsx)(i,{className:`text-right`,children:`Amount`})]})}),(0,d.jsx)(t,{children:(0,d.jsxs)(r,{children:[(0,d.jsx)(s,{children:`Hosting`}),(0,d.jsx)(s,{className:`text-right`,children:`$20.00`})]})}),(0,d.jsx)(e,{children:(0,d.jsxs)(r,{children:[(0,d.jsx)(s,{children:`Total`}),(0,d.jsx)(s,{className:`text-right`,children:`$20.00`})]})})]})},{title:`Badges as cell content`,code:`<TableCell>
  <Badge variant="secondary">Active</Badge>
</TableCell>`,render:(0,d.jsx)(o,{children:(0,d.jsx)(t,{children:(0,d.jsxs)(r,{children:[(0,d.jsx)(s,{children:`workspace-42`}),(0,d.jsx)(s,{children:(0,d.jsx)(n,{variant:`secondary`,children:`Active`})})]})})})}],a11y:[`Renders a real <table> with <th scope="col"> — screen readers announce column headers with each cell.`,`Every visual row is a real <tr>; no div-based grids, so row/header relationships survive.`,`Add a TableCaption: it becomes the table's accessible description.`,`The wrapper scrolls horizontally instead of shrinking text — zooming to 200% still works.`,`Mark the selected row with data-state="selected" plus an aria-label if selection is not otherwise explained.`],props:f})}export{p as component};