import React from 'react'
import GithubButton from './github-button'
import GithubCorner from 'react-github-corner'

// import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

// const { basePath } = useMinimalBlogConfig()

export default ({
  Layout,
  Header,
  Main,
  Sidebar,
  Content,
  Footer,
  ...props
}) =>
  
  <Layout>
  <Header css={{ 
    backgroundColor: '#fff',
    fontFamily: ' WeblySleek UI, Segoe UI, Helvetica',
    transition: 'all .3s ease-in',
    border: '1px solid #ccc',
    paddingRight: 0,
    maxHeight: '340px',}}>

    <img src='/assets/img/logo-4.jpg' alt='Logo' css={{ widht: '80%', margin: '5px'}} />
    <nav 
      css={{ 
        alignItems: `center`, 
        justifyContent: `space-between`, 
        marginLeft: '180px',
      }}>
      <GithubButton />
    </nav>
    <GithubCorner href="https://github.com/henriquesilvadev" size='80' bannerColor='#000' octoColor='#fff' />
  </Header>
  <Main css={{ backgroundColor: "#f2f2f2"}}>
    <Sidebar css={{      
      paddingTop: '50px',
      width: '20%'
      }}>                
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864978/henriquesilva.dev/book-8_czauth.jpg" alt="book8" />
      <br /><br />
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864990/henriquesilva.dev/book-2_pfqtcl.png" alt="book2" />
      <br /><br />
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864986/henriquesilva.dev/book-3_onxkbz.png" alt="book3" />
      <br /><br />
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864986/henriquesilva.dev/book-5_ipmqng.png" alt="book5" />
      <br /><br />
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864933/henriquesilva.dev/atomic-design_y8kp0s.jpg" alt="atomic-design" />    
      <br /><br />
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864933/henriquesilva.dev/html-css-book_s4c18u.jpg" alt="html-css" />
    </Sidebar>
    <Content css={{ width: '60%' }}>
      {props.children}
    </Content>
    <Sidebar css={{
      paddingTop: '50px',
      width: '20%'
      }}>
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864996/henriquesilva.dev/book1_s4ddss.jpg" alt="book1"/>
      <br /><br />
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864986/henriquesilva.dev/book-4_m6mrgq.png" alt="book4" />
      <br /><br />
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864978/henriquesilva.dev/book-7_erpzoq.png" alt="book7" />
      <br /><br />
      <img src="https://res.cloudinary.com/henrique-silva-dev/image/upload/v1586864984/henriquesilva.dev/book-6_q0yq4e.png" alt="book6" />
    </Sidebar>
  </Main>
  <Footer css={{ a: { color: '#fff', marginRight: '10px', textDecoration: 'none'}, 'a:hover': { fontWeight: 'bold'} , backgroundColor: '#000', color: '#fff', padding: '2rem' }}>
    &copy; {new Date().getFullYear()} HENRIQUE SILVA DEV - MEI / CNPJ 36.349.019/0001-95. Todos os Direitos Resevados.
    <hr />
    <a href='/about'>Sobre</a>
    <a href='https://www.facebook.com/hsilvadev/'>Facebook</a>
    <a href='https://www.instagram.com/henriquesilva_dev'>Instagram</a>
    <a href='https://www.linkedin.com/company/henriquesilvadev'>LinkedIn</a>
    <a href='https://twitter.com/dev_henrique'>Twitter</a>
    <a href='https://www.youtube.com/channel/UCSi18AMnRETZoNSQrOwwaOw'>Youtube</a>
    <a href='https://soundcloud.com/henrique-silva-dev'>SoundCloud</a>    
  </Footer>
</Layout>