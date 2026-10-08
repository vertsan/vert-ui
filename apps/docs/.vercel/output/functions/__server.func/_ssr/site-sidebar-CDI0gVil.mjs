import { i as __toESM } from "../_runtime.mjs";
import { d as require_react, u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { o as useRouterState, p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as componentDocs } from "./components-B4EBqIsg.mjs";
import { t as guideDocs } from "./guide-BV0m8zrE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-sidebar-CDI0gVil.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function itemClasses(active) {
	return ["flex items-center justify-between gap-2 rounded-md px-3 py-1.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring", active ? "bg-brand-soft font-medium text-brand-soft-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"].join(" ");
}
function NavGroup({ label, items, onNavigate }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": label,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-0.5",
			children: items.map((item) => {
				const active = pathname === item.href;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.href,
					onClick: onNavigate,
					"aria-current": active ? "page" : void 0,
					className: itemClasses(active),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name }), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "size-1.5 rounded-full bg-brand"
					}) : null]
				}) }, item.href);
			})
		})]
	});
}
function CatalogLink({ active, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/components",
		onClick: onNavigate,
		"aria-current": active ? "page" : void 0,
		className: itemClasses(active),
		children: "Component catalog"
	});
}
function SidebarContent({ onNavigate }) {
	const catalogActive = useRouterState({ select: (state) => state.location.pathname }) === "/components";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavGroup, {
				label: "Getting Started",
				items: guideDocs,
				onNavigate
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
				children: "Overview"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogLink, {
				active: catalogActive,
				onNavigate
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavGroup, {
				label: "Components",
				items: componentDocs,
				onNavigate
			})
		]
	});
}
function SidebarAside() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-border/70 py-8 pr-6 lg:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {})
	});
}
function SidebarMobileNav() {
	const detailsRef = (0, import_react.useRef)(null);
	const close = () => {
		if (detailsRef.current) detailsRef.current.open = false;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		ref: detailsRef,
		className: "group border-b border-border/70 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
			className: "flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium outline-none transition-colors hover:bg-accent/60 focus-visible:ring-2 focus-visible:ring-ring sm:px-6 [&::-webkit-details-marker]:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Browse docs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				"aria-hidden": "true",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				className: "size-4 text-muted-foreground transition-transform duration-[140ms] group-open:rotate-180",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-[60vh] overflow-y-auto border-t border-border/70 bg-card/60 px-4 py-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, { onNavigate: close })
		})]
	});
}
//#endregion
export { SidebarMobileNav as n, SidebarAside as t };
