/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import Title from "./title"
import { Box } from "@theme-ui/components"
import SEO from "./seo"

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
}

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Title text={page.title} />
    <Box mb={[2,4,3]} sx={{
      background: '#000',
      color: '#fff',
      fontFamily: '-apple-system, Helvetica, Arial, sans-serif',
      padding: '2rem',
      h5: {
        color: '#fff', 
        // opacity: 0.7,
        padding: '1rem',
        border: '2px solid',
      },
      h2: {
        color: '#fff'
      },
      h4: {
        color: '#fff'
      },
      button: {
        backgroundColor: '#fff',
        color: '#2a2a2a',
        padding: '0.5rem',
        borderColor: 'none'
      },
      a: {
        // opacity: 0.7, 
        color: '#fff',
        padding: '0.5rem',
        "&:hover": {
          cursor: 'pointer',
          backgroundColor: '#fff',
          color: '#2a2a2a',
          textDecoration: 'none',
        },        
      }
    }}>
      <MDXRenderer >{page.body}</MDXRenderer>
    </Box>
  </Layout>
)

export default Page
