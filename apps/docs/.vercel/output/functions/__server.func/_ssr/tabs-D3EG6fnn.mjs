import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { Dt as TabsContent, Et as Tabs, Ot as TabsList, kt as TabsTrigger } from "./router-Di5NSBLV.mjs";
import { t as DocPage } from "./doc-page-B0_ykHMH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tabs-D3EG6fnn.js
var import_jsx_runtime = require_jsx_runtime();
var props = [
	{
		name: "value / defaultValue",
		type: "string",
		description: "Controlled or uncontrolled selected tab value."
	},
	{
		name: "onValueChange",
		type: "(value: string) => void",
		description: "Fires when the selection changes by click or keyboard."
	},
	{
		name: "variant",
		type: "\"line\" | \"pill\"",
		default: "\"line\"",
		description: "Underline tabs or a segmented pill. Applies to list, trigger and content."
	},
	{
		name: "size",
		type: "\"sm\" | \"md\" | \"lg\"",
		default: "\"md\"",
		description: "Type scale and padding of the triggers."
	},
	{
		name: "orientation",
		type: "\"horizontal\" | \"vertical\"",
		default: "\"horizontal\"",
		description: "Direction of the tab list (forwarded to Radix)."
	},
	{
		name: "TabsTrigger value",
		type: "string",
		required: true,
		description: "Matches the TabsContent value it controls."
	},
	{
		name: "TabsContent value",
		type: "string",
		required: true,
		description: "Panel content; unmounted while inactive."
	}
];
function TabsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocPage, {
		title: "Tabs",
		intro: "Tabbed panels with full keyboard support. Arrow keys move and select, Home/End jump to the ends.",
		demo: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "general",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "general",
						children: "General"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "members",
						children: "Members"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "danger",
						children: "Danger zone"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "general",
					children: "Workspace name, avatar and default language."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "members",
					children: "Invite people and manage roles."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "danger",
					children: "Delete the workspace and export data first."
				})
			]
		}),
		examples: [{
			title: "Pill variant",
			code: `<Tabs variant="pill" defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="activity">Activity</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Charts and totals.</TabsContent>
  <TabsContent value="activity">Recent events.</TabsContent>
</Tabs>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				variant: "pill",
				defaultValue: "overview",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "overview",
						children: "Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "activity",
						children: "Activity"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "overview",
						children: "Charts and totals."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "activity",
						children: "Recent events."
					})
				]
			})
		}, {
			title: "Controlled tabs",
			code: `const [tab, setTab] = useState("a")
<Tabs value={tab} onValueChange={setTab}>…</Tabs>`,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "a",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "a",
						children: "First"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "b",
						children: "Second"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "a",
						children: "First panel."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "b",
						children: "Second panel."
					})
				]
			})
		}],
		a11y: [
			"Renders role=\"tablist\", role=\"tab\" (with aria-selected and aria-controls) and role=\"tabpanel\".",
			"The tab list is a single tab stop: Left/Right (or Up/Down when vertical) move focus and select, Home/End jump to the first/last tab.",
			"Inactive panels are unmounted, so hidden content is never reachable by screen reader.",
			"Keep each trigger label short and unique; it becomes the accessible name of the panel.",
			"Focus ring uses the ring token at 2px with an offset, and never relies on color alone."
		],
		props
	});
}
//#endregion
export { TabsPage as component };
