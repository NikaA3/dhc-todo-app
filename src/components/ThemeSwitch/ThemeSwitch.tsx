import { useContext, useEffect } from "react";
import LightModeIcon from "../../assets/LightModeIcon";
import DarkModeIcon from "../../assets/DarkModeIcon";
import TodoContext from "../../context/TodoContext";

export type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(TodoContext) || {};

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme && setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme && setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme && setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme && setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="me-2 hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default ThemeSwitch;
