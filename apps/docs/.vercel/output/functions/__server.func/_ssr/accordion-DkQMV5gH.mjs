import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { A as Accordion, M as AccordionItem, N as AccordionTrigger, j as AccordionContent } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accordion-DkQMV5gH.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "type",
		type: "\"single\" | \"multiple\"",
		required: true,
		description: "Whether one panel or several can be open at once."
	},
	{
		name: "collapsible",
		type: "boolean",
		default: "false (single)",
		description: "Lets the open item close itself when clicked again."
	},
	{
		name: "value / defaultValue",
		type: "string | string[]",
		description: "Controlled or uncontrolled open item(s)."
	},
	{
		name: "onValueChange",
		type: "(value: string | string[]) => void",
		description: "Fires when the open set changes."
	},
	{
		name: "variant",
		type: "\"default\" | \"bordered\"",
		default: "\"default\"",
		description: "Hairline dividers or boxed items."
	},
	{
		name: "AccordionItem value",
		type: "string",
		required: true,
		description: "Identifies the panel; must be unique."
	}
];
function AccordionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Accordion",
		intro: "Stacked disclosure panels with rotating chevrons. Only the trigger is focusable — closed panels are unmounted.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
			type: "single",
			collapsible: true,
			defaultValue: "one",
			className: "max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: "one",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "How is vert-ui installed?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: "Copy components from the shadcn registry with npx shadcn add, or paste the source into your project — there is no runtime dependency on this library." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: "two",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Does it support dark mode?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: "Yes. Both theme entries ship dark palettes: a .dark class for the flat token entry and data-tone=\"dark\" for the consumer theme engine." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: "three",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Is it keyboard accessible?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: "Every component is reachable and operable with a keyboard, and the contrast audit must stay green before release." })]
				})
			]
		}),
		examples: [{
			title: "Multiple panels open",
			code: `<Accordion type="multiple">
  <AccordionItem value="billing">
    <AccordionTrigger>Billing</AccordionTrigger>
    <AccordionContent>…</AccordionContent>
  </AccordionItem>
  <AccordionItem value="usage">
    <AccordionTrigger>Usage</AccordionTrigger>
    <AccordionContent>…</AccordionContent>
  </AccordionItem>
</Accordion>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
				type: "multiple",
				defaultValue: ["billing"],
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: "billing",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Billing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: "Invoices are issued on the 1st of each month." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: "usage",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Usage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: "Metered by seats and API calls." })]
				})]
			})
		}, {
			title: "Bordered variant",
			code: `<Accordion type="single" variant="bordered" collapsible>…</Accordion>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				variant: "bordered",
				collapsible: true,
				defaultValue: "a",
				className: "max-w-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: "a",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Boxed item" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: "Rounded border around each item." })]
				})
			})
		}],
		a11y: [
			"Triggers are real buttons with aria-expanded and aria-controls; panels carry role=\"region\" and aria-labelledby.",
			"In single mode the inactive panels are unmounted, so hidden content is never reachable.",
			"The chevron rotates via data-[state=open] with a 200ms transform — no layout animation, no shift.",
			"Keep trigger labels specific (\"How is vert-ui installed?\", not \"More\").",
			"For long documents consider a heading-per-item navigation instead of an accordion."
		],
		props
	});
}
//#endregion
export { AccordionPage as component };
