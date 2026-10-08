import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { l as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SidebarMobileNav, t as SidebarAside } from "./site-sidebar-CDI0gVil.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-BeaO83TF.js
var import_jsx_runtime = require_jsx_runtime();
function ComponentsLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMobileNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-6xl px-4 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarAside, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0 flex-1 py-8 lg:pl-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	})] });
}
//#endregion
export { ComponentsLayout as component };
