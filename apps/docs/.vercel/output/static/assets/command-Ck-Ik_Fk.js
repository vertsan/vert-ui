import{Gt as e,Qt as t,Xt as n,_ as r,d as i,en as a,f as o,g as s,h as c,m as l,p as u,u as d,v as f}from"./index-eoeucM7E.js";import{t as p}from"./doc-page-DelbIsTU.js";var m=a(t()),h=n(),g=[{name:`Command value / onValueChange`,type:`string / (value: string) => void`,description:`Controlled filter value of the palette.`},{name:`Command loop`,type:`boolean`,default:`false`,description:`Wraps arrow-key navigation from the last item to the first.`},{name:`CommandInput placeholder`,type:`string`,description:`Hint shown while the query is empty.`},{name:`CommandItem onSelect / value / disabled`,type:`(value: string) => void / string / boolean`,description:`Each row is selectable with the keyboard; value feeds the filter and onSelect fires on activation.`},{name:`CommandGroup heading`,type:`string`,description:`Label rendered above a group of items.`},{name:`CommandDialog open / onOpenChange`,type:`boolean / (open: boolean) => void`,description:`Controlled dialog state — open it from a ⌘K key handler.`},{name:`CommandDialog title`,type:`string`,default:`"Command menu"`,description:`Visually hidden accessible name of the dialog.`}];function _(){let[t,n]=(0,m.useState)(!1);return(0,h.jsx)(p,{title:`Command`,intro:`Filterable command palette with grouped results, keyboard navigation and an empty state. CommandDialog wraps it in a modal shell so you can bind it to ⌘K.`,demo:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(e,{onClick:()=>n(!0),children:[`Open palette`,(0,h.jsx)(`kbd`,{className:`ml-2 rounded border border-current/30 px-1.5 py-0.5 font-mono text-[10px]`,children:`⌘K`})]}),(0,h.jsxs)(i,{open:t,onOpenChange:n,children:[(0,h.jsx)(l,{placeholder:`Type a command or search…`}),(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:`No results found.`}),(0,h.jsxs)(u,{heading:`Actions`,children:[(0,h.jsxs)(c,{onSelect:()=>n(!1),children:[`Create new file`,(0,h.jsx)(f,{children:`⌘N`})]}),(0,h.jsxs)(c,{onSelect:()=>n(!1),children:[`Invite teammate`,(0,h.jsx)(f,{children:`⌘I`})]})]}),(0,h.jsx)(r,{}),(0,h.jsxs)(u,{heading:`Navigate`,children:[(0,h.jsx)(c,{onSelect:()=>n(!1),children:`Dashboard`}),(0,h.jsx)(c,{onSelect:()=>n(!1),children:`Projects`})]})]})]})]}),examples:[{title:`Inline palette`,code:`<Command>
  <CommandInput placeholder="Search projects…" />
  <CommandList>
    <CommandEmpty>No projects found.</CommandEmpty>
    <CommandGroup heading="Recent">
      {projects.map((project) => (
        <CommandItem key={project.id} value={project.name} onSelect={openProject}>
          {project.name}
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>`,render:(0,h.jsxs)(d,{className:`max-w-md`,children:[(0,h.jsx)(l,{placeholder:`Search projects…`}),(0,h.jsxs)(s,{children:[(0,h.jsx)(o,{children:`No projects found.`}),(0,h.jsxs)(u,{heading:`Recent`,children:[(0,h.jsx)(c,{children:`Website redesign`}),(0,h.jsx)(c,{children:`Mobile app`}),(0,h.jsx)(c,{children:`Design system`})]}),(0,h.jsx)(r,{}),(0,h.jsx)(u,{heading:`Shortcut`,children:(0,h.jsxs)(c,{children:[`Toggle theme`,(0,h.jsx)(f,{children:`⌘T`})]})})]})]})},{title:`Wire up ⌘K`,code:`const [open, setOpen] = useState(false)

useEffect(() => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", onKeyDown)
  return () => document.removeEventListener("keydown", onKeyDown)
}, [])

return (
  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command…" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Actions">
        <CommandItem onSelect={runAction}>Save file</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
)`,render:(0,h.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Bind a document-level key handler and let`,` `,(0,h.jsx)(`code`,{className:`font-mono text-xs`,children:`CommandDialog`}),` own the open state. The dialog already moves focus into the input and restores it on close.`]})}],a11y:[`The palette renders inside a modal dialog: focus is trapped while open, Escape closes it and focus returns to the opener.`,`CommandDialog supplies a visually hidden DialogTitle, so the dialog always has an accessible name.`,`The selected item is exposed by cmdk through aria-selected; the list uses aria-activedescendant so arrow keys never move DOM focus out of the input.`,`The input is a real <input> — screen readers announce it as an edit field and IME input works.`,`Groups have visible headings; keep them short so the structure is clear when navigated by heading.`,`Provide a CommandEmpty state so zero results are announced instead of an empty list appearing.`],props:g})}export{_ as component};