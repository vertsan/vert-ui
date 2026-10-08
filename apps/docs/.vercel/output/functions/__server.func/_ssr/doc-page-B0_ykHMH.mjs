import "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
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
function DocPage({ title, intro, demo, props, examples, a11y }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/components",
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
						}), "All components"]
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Preview",
				title: "Live preview",
				id: `${title}-demo`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grain rounded-xl border border-border/60 bg-muted/40 p-6 sm:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-24 items-center justify-center",
						children: demo
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Usage",
				title: "Examples",
				id: `${title}-examples`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: examples.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold",
								children: example.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grain rounded-xl border border-border/60 bg-background/70 p-6",
								children: example.render
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: example.code })
						]
					}, example.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Reference",
				title: "Props",
				id: `${title}-props`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full border-collapse text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border bg-muted/70 text-xs uppercase tracking-wider text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "px-4 py-3 font-semibold",
									children: "Prop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "px-4 py-3 font-semibold",
									children: "Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "px-4 py-3 font-semibold",
									children: "Default"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "px-4 py-3 font-semibold",
									children: "Description"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: props.map((prop, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: ["border-border/60 align-top", index % 2 === 1 ? "bg-muted/30" : ""].join(" "),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
									scope: "row",
									className: "px-4 py-3 font-mono text-xs font-medium whitespace-nowrap",
									children: [prop.name, prop.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 font-sans text-destructive",
										children: "(required)"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono text-xs text-muted-foreground",
									children: prop.type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 font-mono text-xs text-muted-foreground",
									children: prop.default ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3 text-muted-foreground",
									children: prop.description
								})
							]
						}, prop.name)) })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Accessibility",
				title: "Accessibility notes",
				id: `${title}-a11y`,
				tinted: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "list-disc space-y-2.5 pl-5 text-sm",
					children: a11y.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, note))
				})
			})
		]
	});
}
//#endregion
export { DocPage as t };
