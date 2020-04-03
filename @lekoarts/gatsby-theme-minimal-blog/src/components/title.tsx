/** @jsx jsx */
import React from "react"
import { jsx, useColorMode } from "theme-ui"
import { Box } from "@theme-ui/components"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"

type TitleProps = {
  children?: React.ReactNode
  as?: string
  className?: string
  text: string
}

const iconRenderSwitch = (param) => {
  switch(param) {
    case 'Últimas Postagens':
      return 'typing-machine.png';
    case 'Inscreva-se em nossa newsletter':
      return 'mailbox.png';
    case 'Todas as Postagens':
      return 'archive.png';
    case 'Sobre':
      return 'about.png';      
    case 'Para Empresas':
      return 'business-climb.png';      
    case 'Cursos':
      return 'mind.png';       

    default:
      return 'Subscribe';
  }
}

const Title = ({ text, children, as = `h2`, className }: TitleProps) => {
  const { basePath } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <div
      sx={{
        justifyContent: `space-between`,
        alignItems: `center`,
        borderBottomStyle: `solid`,
        borderBottomWidth: `1px`,
        borderBottomColor: `divide`,
        pb: 3,
        mb: 4,
        flexFlow: `wrap`,
        boxSizing: `border-box`,
        display: `flex`,
      }}
    >
      <Box
        as={as}
        sx={{ fontWeight: `medium`, fontSize: [3, 5], fontFamily: `heading`, lineHeight: `heading`, color: `heading` }}
        className={className}
      >
        <img src={`${basePath}assets/icons/${(isDark ?  'light-' : '') + iconRenderSwitch(text)}`} alt={text} sx={{width: '40px', marginRight: '10px'}} />
        {text}
      </Box>
      <div
        sx={{
          color: `secondary`,
          a: {
            variant: `links.secondary`,
          },
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Title
