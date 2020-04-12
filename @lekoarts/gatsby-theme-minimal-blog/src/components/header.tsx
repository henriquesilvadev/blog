/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import Navigation from "./navigation"
import replaceSlashes from "../utils/replaceSlashes"
import Title from "./title"
import Hero from "./hero"

const Header = () => {
  const { siteTitle } = useSiteMetadata()
  const { navigation: nav, externalLinks, basePath } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header       
    sx={{ 
      mb: [3, 4],
      backgroundColor: '#fafbfc',
      border: '1px solid',
      display: 'fixed',
      padding: '2rem',
      top: 0,
    }}>
      <br />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        {/* <Link
          to={replaceSlashes(`/${basePath}`)}
          aria-label={`${siteTitle} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}>
          <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: '30px' }}>
          <img src='/assets/img/logo-henriquesilva-dev.jpg' sx={{ width: '50px'}} />
          {siteTitle}
          </h1>
        </Link>  */}
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 4,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        {externalLinks && externalLinks.length > 0 && (
          <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
            {externalLinks.map(link => (
              <Styled.a key={link.url} href={link.url}>
                {link.name}
              </Styled.a>
            ))}           
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
