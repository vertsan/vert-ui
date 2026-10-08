import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Lt as Badge$1 } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-rrN4b4ax.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "variant",
		type: "\"default\" | \"secondary\" | \"outline\" | \"ghost\" | \"warning\"",
		default: "\"default\"",
		description: "Visual role. warning uses the amber palette for attention states."
	},
	{
		name: "size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Padding and type scale of the pill."
	},
	{
		name: "dot",
		type: "boolean",
		description: "Prefixes a 6px status dot that inherits the badge color."
	},
	{
		name: "asChild",
		type: "boolean",
		description: "Render the child element instead of a <div> — for linking a badge."
	},
	{
		name: "…native element attrs",
		type: "HTMLAttributes<HTMLElement>",
		description: "title, aria-*, data-*, …"
	}
];
function BadgePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Badge",
		intro: "Compact status label for counts, states and categories — pill-shaped with an optional status dot.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, { children: "default" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
					variant: "secondary",
					children: "secondary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
					variant: "outline",
					children: "outline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
					variant: "ghost",
					children: "ghost"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
					variant: "warning",
					children: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
					dot: true,
					variant: "secondary",
					children: "online"
				})
			]
		}),
		examples: [
			{
				title: "Status with dot",
				code: `<Badge dot variant="secondary">Operational</Badge>
<Badge dot variant="warning">Degraded</Badge>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
							dot: true,
							variant: "secondary",
							children: "Operational"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
							dot: true,
							variant: "warning",
							children: "Degraded"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
							dot: true,
							variant: "outline",
							children: "Offline"
						})
					]
				})
			},
			{
				title: "Sizes",
				code: `<Badge size="sm">sm</Badge>
<Badge size="md">md</Badge>
<Badge size="lg">lg</Badge>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
							size: "sm",
							children: "sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
							size: "md",
							children: "md"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
							size: "lg",
							children: "lg"
						})
					]
				})
			},
			{
				title: "Count badge next to a title",
				code: `<div className="flex items-center gap-2">
  <h3 className="font-semibold">Open issues</h3>
  <Badge variant="secondary">12</Badge>
</div>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: "Open issues"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge$1, {
						variant: "secondary",
						children: "12"
					})]
				})
			}
		],
		a11y: [
			"A badge is decorative by default — if it carries meaning the control nearby does not, add readable text or an aria-label.",
			"Colour alone is insufficient: pair every status colour with a word (\"Degraded\", not just amber).",
			"The dot span is visual only; screen readers rely on the badge text beside it.",
			"Badges are not interactive — if it should be pressed, use a Button or a link with asChild."
		],
		props
	});
}
//#endregion
export { BadgePage as component };
