import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  console.log("theme", resolvedTheme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      size={"xs"}
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
      colorScheme={resolvedTheme === "dark" ? "purple" : "yellow"}
      className="mr-1"
    >
      {resolvedTheme === "dark" ? "🌙" : "☀️"}
    </Button>
  );
};

export default ThemeButton;
