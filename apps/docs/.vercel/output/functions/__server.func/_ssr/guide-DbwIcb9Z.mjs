import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as Code, r as GuidePage } from "./guide-page-CbTIiKv-.mjs";
import { t as guideDocs } from "./guide-BV0m8zrE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide-DbwIcb9Z.js
var import_jsx_runtime = require_jsx_runtime();
var delivery = `your repo
├── components/
│   └── vert-ui/
│       └── button.tsx        ← the component source, yours to edit
├── lib/
│   └── vert-ui/
│       └── cn.ts             ← cn() helper (clsx + tailwind-merge)
└── styles/
    └── vert.css              ← theme engine: tokens, tones, base styles`;
function GuideOverviewPage() {
	const cards = guideDocs.filter((item) => item.href !== "/guide");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GuidePage, {
		title: "Overview",
		intro: "vert-ui is an original React component library delivered as shadcn-compatible registry items — install what you need, edit the source, own it forever.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Guide",
				title: "Where to start",
				id: "guide-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: card.href,
						className: "group rounded-xl border border-border/70 bg-background/70 p-5 outline-none transition-[transform,box-shadow] duration-[140ms] hover:-translate-y-0.5 hover:shadow-raised focus-visible:ring-2 focus-visible:ring-ring",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold group-hover:text-brand",
							children: card.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: card.description
						})]
					}, card.href))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Delivery",
				title: "How delivery works",
				id: "guide-delivery",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Every component ships as a registry item: plain TypeScript and CSS embedded in a JSON file. The shadcn CLI copies that source into your repository and adds the npm dependencies the component needs — there is no ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "@vert-ui/ui"
							}),
							" ",
							"package in your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "node_modules"
							}),
							" and no runtime dependency on this library."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: delivery }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From that point the code is yours: rename it, restyle it, delete what you don't use. Updates are opt-in — re-run the CLI only where you want the upstream source back, and let git diff show you what changed." })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Requirements",
				title: "What you need",
				id: "guide-requirements",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc space-y-2.5 pl-5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "React 19"
						}), " — components use ref forwarding and modern hooks."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Tailwind CSS v4"
							}),
							" — CSS-first config, no ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "tailwind.config.js"
							}),
							" required."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "TypeScript"
							}),
							" — components are written in TS; the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "@/*"
							}),
							" path alias must point at your source directory."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "shadcn CLI"
							}),
							" — a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "components.json"
							}),
							" in the project root (create one with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "npx shadcn@latest init"
							}),
							" if you don't have one yet)."
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Next",
				title: "Framework notes",
				id: "guide-frameworks",
				tinted: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"vert-ui is framework-agnostic: anything that renders React 19 works — Next.js, Vite, TanStack Start, Remix. Components never import a router; where a component needs a link (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-xs",
							children: "asChild"
						}),
						" on Button, for example) you pass your own anchor or router link as the child."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Ready? Head to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guide/installation",
							className: "font-medium underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: "Installation"
						}),
						" ",
						"for the CLI walkthrough, or jump straight to the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/components",
							className: "font-medium underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: "component catalog"
						}),
						"."
					] })]
				})
			})
		]
	});
}
//#endregion
export { GuideOverviewPage as component };
