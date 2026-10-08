import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { F as CollapsibleContent, I as CollapsibleTrigger, Kt as Button, P as Collapsible } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collapsible-CpUrIOGb.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "open / defaultOpen",
		type: "boolean",
		default: "false",
		description: "Controlled or uncontrolled expanded state."
	},
	{
		name: "onOpenChange",
		type: "(open: boolean) => void",
		description: "Fires when the trigger toggles the region."
	},
	{
		name: "disabled",
		type: "boolean",
		default: "false",
		description: "Blocks the trigger."
	},
	{
		name: "CollapsibleTrigger",
		type: "ReactNode",
		description: "The control that toggles the region; gets aria-expanded automatically."
	},
	{
		name: "CollapsibleContent",
		type: "ReactNode",
		description: "The region itself; unmounted while collapsed."
	}
];
function CollapsiblePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Collapsible",
		intro: "Single disclosure region. The content is removed from the DOM while collapsed, so hidden details are never tabbable.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible, {
			className: "max-w-sm space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					children: "Shipping details"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
				className: "rounded-lg border border-border bg-muted/50 p-4 text-sm text-muted-foreground",
				children: "Ships in 2–3 business days. Free returns within 30 days to the original payment method."
			})]
		}),
		examples: [{
			title: "Disclosure with a chevron",
			code: `<Collapsible>
  <CollapsibleTrigger asChild>
    <button className="flex items-center gap-2 text-sm font-medium">
      Advanced settings
      <ChevronDown aria-hidden />
    </button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <AdvancedSettingsForm />
  </CollapsibleContent>
</Collapsible>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible, {
				className: "max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						children: "Advanced settings"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
					className: "text-sm text-muted-foreground",
					children: "Timeout, retries and webhook configuration live here."
				})]
			})
		}, {
			title: "Controlled",
			code: `const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger>{open ? "Hide" : "Show"} rows</CollapsibleTrigger>
  <CollapsibleContent>…</CollapsibleContent>
</Collapsible>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible, {
				defaultOpen: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						children: "Rows visible"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
					className: "text-sm text-muted-foreground",
					children: "Open by default via defaultOpen."
				})]
			})
		}],
		a11y: [
			"The trigger renders aria-expanded and controls the region via aria-controls.",
			"Collapsed content is unmounted, so focus order never contains invisible items.",
			"The region animates opacity only (vert-fade-in/out) and is neutralised by the reduced-motion override.",
			"A button-like trigger is required — do not use a bare div; CollapsibleTrigger accepts asChild for that reason."
		],
		props
	});
}
//#endregion
export { CollapsiblePage as component };
