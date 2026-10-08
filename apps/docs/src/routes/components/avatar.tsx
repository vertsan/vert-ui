import { DocPage, type PropRow } from "../../components/doc-page"
import { Avatar, AvatarFallback, AvatarImage } from "@vert-ui/ui"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/avatar")({
  component: AvatarPage,
})

const props: PropRow[] = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Diameter of the avatar (8, 10 and 12 = 32/40/48px).",
  },
  {
    name: "variant",
    type: '"default" | "brand" | "surface"',
    default: '"default"',
    description: "Background used before an image loads and behind initials.",
  },
  {
    name: "AvatarImage src / alt",
    type: "string",
    description: "Rendered only after the image loads; alt becomes the accessible name.",
  },
  {
    name: "AvatarFallback",
    type: "ReactNode",
    description: "Initials or icon shown while (or when) no image is available.",
  },
  {
    name: "className",
    type: "string",
    description: "Merged last, so you can override size or rounding.",
  },
]

function AvatarPage() {
  return (
    <DocPage
      title="Avatar"
      intro="Image with an initials fallback that keeps layout stable while it loads. The image is only mounted once it is ready, so there is no flash or shift."
      demo={
        <div className="flex flex-wrap items-center gap-4">
          <Avatar size="sm">
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/avatar.png" alt="Jane Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar size="lg" variant="brand">
            <AvatarFallback>MP</AvatarFallback>
          </Avatar>
        </div>
      }
      examples={[
        {
          title: "In a list row",
          code: `<div className="flex items-center gap-3">
  <Avatar size="sm">
    <AvatarImage src={user.avatarUrl} alt="" />
    <AvatarFallback>{initials(user.name)}</AvatarFallback>
  </Avatar>
  <span>{user.name}</span>
</div>`,
          render: (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <span className="text-sm">Ada K.</span>
            </div>
          ),
        },
        {
          title: "Grouped avatars",
          code: `<div className="flex -space-x-2">
  {team.map((member) => (
    <Avatar key={member.id} className="ring-2 ring-card">
      <AvatarImage src={member.avatarUrl} alt="" />
      <AvatarFallback>{initials(member.name)}</AvatarFallback>
    </Avatar>
  ))}
</div>`,
          render: (
            <div className="flex -space-x-2">
              <Avatar size="sm" className="ring-2 ring-card">
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <Avatar size="sm" className="ring-2 ring-card">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar size="sm" className="ring-2 ring-card">
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
            </div>
          ),
        },
      ]}
      a11y={[
        "Pass alt on AvatarImage so the image carries its own name; use alt=\"\" when adjacent text already names the person.",
        "The fallback renders text (initials), so the avatar is never an empty box for screen readers.",
        "The root is presentational — it has no implicit role, so it will not be announced as a widget.",
        "Sizes are fixed, so swapping image for initials causes no layout shift.",
      ]}
      props={props}
    />
  )
}
