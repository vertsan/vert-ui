import { DocPage, type PropRow } from "../../components/doc-page"
import { Button } from "@vert-ui/ui"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/components/button")({
  component: ButtonPage,
})

const props: PropRow[] = [
  {
    name: "variant",
    type: '"default" | "secondary" | "outline" | "ghost" | "link" | "glow" | "destructive"',
    default: '"default"',
    description: "Visual role. glow adds the signature luminous border; destructive for irreversible actions.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "icon"',
    default: '"md"',
    description: "icon renders a square 36×36 button — give it an aria-label.",
  },
  {
    name: "asChild",
    type: "boolean",
    description: "Render the child element instead of <button> — for links, router anchors and icon libraries.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description:
      "Disables the button, sets aria-busy and shows a spinner while keeping the label width stable.",
  },
  {
    name: "loadingText",
    type: "ReactNode",
    description:
      "Optional label shown while loading; defaults to the button's children.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Native disabled state — dimmed and unreachable by click or tab.",
  },
  {
    name: "…native button attrs",
    type: "ButtonHTMLAttributes<HTMLButtonElement>",
    description: "type, onClick, form, aria-*, …",
  },
]

function ButtonPage() {
  return (
    <DocPage
      title="Button"
      intro="Primary action control with seven variants, four sizes, a loading state and slot support for links."
      demo={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button>Save changes</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="outline">Preview</Button>
          <Button variant="ghost">Dismiss</Button>
          <Button variant="link">Learn more</Button>
        </div>
      }
      examples={[
        {
          title: "Variants for intent",
          code: `<Button>Save changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="outline">Preview</Button>
<Button variant="ghost">Dismiss</Button>
<Button variant="link">Learn more</Button>
<Button variant="destructive">Delete project</Button>
<Button variant="glow">Deploy</Button>`,
          render: (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button>Save changes</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="outline">Preview</Button>
              <Button variant="ghost">Dismiss</Button>
              <Button variant="link">Learn more</Button>
              <Button variant="destructive">Delete project</Button>
              <Button variant="glow">Deploy</Button>
            </div>
          ),
        },
        {
          title: "Sizes and icon button",
          code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon" aria-label="Add project">
  <Plus className="size-4" />
</Button>`,
          render: (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add project">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="size-4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </Button>
            </div>
          ),
        },
        {
          title: "Loading and asChild link",
          code: `<Button loading>Save changes</Button>

<Button loading loadingText="Deploying…">Deploy</Button>

<Button asChild>
  <Link to="/components">Browse components</Link>
</Button>`,
          render: (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button loading>Save changes</Button>
              <Button loading loadingText="Deploying…">
                Deploy
              </Button>
              <Button asChild variant="outline">
                <Link to="/components">Browse components</Link>
              </Button>
            </div>
          ),
        },
      ]}
      a11y={[
        "Buttons are natively focusable and announced as \"button\" — never use a clickable div.",
        "Icon-only buttons need an accessible name: aria-label describing the outcome (\"Add project\", not \"plus\").",
        "loading sets aria-busy and blocks pointer events; keep the width stable so the layout does not jump.",
        "destructive actions belong on destructive variant buttons and should be confirmed elsewhere for irreversible work.",
        "asChild renders an <a> or router Link — the visual style stays, semantics follow the child.",
      ]}
      props={props}
    />
  )
}
