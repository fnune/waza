import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree, basepath: __BASE_PATH__ });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} defaultPendingMinMs={0} />
    </StrictMode>
  );
}

export default App;
