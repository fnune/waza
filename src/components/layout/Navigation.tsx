import { Link } from "@tanstack/react-router";

export function Navigation() {
  return (
    <div className="flex gap-2 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/vocabulary" className="[&.active]:font-bold">
        Vocabulary
      </Link>
    </div>
  );
}
