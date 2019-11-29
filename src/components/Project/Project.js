/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Badge, Divider, Message } from "@theme-ui/components"

export default function({ name, description, technologies }) {
  return (
    <Box p={4}>
      <h1>{name}</h1>
      <Message>{description}</Message>
      <Divider />
      {technologies.map(tech => (
        <Badge variant="outline" ml={1}>
          {tech}
        </Badge>
      ))}
    </Box>
  )
}
