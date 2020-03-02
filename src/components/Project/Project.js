/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Badge, Divider } from "@theme-ui/components"

export default function({ name, description, technologies }) {
  return (
    <Box
      sx={{
        p: 3,
        border: "primary"
      }}
    >
      <h1>{name}</h1>
      <div>{description}</div>
      <Divider />
      {technologies.map(tech => (
        <Badge variant="outline" ml={1}>
          {tech}
        </Badge>
      ))}
    </Box>
  )
}
