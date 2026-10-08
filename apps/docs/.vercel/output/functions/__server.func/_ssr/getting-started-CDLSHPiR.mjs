import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Gt as Input, Kt as Button, z as Field } from "./router-Di5NSBLV.mjs";
import { a as Steps, i as Section, n as Code, r as GuidePage, t as Callout } from "./guide-page-CbTIiKv-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/getting-started-CDLSHPiR.js
var import_jsx_runtime = require_jsx_runtime();
var fileTree = `src/
├── components/
│   └── vert-ui/
│       ├── button.tsx
│       └── field.tsx
├── lib/
│   └── vert-ui/
│       └── cn.ts
└── styles/
    └── vert.css`;
var themeSnippet = `<!-- light (default) -->
<html data-tone="light">

<!-- dark tone: dark: variants now resolve to [data-tone='dark'] -->
<html data-tone="dark">

<!-- full preset: import styles/themes/slate.css first -->
<html data-theme="slate" data-tone="dark">`;
var switchTheme = `// presets: slate, sand, midnight, rose, ocean
document.documentElement.setAttribute("data-theme", "slate")

// tone: "light" | "dark"
document.documentElement.setAttribute("data-tone", "dark")`;
var formExample = `<Field label="Workspace name" description="Shown to everyone on your team.">
  {(field) => <Input {...field} defaultValue="Acme Inc." />}
</Field>

<Field label="Slug" error="Already taken.">
  {(field) => <Input {...field} defaultValue="acme" />}
</Field>

<Button>Save changes</Button>`;
function GettingStartedPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GuidePage, {
		title: "Getting Started",
		intro: "From an installed theme to a themed, accessible screen — five steps, each one a single command or a short snippet.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Walkthrough",
				title: "Your first five minutes",
				id: "start-steps",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
					{
						title: "Install the theme",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `npx shadcn add @vert/vert` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Import it after Tailwind in your CSS entry. Everything else — tokens, focus rings, reduced-motion handling — comes from this file." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `@import "tailwindcss";
@import "./styles/vert.css";` })
							]
						})
					},
					{
						title: "Add a component",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `npx shadcn add @vert/button` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The source lands in your repo and its npm dependencies are installed. Import it from there — never from a library package." })]
						})
					},
					{
						title: "Render it",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grain rounded-xl border border-border/60 bg-background/70 p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Save changes" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											children: "Cancel"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "glow",
											children: "Deploy"
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `import { Button } from "@/components/vert-ui/button"

<Button>Save changes</Button>
<Button variant="outline">Cancel</Button>
<Button variant="glow">Deploy</Button>` })]
						})
					},
					{
						title: "Pick a tone and a theme",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Tone is light or dark. A theme is a full token preset — import the ones you use from ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-xs text-foreground",
									children: "styles/themes/"
								}),
								", then switch with attributes on ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-xs text-foreground",
									children: "<html>"
								}),
								":"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: themeSnippet })]
						})
					},
					{
						title: "Compose a small screen",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grain rounded-xl border border-border/60 bg-background/70 p-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mx-auto w-full max-w-sm space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Workspace name",
												description: "Shown to everyone on your team.",
												children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													...field,
													defaultValue: "Acme Inc."
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Slug",
												error: "Already taken.",
												children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													...field,
													defaultValue: "acme"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												className: "w-full",
												children: "Save changes"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: formExample }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Field wires label, description and error to the control with stable ids — the accessible part is handled for you." })
							]
						})
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Layout",
				title: "What your repo looks like now",
				id: "start-tree",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: fileTree }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Three directories, all plain source. Nothing is generated, nothing is minified — this is the code you maintain from now on." })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Theming",
				title: "Switching themes at runtime",
				id: "start-theming",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Both attributes are plain CSS hooks, so switching is instant and works without a re-render — persist the choice in localStorage and set it in your document head to avoid a flash on load:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: switchTheme }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
							tone: "info",
							title: "The dark: variant follows data-tone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"The theme remaps Tailwind's ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-xs",
									children: "dark:"
								}),
								" ",
								"variant to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-xs",
									children: "[data-tone='dark']"
								}),
								", so",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-xs",
									children: "dark:bg-surface"
								}),
								" responds to your tone attribute, not the OS setting. An explicit tone always wins."
							] })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Ownership",
				title: "Make it yours",
				id: "start-customize",
				tinted: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Re-skin by editing the CSS variables at the top of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-xs",
							children: "styles/vert.css"
						}),
						" — brand, muted, accent, border, status colors, radii and shadows all live there. Change",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-xs",
							children: "--brand"
						}),
						" and the whole interface follows."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Components are edited the same way: they are your files now. The",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-xs",
							children: "cn()"
						}),
						" helper merges Tailwind classes, so pass ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-xs",
							children: "className"
						}),
						" overrides freely — every component accepts one."
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Accessibility",
				title: "What you get for free",
				id: "start-a11y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc space-y-2.5 pl-5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "WCAG AA contrast across 756 audited colour pairs, light and dark." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Full keyboard support — focus order, arrow-key navigation, focus traps in overlays, visible focus rings." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Screen-reader semantics: roles, labels and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs",
								children: "aria-describedby"
							}),
							" wiring are built in."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-xs",
							children: "prefers-reduced-motion"
						}), " respected; all animation is transform/opacity only."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "SSR-safe and usable at 320px with no layout shift." })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Next",
				title: "Where to go from here",
				id: "start-next",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Each component page in the catalog has a live preview, usage examples, a full props table and accessibility notes:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/components/button",
									children: "Button"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/components/field",
									children: "Field"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/components/dialog",
									children: "Dialog"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/components",
									children: "Full catalog"
								})
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { GettingStartedPage as component };
