import { Button, Card, Badge } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">vert-ui</h1>
          <p className="text-muted-foreground text-lg">
            Calm, fresh, green-accented components with soft motion. Grow with precision.
          </p>
          <div className="flex gap-3">
            <Button>Get started</Button>
            <Button variant="outline">View docs</Button>
          </div>
        </div>
        <Card className="p-6 space-y-3">
          <h2 className="text-xl font-semibold">Signature</h2>
          <p className="text-muted-foreground text-sm">
            Soft grain gradients + thin luminous emerald borders with generous radius.
          </p>
          <div className="flex gap-2">
            <Badge>minimal</Badge>
            <Badge variant="secondary">airy</Badge>
            <Badge variant="outline">natural</Badge>
          </div>
        </Card>
      </div>
    </div>
  )
}