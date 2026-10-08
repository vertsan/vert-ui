import "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function GuidePage({ title, intro, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl space-y-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/guide",
					className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						"aria-hidden": "true",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						className: "size-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 19-7-7 7-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 12H5" })]
					}), "All guides"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold tracking-tight sm:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base text-muted-foreground sm:text-lg",
					children: intro
				})
			]
		}), children]
	});
}
function Section({ label, title, id, children, tinted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": id,
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-brand",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id,
				className: "text-xl font-bold tracking-tight",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: tinted ? "rounded-2xl border border-info/30 bg-info-soft p-6 text-info-soft-foreground shadow-soft" : "rounded-2xl border border-border bg-card p-6 shadow-soft",
			children
		})]
	});
}
function Code({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "overflow-x-auto rounded-xl bg-vert-950 p-4 text-xs leading-relaxed text-vert-100 shadow-inner",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children })
	});
}
function Callout({ tone = "info", title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border p-4 text-sm ${tone === "warning" ? "border-warning/40 bg-warning-soft text-warning-soft-foreground" : "border-info/30 bg-info-soft text-info-soft-foreground"}`,
		role: "note",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 space-y-2 opacity-95",
			children
		})]
	});
}
function Steps({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-8",
		children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative space-y-3 pl-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute left-0 top-0 flex size-8 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand-soft-foreground",
					children: index + 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-semibold",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: item.children
				})
			]
		}, item.title))
	});
}
//#endregion
export { Steps as a, Section as i, Code as n, GuidePage as r, Callout as t };
