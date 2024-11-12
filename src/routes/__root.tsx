import { Outlet, createRootRoute } from "@tanstack/react-router";

import { Navigation } from "~/components/layout/Navigation";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <hr />
      <Outlet />
    </>
  ),
});
