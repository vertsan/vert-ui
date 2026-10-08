import { u as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as Code, r as GuidePage, t as Callout } from "./guide-page-CbTIiKv-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/installation-Be6-gYsg.js
var import_jsx_runtime = require_jsx_runtime();
var componentsJson = `{
  "registries": {
    "@vert": "https://vert-ui.dev/r/{name}.json"
  }
}`;
var cssEntry = `@import "tailwindcss";
@import "./styles/vert.css"; /* path is relative to this file */`;
var addComponent = `npx shadcn add @vert/button

# multiple at once
npx shadcn add @vert/button @vert/input @vert/card

# or straight from a URL — no registry alias needed
npx shadcn add https://vert-ui.dev/r/field.json`;
var installOutput = `Installing components:
- components/vert-ui/button.tsx
- lib/vert-ui/cn.ts

Adding dependencies:
- @radix-ui/react-slot
- class-variance-authority`;
function InstallationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GuidePage, {
		title: "Installation",
		intro: "Register the vert registry, install the theme once, then add components one by one — the CLI copies source into your repo and installs its dependencies.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Step 1",
				title: "Prerequisites",
				id: "install-prereqs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc space-y-2.5 pl-5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A React 19 project with Tailwind CSS v4 wired up (CSS-first, no config file)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"A ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "components.json"
							}),
							" at the project root. The shadcn CLI uses it for paths and aliases — create one with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "npx shadcn@latest init"
							}),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"The ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "@/*"
							}),
							" path alias in your",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "tsconfig.json"
							}),
							" pointing at your source directory, so installed files can import each other."
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Step 2",
				title: "Register the vert registry",
				id: "install-registry",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Add the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "registries"
							}),
							" map to your",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "components.json"
							}),
							". The alias can be anything; ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "@vert"
							}),
							" is the convention used throughout these docs."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: componentsJson }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"After this, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "@vert/<name>"
							}),
							" resolves to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "https://vert-ui.dev/r/<name>.json"
							}),
							" — one JSON item per component, plus the theme and helper items."
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Step 3",
				title: "Install the theme",
				id: "install-theme",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The theme item carries the design tokens, the base styles and the ready-made themes. Install it once per project:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `npx shadcn add @vert/vert` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It writes these files into your repo:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `styles/vert.css              tokens, utilities, base styles
styles/themes.css             data-theme bridges
styles/themes/slate.css       cool blue-gray preset
styles/themes/sand.css        warm beige preset
styles/themes/midnight.css    dark-first preset
styles/themes/rose.css        muted red preset
styles/themes/ocean.css       deep teal preset` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Then import it from your CSS entry. Tailwind must come first — the theme relies on Tailwind v4's ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "@theme"
							}),
							" and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "@custom-variant"
							}),
							" at-rules:"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: cssEntry }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
							tone: "warning",
							title: "Import order matters",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-xs",
									children: "@import \"tailwindcss\""
								}),
								" must precede the vert import. If your CSS entry is not at the project root, adjust the relative path (for example ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-xs",
									children: "../styles/vert.css"
								}),
								" from",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-xs",
									children: "src/"
								}),
								")."
							] })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Step 4",
				title: "Add your first component",
				id: "install-component",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: addComponent }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For each component the CLI does three things:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc space-y-2 pl-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"copies the source to",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-xs text-foreground",
										children: "components/vert-ui/<name>.tsx"
									}),
									", rewriting the shared ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-xs text-foreground",
										children: "cn()"
									}),
									" import to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-xs text-foreground",
										children: "@/lib/vert-ui/cn"
									}),
									";"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"installs the ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-xs text-foreground",
										children: "@vert/vert-cn"
									}),
									" helper (",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-xs text-foreground",
										children: "lib/vert-ui/cn.ts"
									}),
									") the first time it is needed;"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"adds the component's npm dependencies — Radix primitives,",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-xs text-foreground",
										children: "class-variance-authority"
									}),
									" and friends — to your ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-xs text-foreground",
										children: "package.json"
									}),
									"."
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: installOutput }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Render it straight away — no provider, no wrapper, no library import:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `import { Button } from "@/components/vert-ui/button"

export function Example() {
  return <Button>Save changes</Button>
}` })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Alternative",
				title: "Manual installation",
				id: "install-manual",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No CLI? Every registry item is plain source in a JSON envelope. Fetch the item and paste the file contents into your project:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `curl https://vert-ui.dev/r/button.json` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Each entry in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "files[].content"
							}),
							" is ready to paste — the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "cn()"
							}),
							" import is already rewritten and the npm dependencies are listed in",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "dependencies"
							}),
							". You still need the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "vert-cn"
							}),
							" helper (item",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "vert-cn"
							}),
							") and the theme (item",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-foreground",
								children: "vert"
							}),
							") by the same method."
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Maintenance",
				title: "Updates and customization",
				id: "install-updates",
				tinted: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You own the installed files. Edit them freely — that is the whole delivery model. Two things to keep in mind:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Re-running" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs",
								children: "npx shadcn add @vert/button"
							}),
							" overwrites the local file with the upstream source. Commit first so",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs",
								children: "git diff"
							}),
							" can show you what changed."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Never blindly overwrite" }), " a component you have heavily customized — port the upstream changes by hand instead."] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Next",
				title: "Verify and continue",
				id: "install-next",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Start your dev server — the component should render with the vert theme applied. If styles are missing, check that the Tailwind import comes first and that your",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-xs text-foreground",
							children: "components.json"
						}),
						" registry map matches the snippet above."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Continue with",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guide/getting-started",
							className: "font-medium text-foreground underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: "Getting Started"
						}),
						" ",
						"for themes, tones and your first composed screen — or browse the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/components",
							className: "font-medium text-foreground underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: "component catalog"
						}),
						"."
					] })]
				})
			})
		]
	});
}
//#endregion
export { InstallationPage as component };
