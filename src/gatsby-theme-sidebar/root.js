import React from 'react'
import GithubButton from './github-button'

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
        marginLeft: '250px',
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
      <img src="https://storage.cloud.google.com/henriquesilvadev/book-8.jpg" alt="book8" />
      <br /><br />
      <img src="https://storage.cloud.google.com/henriquesilvadev/book-2.png" alt="book2" />
      <br /><br />
      <img src="https://storage.cloud.google.com/henriquesilvadev/book-3.jpg" alt="book3" />
      <br /><br />
      <img src="https://storage.cloud.google.com/henriquesilvadev/book-5.png" alt="book5" />
      <br /><br />
      <img src="https://storage.cloud.google.com/henriquesilvadev/atomic-design.jpg" alt="book5" />    
    </Sidebar>
    <Content css={{ width: '60%' }}>
      {props.children}
    </Content>
    <Sidebar css={{
      backgroundColor: '#f6f6f6',
      paddingTop: '50px',
      width: '20%'
      }}>
      <img src="https://storage.cloud.google.com/henriquesilvadev/book1.jpg" alt="book1"/>
      <br /><br />
      <img src="https://storage.cloud.google.com/henriquesilvadev/book-4.png" alt="book4" />
      <br /><br />
      <img src="https://storage.cloud.google.com/henriquesilvadev/book-7.png" alt="book7" />
      <br /><br />
      <img src="https://storage.cloud.google.com/henriquesilvadev/book-6.png" alt="book6" />
    </Sidebar>

  </Main>
  {/* <Footer>
    your custom footer content
  </Footer> */}
</Layout>