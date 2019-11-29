import React from "react"
import { useThemeUI } from "theme-ui"
import { Helmet } from "react-helmet"

function Header() {
  const { theme } = useThemeUI()
  return (
    <Helmet>
      <meta name="theme-color" content={theme.colors.background} />
    </Helmet>
  )
}

export default Header
