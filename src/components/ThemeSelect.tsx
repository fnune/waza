import { SunMoon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function ThemeSelect() {
  const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme"));

  const onSetTheme = useCallback(
    (theme: string | null) => () => {
      setTheme(theme);
    },
    [],
  );

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.removeItem("theme");
    }

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, [theme]);

  return (
    <ul className="flex items-center justify-center gap-2">
      <SunMoon size={20} />
      {(
        [
          ["System", null],
          ["Dark", "dark"],
          ["Light", "light"],
        ] as [string, string | null][]
      ).map(([label, value]) => (
        <button
          key={label}
          type="button"
          style={{ textDecoration: value === theme ? "underline" : "none" }}
          onClick={onSetTheme(value)}
        >
          {label}
        </button>
      ))}
    </ul>
  );
}
