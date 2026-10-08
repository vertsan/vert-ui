import{B as e,Bt as t,Gt as n,Ht as r,It as i,Lt as a,Rt as o,Vt as s,Wt as c,Xt as l,zt as u}from"./index-eoeucM7E.js";import{t as d}from"./doc-page-DelbIsTU.js";var f=l(),p=[{name:`variant`,type:`"default" | "interactive" | "raised" | "glow"`,default:`"default"`,description:`Surface treatment: hoverable lift (interactive), stronger shadow (raised) or the brand luminous border (glow). Exposed as data-variant for styling.`},{name:`Card`,type:`HTMLAttributes<HTMLDivElement>`,description:`Outer surface: rounded-2xl, border, bg-card and shadow-sm. className merges last.`},{name:`CardHeader`,type:`HTMLAttributes<HTMLDivElement>`,description:`Vertical stack for the title and description with 24px padding.`},{name:`CardTitle`,type:`HTMLAttributes<HTMLHeadingElement>`,description:`Renders an <h3> — heading level is fixed, so place it under the page's h1/h2.`},{name:`CardDescription`,type:`HTMLAttributes<HTMLParagraphElement>`,description:`Muted supporting line under the title.`},{name:`CardContent`,type:`HTMLAttributes<HTMLDivElement>`,description:`Body region — top padding removed so it sits flush under the header.`},{name:`CardFooter`,type:`HTMLAttributes<HTMLDivElement>`,description:`Row for actions, aligned with the same horizontal padding.`}];function m(){return(0,f.jsx)(d,{title:`Card`,intro:`Surface container with header, content and footer sections — the default frame for grouped information and actions.`,demo:(0,f.jsxs)(a,{className:`w-full max-w-sm`,children:[(0,f.jsxs)(s,{children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,f.jsx)(r,{children:`Storage plan`}),(0,f.jsx)(i,{variant:`secondary`,children:`Team`})]}),(0,f.jsx)(u,{children:`64% of 500 GB used across 3 workspaces.`})]}),(0,f.jsx)(o,{children:(0,f.jsx)(`div`,{className:`h-2 overflow-hidden rounded-full bg-muted`,children:(0,f.jsx)(`div`,{className:`h-full w-2/3 rounded-full bg-brand`})})}),(0,f.jsxs)(t,{className:`gap-2`,children:[(0,f.jsx)(n,{size:`sm`,children:`Upgrade`}),(0,f.jsx)(n,{size:`sm`,variant:`ghost`,children:`Manage`})]})]}),examples:[{title:`Card with a form`,code:`<Card className="max-w-sm">
  <CardHeader>
    <CardTitle>Invite teammate</CardTitle>
    <CardDescription>They will receive an email invitation.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-2">
    <Label htmlFor="invite">Work email</Label>
    <Input id="invite" type="email" placeholder="teammate@acme.com" />
  </CardContent>
  <CardFooter className="gap-2">
    <Button size="sm">Send invite</Button>
  </CardFooter>
</Card>`,render:(0,f.jsxs)(a,{className:`w-full max-w-sm`,children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(r,{children:`Invite teammate`}),(0,f.jsx)(u,{children:`They will receive an email invitation.`})]}),(0,f.jsxs)(o,{className:`space-y-2`,children:[(0,f.jsx)(e,{htmlFor:`invite-demo`,children:`Work email`}),(0,f.jsx)(c,{id:`invite-demo`,type:`email`,placeholder:`teammate@acme.com`})]}),(0,f.jsx)(t,{className:`gap-2`,children:(0,f.jsx)(n,{size:`sm`,children:`Send invite`})})]})},{title:`Minimal card, custom sections`,code:`<Card className="p-5">
  <p className="text-sm font-semibold">Weekly digest</p>
  <p className="mt-1 text-sm text-muted-foreground">
    Every Monday at 09:00, summarising open work.
  </p>
</Card>`,render:(0,f.jsxs)(a,{className:`w-full max-w-xs p-5`,children:[(0,f.jsx)(`p`,{className:`text-sm font-semibold`,children:`Weekly digest`}),(0,f.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:`Every Monday at 09:00, summarising open work.`})]})},{title:`Variant surfaces`,code:`<Card variant="interactive">
  <CardHeader>
    <CardTitle>Hoverable</CardTitle>
    <CardDescription>Lifts on hover and on focus-within.</CardDescription>
  </CardHeader>
</Card>

<Card variant="glow">…</Card>`,render:(0,f.jsxs)(`div`,{className:`grid w-full gap-4 sm:grid-cols-3`,children:[(0,f.jsx)(a,{variant:`interactive`,tabIndex:0,children:(0,f.jsxs)(s,{children:[(0,f.jsx)(r,{className:`text-base`,children:`Interactive`}),(0,f.jsx)(u,{children:`Hover or focus me.`})]})}),(0,f.jsx)(a,{variant:`raised`,children:(0,f.jsxs)(s,{children:[(0,f.jsx)(r,{className:`text-base`,children:`Raised`}),(0,f.jsx)(u,{children:`Elevated shadow.`})]})}),(0,f.jsx)(a,{variant:`glow`,children:(0,f.jsxs)(s,{children:[(0,f.jsx)(r,{className:`text-base`,children:`Glow`}),(0,f.jsx)(u,{children:`Brand border.`})]})})]})},{title:`Header + footer only`,code:`<Card>
  <CardHeader>
    <CardTitle>Deploy #412</CardTitle>
    <CardDescription>Production · 4 minutes ago</CardDescription>
  </CardHeader>
  <CardFooter className="gap-2">
    <Badge dot variant="secondary">Passed</Badge>
    <Button size="sm" variant="outline">View logs</Button>
  </CardFooter>
</Card>`,render:(0,f.jsxs)(a,{className:`w-full max-w-sm`,children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(r,{children:`Deploy #412`}),(0,f.jsx)(u,{children:`Production · 4 minutes ago`})]}),(0,f.jsxs)(t,{className:`gap-2`,children:[(0,f.jsx)(i,{dot:!0,variant:`secondary`,children:`Passed`}),(0,f.jsx)(n,{size:`sm`,variant:`outline`,children:`View logs`})]})]})}],a11y:[`CardTitle renders a fixed <h3> — keep heading order intact (h1 page, h2 sections, then the card title).`,`Cards are layout only: they add no landmarks or roles. Use <section aria-labelledby> when a card needs to be identified.`,`variant="interactive" only styles hover and focus-within — it adds no role and no keyboard behaviour. Pair it with an onClick or, better, a real link/button inside.`,`Give an interactive card tabIndex={0} only if the card itself is the control; otherwise leave it out so focus order stays on the inner action.`,`Avoid nesting interactive cards (a card that is also a link) — put one link or button inside instead of making the whole surface clickable.`,`Rely on real form controls inside cards; the surface itself is never focusable.`],props:p})}export{m as component};