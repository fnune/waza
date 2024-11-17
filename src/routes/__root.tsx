import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Footer } from "~/components/layout/Footer";

export const Route = createRootRoute({
  component: () => (
    <main className="p-16">
      <Outlet />
      <hr className="my-16" />
      <Footer />
    </main>
  ),
});
