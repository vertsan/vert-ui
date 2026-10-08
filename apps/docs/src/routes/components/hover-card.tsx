import { DocPage, type PropRow } from "../../components/doc-page"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/hover-card")({
  component: HoverCardPage,
})

const props: PropRow[] = [
  {
    name: "HoverCard open / onOpenChange",
    type: "boolean / (open: boolean) => void",
    description: "Controlled open state — hover opens it, blur and Escape close it.",
  },
  {
    name: "HoverCard openDelay / closeDelay",
    type: "number",
    default: "700 / 300",
    description: "Milliseconds before the card opens or closes after pointer movement.",
  },
  {
    name: "HoverCardTrigger asChild",
    type: "boolean",
    description: "Uses your own element as the trigger (Radix Slot).",
  },
  {
    name: "HoverCardContent side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"bottom"',
    description: "Preferred side of the trigger; flips when there is no room.",
  },
  {
    name: "HoverCardContent align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the card against the trigger edge.",
  },
  {
    name: "HoverCardContent sideOffset",
    type: "number",
    default: "6",
    description: "Gap in pixels between trigger and card.",
  },
  {
    name: "HoverCardContent className",
    type: "string",
    description: "Merged last — override width, padding or content.",
  },
]

function HoverCardPage() {
  return (
    <DocPage
      title="Hover Card"
      intro="Hover-revealed detail panel anchored to a trigger. Built for profiles and contextual previews where clicking would interrupt the flow — a Dialog is still the right tool for anything interactive."
      demo={
        <HoverCard>
          <HoverCardTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-3 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-4 text-sm font-medium shadow-soft outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Avatar size="sm">
                <AvatarImage src="/avatar.png" alt="" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              Ada K.
            </button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex gap-4">
              <Avatar size="lg">
                <AvatarImage src="/avatar.png" alt="" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">@adak</p>
                <p className="text-sm text-muted-foreground">
                  Design engineer working on tokens, motion and documentation systems.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      }
      examples={[
        {
          title: "Profile preview",
          code: `<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/u/adak" className="font-medium hover:underline">
      {user.name}
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-4">
      <Avatar size="lg">
        <AvatarImage src={user.avatarUrl} alt="" />
        <AvatarFallback>{initials(user.name)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">{user.handle}</p>
        <p className="text-sm text-muted-foreground">{user.bio}</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`,
          render: (
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="#profile"
                  className="rounded-sm text-sm font-medium text-brand outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                >
                  @adak
                </a>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-1">
                  <p className="text-sm font-semibold">Ada K.</p>
                  <p className="text-sm text-muted-foreground">
                    Design engineer working on tokens and motion.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ),
        },
        {
          title: "Placement and delay",
          code: `<HoverCard openDelay={150} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent side="top" align="start" sideOffset={8}>
    <p className="text-sm">Shown above and left-aligned after 150ms.</p>
  </HoverCardContent>
</HoverCard>`,
          render: (
            <HoverCard openDelay={150} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </HoverCardTrigger>
              <HoverCardContent side="top" align="start" sideOffset={8}>
                <p className="text-sm">Shown above and left-aligned after 150ms.</p>
              </HoverCardContent>
            </HoverCard>
          ),
        },
      ]}
      a11y={[
        "The card opens on hover and on keyboard focus of the trigger, so it is reachable without a pointer.",
        "Escape closes the card and focus stays on the trigger.",
        "Use a real link or button as the trigger — the card supplements it, it never replaces the trigger's own name or role.",
        "Hover cards are not for content users must act on: keep anything essential visible without hovering, and use a Dialog for interactive content.",
        "The content is rendered in a portal with a heading-free layout — give it a readable structure (name, then description).",
        "Pointer users get a delay before it opens, avoiding flicker while the cursor crosses the page.",
      ]}
      props={props}
    />
  )
}
