import{Gt as e,Xt as t,at as n,et as r,it as i,nt as a,ot as o,rt as s,tt as c}from"./index-eoeucM7E.js";import{t as l}from"./doc-page-DelbIsTU.js";var u=t(),d=[{name:`Dialog modal`,type:`boolean`,default:`true`,description:`Blocks outside interaction, locks scroll and sets aria-modal="true" on the content.`},{name:`Dialog open / onOpenChange`,type:`boolean / (open: boolean) => void`,description:`Controlled open state.`},{name:`DialogContent hideClose`,type:`boolean`,default:`false`,description:`Removes the built-in close button when you render your own.`},{name:`DialogContent className`,type:`string`,description:`Merged last — override width, padding or alignment.`},{name:`DialogTitle (required)`,type:`ReactNode`,description:`Accessible name of the dialog. Always render one.`},{name:`DialogDescription`,type:`ReactNode`,description:`Accessible description; announced after the title.`},{name:`DialogTrigger asChild`,type:`boolean`,description:`Uses your own element as the opener (Radix Slot).`}];function f(){return(0,u.jsx)(l,{title:`Dialog`,intro:`Modal surface with focus trap, scroll lock and labelling. Escape closes it and focus returns to the opener.`,demo:(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{asChild:!0,children:(0,u.jsx)(e,{children:`Open dialog`})}),(0,u.jsxs)(c,{children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(n,{children:`Rename workspace`}),(0,u.jsx)(a,{children:`This changes the name shown to everyone in the workspace.`})]}),(0,u.jsxs)(`label`,{className:`space-y-2 text-sm`,children:[(0,u.jsx)(`span`,{children:`Workspace name`}),(0,u.jsx)(`input`,{className:`w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`,defaultValue:`Acme Inc`})]}),(0,u.jsxs)(s,{children:[(0,u.jsx)(e,{variant:`outline`,children:`Cancel`}),(0,u.jsx)(e,{children:`Save changes`})]})]})]}),examples:[{title:`Confirmation dialog`,code:`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete project</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete project?</DialogTitle>
      <DialogDescription>This cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,render:(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{asChild:!0,children:(0,u.jsx)(e,{variant:`destructive`,children:`Delete project`})}),(0,u.jsxs)(c,{children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(n,{children:`Delete project?`}),(0,u.jsx)(a,{children:`This cannot be undone.`})]}),(0,u.jsxs)(s,{children:[(0,u.jsx)(e,{variant:`outline`,children:`Cancel`}),(0,u.jsx)(e,{variant:`destructive`,children:`Delete`})]})]})]})},{title:`Non-modal, custom close`,code:`<Dialog modal={false}>
  <DialogTrigger asChild>
    <Button variant="outline">Details</Button>
  </DialogTrigger>
  <DialogContent hideClose>
    <DialogHeader>
      <DialogTitle>Details</DialogTitle>
      <DialogDescription>Inspect the record.</DialogDescription>
    </DialogHeader>
    <Button variant="ghost" onClick={close}>Close</Button>
  </DialogContent>
</Dialog>`,render:(0,u.jsxs)(r,{modal:!1,children:[(0,u.jsx)(o,{asChild:!0,children:(0,u.jsx)(e,{variant:`outline`,children:`Details`})}),(0,u.jsx)(c,{hideClose:!0,children:(0,u.jsxs)(i,{children:[(0,u.jsx)(n,{children:`Details`}),(0,u.jsx)(a,{children:`Inspect the record.`})]})})]})}],a11y:[`Content renders role="dialog" with aria-modal="true" (modal dialogs), aria-labelledby (title) and aria-describedby (description).`,`DialogTitle is required by design: a dialog without a name is unusable with a screen reader.`,`Focus moves into the dialog on open, is trapped while open, and returns to the trigger on close.`,`Escape closes the dialog; the built-in close button carries aria-label="Close".`,`Modal dialogs lock body scroll; non-modal ones (modal={false}) leave the page scrollable.`,`Keep the tab order shallow — the first focusable control should be the primary action.`],props:d})}export{f as component};