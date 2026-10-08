import{F as e,Gt as t,N as n,P as r,Xt as i}from"./index-eoeucM7E.js";import{t as a}from"./doc-page-DelbIsTU.js";var o=i(),s=[{name:`open / defaultOpen`,type:`boolean`,default:`false`,description:`Controlled or uncontrolled expanded state.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Fires when the trigger toggles the region.`},{name:`disabled`,type:`boolean`,default:`false`,description:`Blocks the trigger.`},{name:`CollapsibleTrigger`,type:`ReactNode`,description:`The control that toggles the region; gets aria-expanded automatically.`},{name:`CollapsibleContent`,type:`ReactNode`,description:`The region itself; unmounted while collapsed.`}];function c(){return(0,o.jsx)(a,{title:`Collapsible`,intro:`Single disclosure region. The content is removed from the DOM while collapsed, so hidden details are never tabbable.`,demo:(0,o.jsxs)(n,{className:`max-w-sm space-y-3`,children:[(0,o.jsx)(e,{asChild:!0,children:(0,o.jsx)(t,{variant:`outline`,children:`Shipping details`})}),(0,o.jsx)(r,{className:`rounded-lg border border-border bg-muted/50 p-4 text-sm text-muted-foreground`,children:`Ships in 2–3 business days. Free returns within 30 days to the original payment method.`})]}),examples:[{title:`Disclosure with a chevron`,code:`<Collapsible>
  <CollapsibleTrigger asChild>
    <button className="flex items-center gap-2 text-sm font-medium">
      Advanced settings
      <ChevronDown aria-hidden />
    </button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <AdvancedSettingsForm />
  </CollapsibleContent>
</Collapsible>`,render:(0,o.jsxs)(n,{className:`max-w-sm`,children:[(0,o.jsx)(e,{asChild:!0,children:(0,o.jsx)(t,{variant:`ghost`,children:`Advanced settings`})}),(0,o.jsx)(r,{className:`text-sm text-muted-foreground`,children:`Timeout, retries and webhook configuration live here.`})]})},{title:`Controlled`,code:`const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger>{open ? "Hide" : "Show"} rows</CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>`,render:(0,o.jsxs)(n,{defaultOpen:!0,children:[(0,o.jsx)(e,{asChild:!0,children:(0,o.jsx)(t,{variant:`outline`,children:`Rows visible`})}),(0,o.jsx)(r,{className:`text-sm text-muted-foreground`,children:`Open by default via defaultOpen.`})]})}],a11y:[`The trigger renders aria-expanded and controls the region via aria-controls.`,`Collapsed content is unmounted, so focus order never contains invisible items.`,`The region animates opacity only (vert-fade-in/out) and is neutralised by the reduced-motion override.`,`A button-like trigger is required — do not use a bare div; CollapsibleTrigger accepts asChild for that reason.`],props:s})}export{c as component};