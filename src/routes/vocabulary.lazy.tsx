import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/vocabulary")({
  component: RouteComponent,
});

function RouteComponent() {
  return null;
}
