import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { D as Popover, Kt as Button, O as PopoverContent, k as PopoverTrigger } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/popover-D_PDHjlC.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "open / defaultOpen",
		type: "boolean",
		default: "false",
		description: "Controlled or uncontrolled open state."
	},
	{
		name: "onOpenChange",
		type: "(open: boolean) => void",
		description: "Fires on click-outside, Escape or trigger toggle."
	},
	{
		name: "PopoverContent side",
		type: "\"top\" | \"right\" | \"bottom\" | \"left\"",
		default: "\"bottom\"",
		description: "Preferred placement; flips automatically near viewport edges."
	},
	{
		name: "PopoverContent align",
		type: "\"start\" | \"center\" | \"end\"",
		default: "\"center\"",
		description: "Alignment along the trigger edge."
	},
	{
		name: "PopoverContent sideOffset",
		type: "number",
		default: "6",
		description: "Gap in pixels between trigger and panel."
	},
	{
		name: "PopoverTrigger asChild",
		type: "boolean",
		description: "Uses your own element as the opener (Radix Slot)."
	}
];
function PopoverPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Popover",
		intro: "Click-open anchored panel for secondary content — filters, previews, small forms. Unlike Tooltip it stays open, traps nothing and closes on outside click or Escape.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Ships to…"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: "Delivery estimate"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "2–3 business days to Lisbon, free over €50."
			})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Edit details" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
				side: "right",
				align: "start",
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Quick edit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": "Display name",
					className: "w-full rounded-md border border-input bg-background px-2.5 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
					defaultValue: "Acme Inc"
				})]
			})] })]
		}),
		examples: [{
			title: "Filter panel",
			code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Filters</Button>
  </PopoverTrigger>
  <PopoverContent align="start" className="w-64">
    <FilterForm />
  </PopoverContent>
</Popover>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Filters"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
				align: "start",
				className: "w-64 text-sm text-muted-foreground",
				children: "Status, date range and author controls would live here."
			})] })
		}, {
			title: "Controlled open",
			code: `const [open, setOpen] = useState(false)
<Popover open={open} onOpenChange={setOpen}>…</Popover>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
				defaultOpen: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						children: "Open by default"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "Closed with Escape or an outside click."
				}) })]
			})
		}],
		a11y: [
			"The content renders role=\"dialog\" with aria-labelledby only if you pass a title — always name the panel.",
			"The trigger gets aria-expanded and aria-controls while open.",
			"Escape closes and returns focus to the trigger; a click outside closes without moving focus.",
			"The panel is portalled, so it escapes overflow:hidden ancestors and keeps its own focus scope.",
			"Do not put content that must be reachable without a click here — use visible text instead."
		],
		props
	});
}
//#endregion
export { PopoverPage as component };
