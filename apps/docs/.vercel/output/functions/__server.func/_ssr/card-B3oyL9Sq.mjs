import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Bt as CardDescription, Gt as Input, Ht as CardHeader, Kt as Button, Lt as Badge$1, Rt as Card, Ut as CardTitle, V as Label, Vt as CardFooter, zt as CardContent } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-B3oyL9Sq.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "variant",
		type: "\"default\" | \"interactive\" | \"raised\" | \"glow\"",
		default: "\"default\"",
		description: "Surface treatment: hoverable lift (interactive), stronger shadow (raised) or the brand luminous border (glow). Exposed as data-variant for styling."
	},
	{
		name: "Card",
		type: "HTMLAttributes<HTMLDivElement>",
		description: "Outer surface: rounded-2xl, border, bg-card and shadow-sm. className merges last."
	},
	{
		name: "CardHeader",
		type: "HTMLAttributes<HTMLDivElement>",
		description: "Vertical stack for the title and description with 24px padding."
	},
	{
		name: "CardTitle",
		type: "HTMLAttributes<HTMLHeadingElement>",
		description: "Renders an <h3> — heading level is fixed, so place it under the page's h1/h2."
	},
	{
		name: "CardDescription",
		type: "HTMLAttributes<HTMLParagraphElement>",
		description: "Muted supporting line under the title."
	},
	{
		name: "CardContent",
		type: "HTMLAttributes<HTMLDivElement>",
		description: "Body region — top padding removed so it sits flush under the header."
	},
	{
		name: "CardFooter",
		type: "HTMLAttributes<HTMLDivElement>",
		description: "Row for actions, aligned with the same horizontal padding."
	}
];
function CardPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Card",
		intro: "Surface container with header, content and footer sections — the default frame for grouped information and actions.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Storage plan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
						variant: "secondary",
						children: "Team"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "64% of 500 GB used across 3 workspaces." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 overflow-hidden rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 rounded-full bg-brand" })
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						children: "Upgrade"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						children: "Manage"
					})]
				})
			]
		}),
		examples: [
			{
				title: "Card with a form",
				code: `<Card className="max-w-sm">
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
</Card>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "w-full max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Invite teammate" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "They will receive an email invitation." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "invite-demo",
								children: "Work email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "invite-demo",
								type: "email",
								placeholder: "teammate@acme.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
							className: "gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								children: "Send invite"
							})
						})
					]
				})
			},
			{
				title: "Minimal card, custom sections",
				code: `<Card className="p-5">
  <p className="text-sm font-semibold">Weekly digest</p>
  <p className="mt-1 text-sm text-muted-foreground">
    Every Monday at 09:00, summarising open work.
  </p>
</Card>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "w-full max-w-xs p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Weekly digest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Every Monday at 09:00, summarising open work."
					})]
				})
			},
			{
				title: "Variant surfaces",
				code: `<Card variant="interactive">
  <CardHeader>
    <CardTitle>Hoverable</CardTitle>
    <CardDescription>Lifts on hover and on focus-within.</CardDescription>
  </CardHeader>
</Card>

<Card variant="glow">…</Card>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							variant: "interactive",
							tabIndex: 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-base",
								children: "Interactive"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Hover or focus me." })] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							variant: "raised",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-base",
								children: "Raised"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Elevated shadow." })] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							variant: "glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "text-base",
								children: "Glow"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Brand border." })] })
						})
					]
				})
			},
			{
				title: "Header + footer only",
				code: `<Card>
  <CardHeader>
    <CardTitle>Deploy #412</CardTitle>
    <CardDescription>Production · 4 minutes ago</CardDescription>
  </CardHeader>
  <CardFooter className="gap-2">
    <Badge dot variant="secondary">Passed</Badge>
    <Button size="sm" variant="outline">View logs</Button>
  </CardFooter>
</Card>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "w-full max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Deploy #412" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Production · 4 minutes ago" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
							dot: true,
							variant: "secondary",
							children: "Passed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							children: "View logs"
						})]
					})]
				})
			}
		],
		a11y: [
			"CardTitle renders a fixed <h3> — keep heading order intact (h1 page, h2 sections, then the card title).",
			"Cards are layout only: they add no landmarks or roles. Use <section aria-labelledby> when a card needs to be identified.",
			"variant=\"interactive\" only styles hover and focus-within — it adds no role and no keyboard behaviour. Pair it with an onClick or, better, a real link/button inside.",
			"Give an interactive card tabIndex={0} only if the card itself is the control; otherwise leave it out so focus order stays on the inner action.",
			"Avoid nesting interactive cards (a card that is also a link) — put one link or button inside instead of making the whole surface clickable.",
			"Rely on real form controls inside cards; the surface itself is never focusable."
		],
		props
	});
}
//#endregion
export { CardPage as component };
