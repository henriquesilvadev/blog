/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [5],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
        backgroundColor: '#fafbfc',
        border: '1px solid',
        position: 'fixed-bottom',
        padding: '20px 100px 25px 80px',
        width: '100%',
        top: 0,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} {siteTitle}. Todos os Direitos Resevados.
      </div>

      <a href="https://www.facebook.com/hsilvadev" target="_blank">Facebook</a>
      <a href="https://github.com/henriquesilvadev" target="_blank">GitHub</a>
      <a href="https://www.instagram.com/hsilvadev/" target="_blank">Instagram</a>
      <a href="https://www.linkedin.com/company/henriquesilvadev" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/dev_henrique" target="_blank">Twitter</a>
      <a href="https://www.youtube.com/channel/UCSi18AMnRETZoNSQrOwwaOw" target="_blank">YouTube</a>
      <a href="https://soundcloud.com/henrique-silva-dev" target="_blank">SoundCloud</a>   

      {/* <div>
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          Theme
        </Styled.a>
        {` `}
        by
        {` `}
        <Styled.a aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          LekoArts
        </Styled.a>
      </div> */}
    </footer>
  )
}

export default Footer
