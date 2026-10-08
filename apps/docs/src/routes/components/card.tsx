import { DocPage, type PropRow } from "../../components/doc-page"
import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/card")({
  component: CardPage,
})

const props: PropRow[] = [
  {
    name: "variant",
    type: '"default" | "interactive" | "raised" | "glow"',
    default: '"default"',
    description:
      "Surface treatment: hoverable lift (interactive), stronger shadow (raised) or the brand luminous border (glow). Exposed as data-variant for styling.",
  },
  {
    name: "Card",
    type: "HTMLAttributes<HTMLDivElement>",
    description: "Outer surface: rounded-2xl, border, bg-card and shadow-sm. className merges last.",
  },
  {
    name: "CardHeader",
    type: "HTMLAttributes<HTMLDivElement>",
    description: "Vertical stack for the title and description with 24px padding.",
  },
  {
    name: "CardTitle",
    type: "HTMLAttributes<HTMLHeadingElement>",
    description: "Renders an <h3> — heading level is fixed, so place it under the page's h1/h2.",
  },
  {
    name: "CardDescription",
    type: "HTMLAttributes<HTMLParagraphElement>",
    description: "Muted supporting line under the title.",
  },
  {
    name: "CardContent",
    type: "HTMLAttributes<HTMLDivElement>",
    description: "Body region — top padding removed so it sits flush under the header.",
  },
  {
    name: "CardFooter",
    type: "HTMLAttributes<HTMLDivElement>",
    description: "Row for actions, aligned with the same horizontal padding.",
  },
]

function CardPage() {
  return (
    <DocPage
      title="Card"
      intro="Surface container with header, content and footer sections — the default frame for grouped information and actions."
      demo={
        <Card className="w-full max-w-sm">
          <CardHeader>
            <div className="flex items-center justify-between gap-2">
              <CardTitle>Storage plan</CardTitle>
              <Badge variant="secondary">Team</Badge>
            </div>
            <CardDescription>64% of 500 GB used across 3 workspaces.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-2/3 rounded-full bg-brand" />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">Upgrade</Button>
            <Button size="sm" variant="ghost">
              Manage
            </Button>
          </CardFooter>
        </Card>
      }
      examples={[
        {
          title: "Card with a form",
          code: `<Card className="max-w-sm">
  <CardHeader>
    <CardTitle>Invite teammate</CardTitle>
    <CardDescription>They will receive an email invitation.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-2">
    <Label htmlFor="invite">Work email</Label>
    <Input id="invite" type="email" placeholder="teammate@acme.com" />
  </CardContent>
  <CardFooter className="gap-2">
    <Button size="sm">Send invite</Button>
  </CardFooter>
</Card>`,
          render: (
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Invite teammate</CardTitle>
                <CardDescription>They will receive an email invitation.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Label htmlFor="invite-demo">Work email</Label>
                <Input id="invite-demo" type="email" placeholder="teammate@acme.com" />
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Send invite</Button>
              </CardFooter>
            </Card>
          ),
        },
        {
          title: "Minimal card, custom sections",
          code: `<Card className="p-5">
  <p className="text-sm font-semibold">Weekly digest</p>
  <p className="mt-1 text-sm text-muted-foreground">
    Every Monday at 09:00, summarising open work.
  </p>
</Card>`,
          render: (
            <Card className="w-full max-w-xs p-5">
              <p className="text-sm font-semibold">Weekly digest</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Every Monday at 09:00, summarising open work.
              </p>
            </Card>
          ),
        },
        {
          title: "Variant surfaces",
          code: `<Card variant="interactive">
  <CardHeader>
    <CardTitle>Hoverable</CardTitle>
    <CardDescription>Lifts on hover and on focus-within.</CardDescription>
  </CardHeader>
</Card>

<Card variant="glow">…</Card>`,
          render: (
            <div className="grid w-full gap-4 sm:grid-cols-3">
              <Card variant="interactive" tabIndex={0}>
                <CardHeader>
                  <CardTitle className="text-base">Interactive</CardTitle>
                  <CardDescription>Hover or focus me.</CardDescription>
                </CardHeader>
              </Card>
              <Card variant="raised">
                <CardHeader>
                  <CardTitle className="text-base">Raised</CardTitle>
                  <CardDescription>Elevated shadow.</CardDescription>
                </CardHeader>
              </Card>
              <Card variant="glow">
                <CardHeader>
                  <CardTitle className="text-base">Glow</CardTitle>
                  <CardDescription>Brand border.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ),
        },
        {
          title: "Header + footer only",
          code: `<Card>
  <CardHeader>
    <CardTitle>Deploy #412</CardTitle>
    <CardDescription>Production · 4 minutes ago</CardDescription>
  </CardHeader>
  <CardFooter className="gap-2">
    <Badge dot variant="secondary">Passed</Badge>
    <Button size="sm" variant="outline">View logs</Button>
  </CardFooter>
</Card>`,
          render: (
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Deploy #412</CardTitle>
                <CardDescription>Production · 4 minutes ago</CardDescription>
              </CardHeader>
              <CardFooter className="gap-2">
                <Badge dot variant="secondary">
                  Passed
                </Badge>
                <Button size="sm" variant="outline">
                  View logs
                </Button>
              </CardFooter>
            </Card>
          ),
        },
      ]}
      a11y={[
        "CardTitle renders a fixed <h3> — keep heading order intact (h1 page, h2 sections, then the card title).",
        "Cards are layout only: they add no landmarks or roles. Use <section aria-labelledby> when a card needs to be identified.",
        "variant=\"interactive\" only styles hover and focus-within — it adds no role and no keyboard behaviour. Pair it with an onClick or, better, a real link/button inside.",
        "Give an interactive card tabIndex={0} only if the card itself is the control; otherwise leave it out so focus order stays on the inner action.",
        "Avoid nesting interactive cards (a card that is also a link) — put one link or button inside instead of making the whole surface clickable.",
        "Rely on real form controls inside cards; the surface itself is never focusable.",
      ]}
      props={props}
    />
  )
}
