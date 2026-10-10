import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/accordion")({
  component: AccordionPage,
})

const props: PropRow[] = [
  {
    name: "type",
    type: '"single" | "multiple"',
    required: true,
    description: "Whether one panel or several can be open at once.",
  },
  {
    name: "collapsible",
    type: "boolean",
    default: "false (single)",
    description: "Lets the open item close itself when clicked again.",
  },
  {
    name: "value / defaultValue",
    type: "string | string[]",
    description: "Controlled or uncontrolled open item(s).",
  },
  {
    name: "onValueChange",
    type: "(value: string | string[]) => void",
    description: "Fires when the open set changes.",
  },
  {
    name: "variant",
    type: '"default" | "bordered"',
    default: '"default"',
    description: "Hairline dividers or boxed items. Cascades to every AccordionItem.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "Trigger padding and label scale; also drives content spacing.",
  },
  {
    name: "indicator",
    type: "ReactNode | false",
    default: "rotating chevron",
    description: "Replaces the marker; pass false to hide it entirely.",
  },
  {
    name: "indicatorPosition",
    type: '"start" | "end"',
    default: '"end"',
    description: "Which side of the label the indicator sits on.",
  },
  {
    name: "AccordionItem value",
    type: "string",
    required: true,
    description: "Identifies the panel; must be unique.",
  },
  {
    name: "AccordionTrigger size / indicator",
    type: "same as root",
    description: "Any trigger can override size, indicator and indicatorPosition per item.",
  },
]

function AccordionPage() {
  return (
    <DocPage
      title="Accordion"
      intro="Stacked disclosure panels with rotating chevrons. Only the trigger is focusable — closed panels are unmounted."
      demo={
        <Accordion
          type="single"
          variant="bordered"
          collapsible
          defaultValue="one"
          className="w-full max-w-2xl space-y-2"
        >
          <AccordionItem value="one">
            <AccordionTrigger>How is vert-ui installed?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                Add only the components you need. The CLI copies the source directly into your
                project:
              </p>
              <code className="block break-all rounded-md border border-border bg-background px-3 py-2 font-mono text-xs text-foreground">
                npx shadcn@latest add https://vert-ui.dev/r/accordion.json
              </code>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
            <AccordionContent>
              Yes. Both theme entries include dark palettes, so the same accordion adapts to your
              selected theme without component-specific setup.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="three">
            <AccordionTrigger>Is it keyboard accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. Use Enter or Space to toggle a panel, the arrow keys to move between triggers,
              and Home or End to jump to the first or last trigger.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      examples={[
        {
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
          render: (
            <Accordion type="multiple" defaultValue={['billing']} className="max-w-xl">
              <AccordionItem value="billing">
                <AccordionTrigger>Billing</AccordionTrigger>
                <AccordionContent>Invoices are issued on the 1st of each month.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="usage">
                <AccordionTrigger>Usage</AccordionTrigger>
                <AccordionContent>Metered by seats and API calls.</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
        {
          title: "Bordered variant",
          code: `<Accordion type="single" variant="bordered" collapsible>…</Accordion>`,
          render: (
            <Accordion type="single" variant="bordered" collapsible defaultValue="a" className="max-w-xl">
              <AccordionItem value="a">
                <AccordionTrigger>Boxed item</AccordionTrigger>
                <AccordionContent>Rounded border around each item.</AccordionContent>
              </AccordionItem>
            </Accordion>
          ),
        },
        {
          title: "Sizes",
          code: `<Accordion type="single" size="sm">…</Accordion>
<Accordion type="single" size="lg">…</Accordion>`,
          render: (
            <div className="max-w-xl space-y-6">
              <Accordion type="single" size="sm" collapsible defaultValue="s">
                <AccordionItem value="s">
                  <AccordionTrigger>Small — dense lists</AccordionTrigger>
                  <AccordionContent>Tighter padding for compact layouts.</AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" size="lg" collapsible defaultValue="l">
                <AccordionItem value="l">
                  <AccordionTrigger>Large — marketing pages</AccordionTrigger>
                  <AccordionContent>More room to breathe with a larger label.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ),
        },
        {
          title: "Custom or hidden indicator",
          code: `// Right-aligned plus/minus
<Accordion indicator={<span aria-hidden>＋</span>}>…</Accordion>

// Indicator on the left
<Accordion indicatorPosition="start">…</Accordion>

// No indicator
<Accordion indicator={false}>…</Accordion>`,
          render: (
            <div className="max-w-xl space-y-6">
              <Accordion
                type="single"
                indicator={<span className="text-lg leading-none">＋</span>}
                className="border-t border-border"
              >
                <AccordionItem value="a">
                  <AccordionTrigger>Custom marker</AccordionTrigger>
                  <AccordionContent>Any node rotates 180° when the panel opens.</AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" indicatorPosition="start" className="border-t border-border">
                <AccordionItem value="b">
                  <AccordionTrigger>Indicator first</AccordionTrigger>
                  <AccordionContent>Useful for settings-style disclosure rows.</AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" indicator={false} className="border-t border-border">
                <AccordionItem value="c">
                  <AccordionTrigger>No indicator</AccordionTrigger>
                  <AccordionContent>Let the label stand alone.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ),
        },
      ]}
      a11y={[
        "Triggers are real buttons with aria-expanded and aria-controls; panels carry role=\"region\" and aria-labelledby.",
        "In single mode the inactive panels are unmounted, so hidden content is never reachable.",
        "Panels reveal with a height + opacity animation driven by Radix's --radix-accordion-content-height; prefers-reduced-motion collapses it to instant.",
        "The indicator rotates with a transform-only 200ms transition, so custom markers animate the same way as the default chevron.",
        "Keep trigger labels specific (\"How is vert-ui installed?\", not \"More\").",
        "For long documents consider a heading-per-item navigation instead of an accordion.",
      ]}
      props={props}
    />
  )
}
