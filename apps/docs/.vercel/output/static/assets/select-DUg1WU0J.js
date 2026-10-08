import{Qt as e,Xt as t,ct as n,dt as r,en as i,ft as a,lt as o,mt as s,pt as c,st as l,ut as u}from"./index-eoeucM7E.js";import{t as d}from"./doc-page-DelbIsTU.js";var f=i(e()),p=t(),m=[{name:`value / defaultValue`,type:`string`,description:`Controlled or uncontrolled selection.`},{name:`onValueChange`,type:`(value: string) => void`,description:`Fires when the user picks an item.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Blocks opening the list and dims the trigger.`},{name:`SelectTrigger size`,type:`"sm" | "md" | "lg"`,default:`"md"`,description:`Height and type scale of the button.`},{name:`SelectTrigger invalid`,type:`boolean`,default:`false`,description:`Switches to the destructive ring for validation errors.`},{name:`SelectValue placeholder`,type:`ReactNode`,description:`Shown while no item is selected.`},{name:`SelectItem value`,type:`string`,required:!0,description:`Value reported by onValueChange; must be unique within the list.`}];function h(){let[e,t]=f.useState(`apple`);return(0,p.jsx)(d,{title:`Select`,intro:`Single-value listbox trigger with typeahead and the same menu-item semantics as Dropdown Menu.`,demo:(0,p.jsxs)(`div`,{className:`max-w-xs space-y-4`,children:[(0,p.jsxs)(l,{defaultValue:`apple`,children:[(0,p.jsx)(c,{"aria-label":`Fruit`,children:(0,p.jsx)(s,{placeholder:`Pick a fruit`})}),(0,p.jsxs)(n,{children:[(0,p.jsxs)(o,{children:[(0,p.jsx)(r,{children:`Fruit`}),(0,p.jsx)(u,{value:`apple`,children:`Apple`}),(0,p.jsx)(u,{value:`banana`,children:`Banana`}),(0,p.jsx)(u,{value:`cherry`,children:`Cherry`})]}),(0,p.jsx)(a,{}),(0,p.jsx)(u,{value:`other`,children:`Something else`})]})]}),(0,p.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Selected: `,(0,p.jsx)(`span`,{className:`font-mono`,children:e})]})]}),examples:[{title:`Controlled select`,code:`const [fruit, setFruit] = useState("apple")

<Select value={fruit} onValueChange={setFruit}>
  <SelectTrigger aria-label="Fruit">
    <SelectValue placeholder="Pick a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`,render:(0,p.jsx)(`div`,{className:`max-w-xs`,children:(0,p.jsxs)(l,{value:e,onValueChange:t,children:[(0,p.jsx)(c,{"aria-label":`Fruit`,children:(0,p.jsx)(s,{placeholder:`Pick a fruit`})}),(0,p.jsxs)(n,{children:[(0,p.jsx)(u,{value:`apple`,children:`Apple`}),(0,p.jsx)(u,{value:`banana`,children:`Banana`}),(0,p.jsx)(u,{value:`cherry`,children:`Cherry`})]})]})})},{title:`Grouped and invalid`,code:`<Select defaultValue="">
  <SelectTrigger invalid aria-label="Plan">
    <SelectValue placeholder="Choose a plan" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Plans</SelectLabel>
      <SelectItem value="free">Free</SelectItem>
      <SelectItem value="team">Team</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,render:(0,p.jsx)(`div`,{className:`max-w-xs`,children:(0,p.jsxs)(l,{defaultValue:``,children:[(0,p.jsx)(c,{invalid:!0,"aria-label":`Plan`,children:(0,p.jsx)(s,{placeholder:`Choose a plan`})}),(0,p.jsx)(n,{children:(0,p.jsxs)(o,{children:[(0,p.jsx)(r,{children:`Plans`}),(0,p.jsx)(u,{value:`free`,children:`Free`}),(0,p.jsx)(u,{value:`team`,children:`Team`})]})})]})})}],a11y:[`The trigger renders role="combobox" with aria-expanded and aria-controls pointing at the listbox.`,`Type a letter to jump to the next matching item; Home/End jump to the list ends.`,`Escape closes the list and returns focus to the trigger; arrow keys open it when closed.`,`SelectValue is required: without it the trigger has no accessible name — also pass aria-label when no visible label exists.`,`SelectLabel must sit inside a SelectGroup; it becomes the group's accessible name.`,`Use invalid together with an inline error message referenced by aria-describedby.`],props:m})}export{h as component};