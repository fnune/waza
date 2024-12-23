import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) throw new Error("Failed to find #root element");

createRoot(root).render(<App />);
