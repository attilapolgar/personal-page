/** @jsx jsx */
import { jsx } from "theme-ui"

import { ThemeProvider, ColorMode } from "theme-ui"
import { Grid, Link } from "@theme-ui/components"

import appTheme from "./theme"
import Project from "./components/Project"
import ThemeSwitch from "./components/ThemeSwitch"
import data from "./data"
import Header from "./components/Header"
import Button from "./elements/Button"

function App() {
  const projects = data.workplaces.map(wp => wp.projects).flat()
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <ColorMode />
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          variant: "layout.root"
        }}
      >
        <header
          sx={{
            width: "100%",
            diplay: "flex",
            alignItems: "center",
            variant: "layout.header"
          }}
        >
          <ThemeSwitch />
        </header>
        <main
          sx={{
            width: "100%",
            flex: "1 1 auto",
            variant: "layout.main"
          }}
        >
          <div
            sx={{
              maxWidth: 768,
              mx: "auto",
              px: 3,
              variant: "layout.container"
            }}
          >
            <Button variant="primary">primary</Button>
            <Button variant="secondary">secondary</Button>
            <Grid gap={2} columns={[2, null, 4]}>
              {projects.map(project => (
                <Project key={project.id} {...project} />
              ))}
            </Grid>
          </div>
        </main>
        <footer
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            p: 2,
            variant: "styles.footer"
          }}
        >
          <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
            Home
          </Link>
          <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
            Blog
          </Link>
          <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
            About
          </Link>
          <div sx={{ mx: "auto" }} />
          <div sx={{ p: 2 }}>© 2019 Attila Polgar</div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
