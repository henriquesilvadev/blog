import React from "react"
import { Global } from "@emotion/core"
import { Main, Styled, Container, css } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"

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
            position: 'flex-wrap',
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
            a: {
              height: 'auto',
              padding: '40px 0',
              color: '#fff',
              fontSize: '20px',
              textAlign: 'center',
              // border-radius:4px;
              // border:1px solid #980021;
              // box-shadow: inset 0 2px 3px 0 rgba(255,255,255,.3), inset 0 -3px 6px 0 rgba(0,0,0,.2), 0 3px 2px 0 rgba(0,0,0,.2);
              // background-image: linear-gradient(to bottom, #cf2b4f, #980021 130%);
            },
          },
        })}
      />
      <SEO />
      <SkipNavLink>Skip to content</SkipNavLink>
      <Container>
        <Header />
        <Main id="skip-nav" css={css({ ...CodeStyles })} className={className} sx={{ marginTop: '200px'}}>
          {children}
        </Main>
        <Footer />
      </Container>
    </Styled.root>
  )
}

export default Layout
