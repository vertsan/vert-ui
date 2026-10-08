import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { B as FieldGroup, Gt as Input, It as Checkbox, Wt as Textarea, z as Field } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/field-CUGIrqW2.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "label",
		type: "ReactNode",
		description: "Visible label text. The Field generates the id and points htmlFor at it."
	},
	{
		name: "description",
		type: "ReactNode",
		description: "Helper text under the control, linked with aria-describedby."
	},
	{
		name: "error",
		type: "ReactNode",
		description: "Validation message under the control. Sets aria-invalid and data-invalid, and is announced first in aria-describedby."
	},
	{
		name: "required",
		type: "boolean",
		description: "Adds the native required flag to the control plus a decorative asterisk."
	},
	{
		name: "disabled",
		type: "boolean",
		description: "Mirrored into the injected control props."
	},
	{
		name: "children",
		type: "(field: FieldControlProps) => ReactNode",
		required: true,
		description: "Render the control with the injected props: id, aria-describedby, aria-invalid, required, disabled."
	},
	{
		name: "className",
		type: "string",
		description: "Merged onto the wrapper — default is a vertical grid with gap-2."
	}
];
function FieldPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Field",
		intro: "Form field wrapper that wires label, description and error to any control with stable ids — no more hand-matched htmlFor.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				description: "We only use it for billing receipts.",
				required: true,
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					...field,
					type: "email",
					placeholder: "you@example.com"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Release notes",
				error: "Keep it under 280 characters.",
				children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					...field,
					rows: 3,
					defaultValue: "A very long note…"
				})
			})]
		}),
		examples: [
			{
				title: "Checkbox inside a field",
				code: `<Field
  label="Subscribe to the changelog"
  description="One email per release, no marketing."
>
  {(field) => <Checkbox {...field} />}
</Field>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Subscribe to the changelog",
					description: "One email per release, no marketing.",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, { ...field })
				})
			},
			{
				title: "Grouping fields",
				code: `<FieldGroup label="Billing details">
  <Field label="Card number">
    {(field) => <Input {...field} inputMode="numeric" placeholder="4242 4242 4242 4242" />}
  </Field>
  <Field label="Postal code">
    {(field) => <Input {...field} placeholder="10115" />}
  </Field>
</FieldGroup>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, {
					label: "Billing details",
					className: "max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Card number",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...field,
							inputMode: "numeric",
							placeholder: "4242 4242 4242 4242"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Postal code",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...field,
							placeholder: "10115"
						})
					})]
				})
			},
			{
				title: "Clean vs invalid",
				code: `<Field label="Workspace slug">
  {(field) => <Input {...field} defaultValue="acme" />}
</Field>

<Field label="Workspace slug" error="Already taken.">
  {(field) => <Input {...field} defaultValue="acme" />}
</Field>`,
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid max-w-lg gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Workspace slug",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...field,
							defaultValue: "acme"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Workspace slug",
						error: "Already taken.",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							...field,
							defaultValue: "acme"
						})
					})]
				})
			}
		],
		a11y: [
			"The render prop is what makes the wiring safe: the generated id matches the label's htmlFor, and aria-describedby always points at real nodes.",
			"Errors are listed first in aria-describedby, so screen readers read the problem before the hint.",
			"The required asterisk is aria-hidden — the native required flag carries the semantics to assistive tech.",
			"One Field wraps one control. For sets of related inputs use FieldGroup, which renders role=group when you pass a label.",
			"You can still manage ids yourself with plain Label + Input; Field just removes the bookkeeping."
		],
		props
	});
}
//#endregion
export { FieldPage as component };
