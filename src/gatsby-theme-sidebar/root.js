import React from 'react'
import Search from './search'
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
    <img src='/assets/img/logo-2.jpg' alt='Logo' />
    <h2 sx={{ my: 0, fontWeight: `medium`, fontSize: '30px' }}>
      HENRIQUE SILVA DEV
    </h2>
    <Search />
    <nav css={{ marginLeft: '100px', alignItems: `center`, justifyContent: `space-between` }}>
      <GithubButton />
    </nav>
  </Header>
  <Main>
    <Sidebar css={{
      backgroundColor: '#f6f6f6',
      paddingTop: '50px',
      width: '20%'
      }}>                
      <img src="../assets/img/book-8.jpg" alt="book8" />
      <br /><br />
      <img src="../assets/img/book-2.png" alt="book2" />
      <br /><br />
      <img src="../assets/img/book-3.png" alt="book3" />
      <br /><br />
      <img src="../assets/img/book-5.png" alt="book5" />
    </Sidebar>
    <Content css={{ width: '60%' }}>
      {props.children}
    </Content>
    <Sidebar css={{
      backgroundColor: '#f6f6f6',
      paddingTop: '50px',
      width: '20%'
      }}>                
      <img src="../assets/img/book1.jpg" alt="book1" />
      <br /><br />
      <img src="../assets/img/book-4.png" alt="book4" />
      <br /><br />
      <img src="../assets/img/book-7.png" alt="book7" />
      <br /><br />
      <img src="../assets/img/book-6.png" alt="book6" />
    </Sidebar>

  </Main>
  {/* <Footer>
    your custom footer content
  </Footer> */}
</Layout>