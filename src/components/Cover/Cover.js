/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "@theme-ui/components"
import Button from "../../elements/Button"
import Particles from "react-particles-js"

export default function Cover() {
  return (
    <Flex
      sx={{
        width: "100vw",
        height: "100vh",
        // backgroundColor: "primary",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Particles
        params={{
          polygon: {
            enable: true,
            type: "inside",
            move: {
              radius: 10
            },
            url: "path/to/svg.svg"
          }
        }}
      />
      <h1>Hello, I'm Attila Polgar.</h1>
      <h2>I'm a web developer.</h2>
      <Button>Check my work</Button>
    </Flex>
  )
}
