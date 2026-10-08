import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Kt as Button, Q as AvatarFallback, Z as Avatar, et as AvatarImage, i as HoverCardTrigger, n as HoverCard, r as HoverCardContent } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hover-card-AVOEfSju.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "HoverCard open / onOpenChange",
		type: "boolean / (open: boolean) => void",
		description: "Controlled open state — hover opens it, blur and Escape close it."
	},
	{
		name: "HoverCard openDelay / closeDelay",
		type: "number",
		default: "700 / 300",
		description: "Milliseconds before the card opens or closes after pointer movement."
	},
	{
		name: "HoverCardTrigger asChild",
		type: "boolean",
		description: "Uses your own element as the trigger (Radix Slot)."
	},
	{
		name: "HoverCardContent side",
		type: "\"top\" | \"right\" | \"bottom\" | \"left\"",
		default: "\"bottom\"",
		description: "Preferred side of the trigger; flips when there is no room."
	},
	{
		name: "HoverCardContent align",
		type: "\"start\" | \"center\" | \"end\"",
		default: "\"center\"",
		description: "Alignment of the card against the trigger edge."
	},
	{
		name: "HoverCardContent sideOffset",
		type: "number",
		default: "6",
		description: "Gap in pixels between trigger and card."
	},
	{
		name: "HoverCardContent className",
		type: "string",
		description: "Merged last — override width, padding or content."
	}
];
function HoverCardPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Hover Card",
		intro: "Hover-revealed detail panel anchored to a trigger. Built for profiles and contextual previews where clicking would interrupt the flow — a Dialog is still the right tool for anything interactive.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HoverCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex items-center gap-3 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-4 text-sm font-medium shadow-soft outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
						src: "/avatar.png",
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "AK" })]
				}), "Ada K."]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
				size: "lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
					src: "/avatar.png",
					alt: ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "AK" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "@adak"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Design engineer working on tokens, motion and documentation systems."
				})]
			})]
		}) })] }),
		examples: [{
			title: "Profile preview",
			code: `<HoverCard>
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
</HoverCard>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HoverCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#profile",
					className: "rounded-sm text-sm font-medium text-brand outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring",
					children: "@adak"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Ada K."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Design engineer working on tokens and motion."
				})]
			}) })] })
		}, {
			title: "Placement and delay",
			code: `<HoverCard openDelay={150} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent side="top" align="start" sideOffset={8}>
    <p className="text-sm">Shown above and left-aligned after 150ms.</p>
  </HoverCardContent>
</HoverCard>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HoverCard, {
				openDelay: 150,
				closeDelay: 100,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						children: "Hover me"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContent, {
					side: "top",
					align: "start",
					sideOffset: 8,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Shown above and left-aligned after 150ms."
					})
				})]
			})
		}],
		a11y: [
			"The card opens on hover and on keyboard focus of the trigger, so it is reachable without a pointer.",
			"Escape closes the card and focus stays on the trigger.",
			"Use a real link or button as the trigger — the card supplements it, it never replaces the trigger's own name or role.",
			"Hover cards are not for content users must act on: keep anything essential visible without hovering, and use a Dialog for interactive content.",
			"The content is rendered in a portal with a heading-free layout — give it a readable structure (name, then description).",
			"Pointer users get a delay before it opens, avoiding flicker while the cursor crosses the page."
		],
		props
	});
}
//#endregion
export { HoverCardPage as component };
