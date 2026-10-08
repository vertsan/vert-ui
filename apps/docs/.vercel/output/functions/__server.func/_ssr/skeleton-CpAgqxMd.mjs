import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Ht as CardHeader, Rt as Card, X as Skeleton, zt as CardContent } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skeleton-CpAgqxMd.js
var import_jsx_runtime = require_jsx_runtime();
var props = [{
	name: "className",
	type: "string",
	required: true,
	description: "Sets the placeholder dimensions (height/width/rounded) — the only prop you need."
}, {
	name: "...props",
	type: "HTMLAttributes<HTMLDivElement>",
	description: "Any div attribute (style, data-*, aria-*)."
}];
function SkeletonPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Skeleton",
		intro: "Shape-matched loading placeholder. Decorative by design: it is aria-hidden, so mark your loading region itself with aria-busy.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-10 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-24" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full" })]
		}),
		examples: [{
			title: "Card placeholder",
			code: `<div aria-busy={loading}>
  {loading ? (
    <Card>
      <CardHeader><Skeleton className="h-5 w-2/3" /></CardHeader>
      <CardContent><Skeleton className="h-4 w-full" /></CardContent>
    </Card>
  ) : (
    <Card>…actual content…</Card>
  )}
</div>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-2/3" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-4 w-4/5" })] })] })
		}, {
			title: "Matching text metrics",
			code: `<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-11/12" />`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-11/12" })]
			})
		}],
		a11y: [
			"Skeletons render aria-hidden, so assistive tech never reads placeholder shapes.",
			"Put aria-busy on the region that is loading, and announce completion with a live region if the result matters.",
			"The pulse is opacity-only and has motion-reduce:animate-none — reduced-motion users see a static block.",
			"Size the skeleton like the content it replaces so nothing jumps when real content arrives."
		],
		props
	});
}
//#endregion
export { SkeletonPage as component };
