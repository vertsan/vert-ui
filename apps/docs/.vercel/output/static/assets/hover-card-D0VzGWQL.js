import{$ as e,Gt as t,X as n,Xt as r,Z as i,n as a,r as o,t as s}from"./index-eoeucM7E.js";import{t as c}from"./doc-page-DelbIsTU.js";var l=r(),u=[{name:`HoverCard open / onOpenChange`,type:`boolean / (open: boolean) => void`,description:`Controlled open state — hover opens it, blur and Escape close it.`},{name:`HoverCard openDelay / closeDelay`,type:`number`,default:`700 / 300`,description:`Milliseconds before the card opens or closes after pointer movement.`},{name:`HoverCardTrigger asChild`,type:`boolean`,description:`Uses your own element as the trigger (Radix Slot).`},{name:`HoverCardContent side`,type:`"top" | "right" | "bottom" | "left"`,default:`"bottom"`,description:`Preferred side of the trigger; flips when there is no room.`},{name:`HoverCardContent align`,type:`"start" | "center" | "end"`,default:`"center"`,description:`Alignment of the card against the trigger edge.`},{name:`HoverCardContent sideOffset`,type:`number`,default:`6`,description:`Gap in pixels between trigger and card.`},{name:`HoverCardContent className`,type:`string`,description:`Merged last — override width, padding or content.`}];function d(){return(0,l.jsx)(c,{title:`Hover Card`,intro:`Hover-revealed detail panel anchored to a trigger. Built for profiles and contextual previews where clicking would interrupt the flow — a Dialog is still the right tool for anything interactive.`,demo:(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{asChild:!0,children:(0,l.jsxs)(`button`,{type:`button`,className:`flex items-center gap-3 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-4 text-sm font-medium shadow-soft outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring`,children:[(0,l.jsxs)(n,{size:`sm`,children:[(0,l.jsx)(e,{src:`/avatar.png`,alt:``}),(0,l.jsx)(i,{children:`AK`})]}),`Ada K.`]})}),(0,l.jsx)(a,{children:(0,l.jsxs)(`div`,{className:`flex gap-4`,children:[(0,l.jsxs)(n,{size:`lg`,children:[(0,l.jsx)(e,{src:`/avatar.png`,alt:``}),(0,l.jsx)(i,{children:`AK`})]}),(0,l.jsxs)(`div`,{className:`space-y-1`,children:[(0,l.jsx)(`p`,{className:`text-sm font-semibold`,children:`@adak`}),(0,l.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Design engineer working on tokens, motion and documentation systems.`})]})]})})]}),examples:[{title:`Profile preview`,code:`<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/u/adak" className="font-medium hover:underline">
      {user.name}
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-4">
      <Avatar size="lg">
        <AvatarImage src={user.avatarUrl} alt="" />
        <AvatarFallback>{initials(user.name)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">{user.handle}</p>
        <p className="text-sm text-muted-foreground">{user.bio}</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,render:(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{asChild:!0,children:(0,l.jsx)(`a`,{href:`#profile`,className:`rounded-sm text-sm font-medium text-brand outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring`,children:`@adak`})}),(0,l.jsx)(a,{children:(0,l.jsxs)(`div`,{className:`space-y-1`,children:[(0,l.jsx)(`p`,{className:`text-sm font-semibold`,children:`Ada K.`}),(0,l.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Design engineer working on tokens and motion.`})]})})]})},{title:`Placement and delay`,code:`<HoverCard openDelay={150} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent side="top" align="start" sideOffset={8}>
    <p className="text-sm">Shown above and left-aligned after 150ms.</p>
  </HoverCardContent>
</HoverCard>`,render:(0,l.jsxs)(s,{openDelay:150,closeDelay:100,children:[(0,l.jsx)(o,{asChild:!0,children:(0,l.jsx)(t,{variant:`outline`,children:`Hover me`})}),(0,l.jsx)(a,{side:`top`,align:`start`,sideOffset:8,children:(0,l.jsx)(`p`,{className:`text-sm`,children:`Shown above and left-aligned after 150ms.`})})]})}],a11y:[`The card opens on hover and on keyboard focus of the trigger, so it is reachable without a pointer.`,`Escape closes the card and focus stays on the trigger.`,`Use a real link or button as the trigger — the card supplements it, it never replaces the trigger's own name or role.`,`Hover cards are not for content users must act on: keep anything essential visible without hovering, and use a Dialog for interactive content.`,`The content is rendered in a portal with a heading-free layout — give it a readable structure (name, then description).`,`Pointer users get a delay before it opens, avoiding flicker while the cursor crosses the page.`],props:u})}export{d as component};