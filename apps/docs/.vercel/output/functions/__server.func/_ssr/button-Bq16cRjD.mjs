import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Kt as Button } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-Bq16cRjD.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "variant",
		type: "\"default\" | \"secondary\" | \"outline\" | \"ghost\" | \"link\" | \"glow\" | \"destructive\"",
		default: "\"default\"",
		description: "Visual role. glow adds the signature luminous border; destructive for irreversible actions."
	},
	{
		name: "size",
		type: "\"sm\" | \"md\" | \"lg\" | \"icon\"",
		default: "\"md\"",
		description: "icon renders a square 36×36 button — give it an aria-label."
	},
	{
		name: "asChild",
		type: "boolean",
		description: "Render the child element instead of <button> — for links, router anchors and icon libraries."
	},
	{
		name: "loading",
		type: "boolean",
		description: "Disables the button, sets aria-busy and swaps the label to \"Saving\"."
	},
	{
		name: "disabled",
		type: "boolean",
		description: "Native disabled state — dimmed and unreachable by click or tab."
	},
	{
		name: "…native button attrs",
		type: "ButtonHTMLAttributes<HTMLButtonElement>",
		description: "type, onClick, form, aria-*, …"
	}
];
function ButtonPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Button",
		intro: "Primary action control with seven variants, four sizes, a loading state and slot support for links.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Save changes" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					children: "Cancel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Preview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					children: "Dismiss"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "link",
					children: "Learn more"
				})
			]
		}),
		examples: [
			{
				title: "Variants for intent",
				code: `<Button>Save changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="outline">Preview</Button>
<Button variant="ghost">Dismiss</Button>
<Button variant="link">Learn more</Button>
<Button variant="destructive">Delete project</Button>
<Button variant="glow">Deploy</Button>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Save changes" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							children: "Cancel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							children: "Preview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							children: "Dismiss"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "link",
							children: "Learn more"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "destructive",
							children: "Delete project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "glow",
							children: "Deploy"
						})
					]
				})
			},
			{
				title: "Sizes and icon button",
				code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon" aria-label="Add project">
  <Plus className="size-4" />
</Button>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							children: "Small"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "md",
							children: "Medium"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							children: "Large"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							"aria-label": "Add project",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								"aria-hidden": "true",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								className: "size-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14M5 12h14" })
							})
						})
					]
				})
			},
			{
				title: "Loading and asChild link",
				code: `<Button loading>Save changes</Button>

<Button asChild>
  <Link to="/components">Browse components</Link>
</Button>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						loading: true,
						children: "Save changes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/components",
							children: "Browse components"
						})
					})]
				})
			}
		],
		a11y: [
			"Buttons are natively focusable and announced as \"button\" — never use a clickable div.",
			"Icon-only buttons need an accessible name: aria-label describing the outcome (\"Add project\", not \"plus\").",
			"loading sets aria-busy and blocks pointer events; keep the width stable so the layout does not jump.",
			"destructive actions belong on destructive variant buttons and should be confirmed elsewhere for irreversible work.",
			"asChild renders an <a> or router Link — the visual style stays, semantics follow the child."
		],
		props
	});
}
//#endregion
export { ButtonPage as component };
