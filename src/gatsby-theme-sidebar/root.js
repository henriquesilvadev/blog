import React from 'react'
import GithubButton from './github-button'
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
  
  <Layout css={{ fontFamily: "-apple-system, Helvetica, Arial, sans-serif"}}>
  <Header css={{ backgroundColor: '#fff', border: '1px solid'}}>
    <img src='/assets/img/logo-4.jpg' alt='Logo' />
    <nav 
      css={{ 
        alignItems: `center`, 
        justifyContent: `space-between`, 
        marginLeft: '180px',
      }}>
      <GithubButton />
    </nav>
  </Header>
  <Main>
    <Sidebar css={{
      backgroundColor: '#f6f6f6',
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
      backgroundColor: '#f6f6f6',
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
  {/* <Footer>
    your custom footer content
  </Footer> */}
</Layout>