import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Lt as Badge$1 } from "./router-Di5NSBLV.mjs";
import { n as componentDocs, t as comingSoon } from "./components-B4EBqIsg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/components-Wjo3rldQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ComponentsPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return componentDocs;
		return componentDocs.filter((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-4xl space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-brand",
						children: "Library"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold tracking-tight sm:text-4xl",
						children: "Components"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-base text-muted-foreground sm:text-lg",
						children: "Each page ships a live preview, usage examples, a props table and accessibility notes."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "component-search",
						className: "sr-only",
						children: "Search components"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						"aria-hidden": "true",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "11",
							cy: "11",
							r: "8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m21 21-4.3-4.3" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "component-search",
						type: "search",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search components…",
						className: "h-10 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "status",
				className: "sr-only",
				children: [
					filtered.length,
					" of ",
					componentDocs.length,
					" components shown"
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-2xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground",
				children: [
					"No components match “",
					query,
					"”. Try “button”, “form” or “layout”."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 sm:grid-cols-2",
				children: filtered.map((component, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: component.href,
					className: "group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft outline-none transition-[transform,box-shadow] duration-[140ms] hover:-translate-y-0.5 hover:shadow-raised focus-visible:ring-2 focus-visible:ring-ring",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-sm font-bold text-brand-soft-foreground transition-transform duration-[140ms] group-hover:-translate-y-0.5",
						children: String(index + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 font-semibold",
							children: [component.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								"aria-hidden": "true",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								className: "size-3.5 -translate-x-1 opacity-0 transition-[transform,opacity] duration-[140ms] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted-foreground",
							children: component.description
						})]
					})]
				}) }, component.name))
			}),
			comingSoon.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
				"aria-labelledby": "coming-soon",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "coming-soon",
						className: "text-lg font-semibold tracking-tight",
						children: "Coming soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Core controls land with the next batch — documented pages follow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: comingSoon.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
							variant: "secondary",
							children: name
						}, name))
					})
				]
			}) : null
		]
	});
}
//#endregion
export { ComponentsPage as component };
