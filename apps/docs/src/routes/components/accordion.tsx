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
    description: "Hairline dividers or boxed items.",
  },
  {
    name: "AccordionItem value",
    type: "string",
    required: true,
    description: "Identifies the panel; must be unique.",
  },
]

function AccordionPage() {
  return (
    <DocPage
      title="Accordion"
      intro="Stacked disclosure panels with rotating chevrons. Only the trigger is focusable — closed panels are unmounted."
      demo={
        <Accordion type="single" collapsible defaultValue="one" className="max-w-xl">
          <AccordionItem value="one">
            <AccordionTrigger>How is vert-ui installed?</AccordionTrigger>
            <AccordionContent>
              Copy components from the shadcn registry with npx shadcn add, or paste the source
              into your project — there is no runtime dependency on this library.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
            <AccordionContent>
              Yes. Both theme entries ship dark palettes: a .dark class for the flat token entry
              and data-tone="dark" for the consumer theme engine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="three">
            <AccordionTrigger>Is it keyboard accessible?</AccordionTrigger>
            <AccordionContent>
              Every component is reachable and operable with a keyboard, and the contrast audit
              must stay green before release.
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
      ]}
      a11y={[
        "Triggers are real buttons with aria-expanded and aria-controls; panels carry role=\"region\" and aria-labelledby.",
        "In single mode the inactive panels are unmounted, so hidden content is never reachable.",
        "The chevron rotates via data-[state=open] with a 200ms transform — no layout animation, no shift.",
        "Keep trigger labels specific (\"How is vert-ui installed?\", not \"More\").",
        "For long documents consider a heading-per-item navigation instead of an accordion.",
      ]}
      props={props}
    />
  )
}
