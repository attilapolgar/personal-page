/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import Button from "../../elements/Button";
import { Label, Radio } from "@theme-ui/components";

function ThemeSwitch() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Button
      sx={{
        variant: "buttons.primary",
        position: "fixed",
        top: 10,
        right: 10
      }}
      onClick={e => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      }}
    >
      {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
}

export default ThemeSwitch;
