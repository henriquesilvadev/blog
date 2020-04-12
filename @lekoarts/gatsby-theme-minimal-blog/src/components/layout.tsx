import React from "react"
import { Global } from "@emotion/core"
import { Main, Styled, Container, css } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"
import { Sidebar } from "gatsby-theme-sidebar"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => {

  return (
    <Styled.root data-testid="theme-root">
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            // position: 'flex',
            margin: 0,
            // marginTop: '250px',
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `white`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
          p: { 
            img: {
              width: '100%',
            },
          },
          form: {
            display: 'flex',
            flexDirection: 'column',
            background: '#f2f2f2',
            color: '#2a2a2a',
            fontFamily: '-apple-system, Helvetica, Arial, sans-serif',
            padding: '2rem',
            h2: {
              marginTop: 0,
              marginBottom: '1rem',
            },
            div: {
              display: 'flex',
              flexDirection: 'row',
            },
            input: {
              color: '#2a2a2a',
              width: '100%',
              border: 'none',
              margin: '1.5px',
              padding: '1rem 1.5rem',
            },
          },
        })}
      />
      <SEO />
      <SkipNavLink>Skip to content</SkipNavLink>
        <Container>
          {/* <Header /> */}
          <Main id="skip-nav" css={css({ ...CodeStyles })} className={className} sx={{ marginTop: '200px'}}>
            {children}
          </Main>
          <Footer />
        </Container>
    </Styled.root>
  )
}

export default Layout
