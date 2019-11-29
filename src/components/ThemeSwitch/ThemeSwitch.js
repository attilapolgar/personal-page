/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
import Button from "../../elements/Button"

function ThemeSwitch() {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Button
      sx={{ variant: "buttons.primary" }}
      onClick={e => {
        setColorMode(colorMode === "light" ? "dark" : "light")
      }}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  )
}

export default ThemeSwitch
