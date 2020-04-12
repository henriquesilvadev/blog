/** @jsx jsx*/
import { jsx, Styled } from 'theme-ui'
import Title from './title'
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import Navigation from "./navigation"
import { Flex, Box } from "@theme-ui/components"

const ForBusinesses = () => {
  const { siteTitle } = useSiteMetadata()
  const { navigation: nav, externalLinks, basePath } = useMinimalBlogConfig()

  return (
    <section
      sx={{ 
        a: {
          display: 'inline-block',
          border: 'none',
          margin: '2px',
          backgroundImage: 'none',
          backgroundColor: '#000000',
          color: '#ffffff',
          letterSpacing: '1px',
          transaction: 'all 0.1s linear',
          padding: '0.7rem 1rem',
          textDecoration: 'none',
          "&:hover": {
            cursor: 'pointer',
            backgroundColor: '#4c4c46',
            textDecoration: 'none',
          },
        },      
      }}>
      <Title text="Para Empresas" />
      <Box mb={4} sx={{border: '1px solid', padding: '2rem'}}>
        <b>MISSÃO</b>
        <hr />  
        Prestar Consultoria de modo a maximizar a produtividade das equipes e desenvolvimento,
        encontrando as melhores e mais elegantes formas de programar, bem como ajudar outros a 
        fazerem o mesmo.
        <br /><br />

        <b>VISÂO</b>
        <hr />  
        Espero poder entender os padrões do bom design de software e também os 
        melhores processos que os dão suporte. 
        <br /><br />
        
        <a href="https://agilemanifesto.org/iso/ptbr/manifesto.html">Manifesto para Desenvolvimento Ágil de Software</a>
        <a href="https://agilemanifesto.org/iso/ptbr/principles.html">Princípios do Software Ágil</a>

        <br /><br />

        <b>VALORES</b>
        <hr />  
        <ul>
          <li>Comprometimento com a entrega de resultatos.</li>
          <li>Ética profissional e social.</li>
          <li>Espirito de equipe.</li>
          <li>Gestão eficiente e compartilhada.</li>
        </ul>
        <hr />
        <section>
          <a href="/about">SOBRE MIM</a>        
          <a href="https://calendly.com/henriquesilvadev/work">MINHA AGENDA</a>
          <a href="https://join.slack.com/t/henriquesilvadev/shared_invite/zt-dczfn4xt-7J_HA1C2OLzo4aIs1S39Ww">MEU LOCAL DE TRABALHO</a>
          <hr />
          <a href="me/hhsilva">Meu Telegram</a>
          <a href="https://api.whatsapp.com/send?phone=+5562985849729">Meu WhatsApp</a>
          <a href="mailto://contato@henriquesilva.dev">E-mail: contato@henriquesilva.dev</a>
          
        </section>
      </Box>
    </section>      
  )
}

export default ForBusinesses