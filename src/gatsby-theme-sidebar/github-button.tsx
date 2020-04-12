/** @jsx jsx */
import { jsx } from "theme-ui"

const navlinks = [
  { title: 'HOME', url: '/' },
  { title: 'APORTE', url: 'https://nubank.com.br/pagar/9ifs7/C6JdIWea8E' },
  { title: 'BLOG', url: '/blog' },
  { title: 'SALA DE AULA', url: 'https://henriquesilvadev.teachable.com/p/home' },
  // { title: 'SOBRE', url: '/about' },
]
{/* <a href="https://www.facebook.com/hsilvadev" target="_blank">Facebook</a>
<a href="https://github.com/henriquesilvadev" target="_blank">GitHub</a>
<a href="https://www.instagram.com/hsilvadev/" target="_blank">Instagram</a>
<a href="https://www.linkedin.com/company/henriquesilvadev" target="_blank">LinkedIn</a>
<a href="https://twitter.com/dev_henrique" target="_blank">Twitter</a>
<a href="https://www.youtube.com/channel/UCSi18AMnRETZoNSQrOwwaOw" target="_blank">YouTube</a>
<a href="https://soundcloud.com/henrique-silva-dev" target="_blank">SoundCloud</a> */}

const GitHubButton = () => {
  return (
      (navlinks.map((link, index) => (
        <a 
          sx={{ 
            fontSize: 18, 
            padding: '0.5rem', 
            textDecoration: 'none',
            '&:hover':{
              fontWeight: 'bold',
            }    
          }} href={link.url} target="_blank" alt={link.title}>
          {link.title}
        </a>  
      ))
    )
  )
}

export default GitHubButton
