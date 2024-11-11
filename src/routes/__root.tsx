import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { DatabaseProvider } from "~/services/database";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/vocabulary" className="[&.active]:font-bold">
          Vocabulary
        </Link>
      </div>
      <hr />
      <DatabaseProvider>
        <Outlet />
      </DatabaseProvider>
    </>
  ),
});
