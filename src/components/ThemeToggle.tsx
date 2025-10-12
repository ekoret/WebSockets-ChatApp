import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="aspect-square w-8 flex items-center justify-center
             rounded hover:cursor-pointer"
      >
        {theme === "dark" ? (
          <Sun className="text-neutral-300 h-full w-full hover:text-amber-300 transition-colors" />
        ) : (
          <Moon className="text-neutral-300 h-full w-full hover:text-indigo-300 transition-colors" />
        )}
      </button>
    </>
  );
}
