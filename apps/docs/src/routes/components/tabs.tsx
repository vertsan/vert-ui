import { DocPage, type PropRow } from "../../components/doc-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/tabs")({
  component: TabsPage,
})

const props: PropRow[] = [
  {
    name: "value / defaultValue",
    type: "string",
    description: "Controlled or uncontrolled selected tab value.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Fires when the selection changes by click or keyboard.",
  },
  {
    name: "variant",
    type: '"line" | "pill"',
    default: '"line"',
    description: "Underline tabs or a segmented pill. Applies to list, trigger and content.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Type scale and padding of the triggers.",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Direction of the tab list (forwarded to Radix).",
  },
  {
    name: "TabsTrigger value",
    type: "string",
    required: true,
    description: "Matches the TabsContent value it controls.",
  },
  {
    name: "TabsContent value",
    type: "string",
    required: true,
    description: "Panel content; unmounted while inactive.",
  },
]

function TabsPage() {
  return (
    <DocPage
      title="Tabs"
      intro="Tabbed panels with full keyboard support. Arrow keys move and select, Home/End jump to the ends."
      demo={
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="danger">Danger zone</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            Workspace name, avatar and default language.
          </TabsContent>
          <TabsContent value="members">Invite people and manage roles.</TabsContent>
          <TabsContent value="danger">Delete the workspace and export data first.</TabsContent>
        </Tabs>
      }
      examples={[
        {
          title: "Pill variant",
          code: `<Tabs variant="pill" defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="activity">Activity</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Charts and totals.</TabsContent>
  <TabsContent value="activity">Recent events.</TabsContent>
</Tabs>`,
          render: (
            <Tabs variant="pill" defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">Charts and totals.</TabsContent>
              <TabsContent value="activity">Recent events.</TabsContent>
            </Tabs>
          ),
        },
        {
          title: "Controlled tabs",
          code: `const [tab, setTab] = useState("a")
<Tabs value={tab} onValueChange={setTab}>…</Tabs>`,
          render: (
            <Tabs defaultValue="a">
              <TabsList size="sm">
                <TabsTrigger value="a">First</TabsTrigger>
                <TabsTrigger value="b">Second</TabsTrigger>
              </TabsList>
              <TabsContent value="a">First panel.</TabsContent>
              <TabsContent value="b">Second panel.</TabsContent>
            </Tabs>
          ),
        },
      ]}
      a11y={[
        "Renders role=\"tablist\", role=\"tab\" (with aria-selected and aria-controls) and role=\"tabpanel\".",
        "The tab list is a single tab stop: Left/Right (or Up/Down when vertical) move focus and select, Home/End jump to the first/last tab.",
        "Inactive panels are unmounted, so hidden content is never reachable by screen reader.",
        "Keep each trigger label short and unique; it becomes the accessible name of the panel.",
        "Focus ring uses the ring token at 2px with an offset, and never relies on color alone.",
      ]}
    />
  )
}
