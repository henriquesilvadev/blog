/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "./item-tags"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead: number
    banner?: string
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={[2,4,3]} sx={{backgroundColor: '#F2F2F2', color: '#2A2A2A', fontFamily: '-apple-system, Helvetica, Arial, sans-serif',
  padding: '2rem'}}>

    <Styled.a as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], color: '#2a2a2a' }}>
      <b>{post.title}</b> 
      </Styled.a>     
      <br />
      <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: '15px' }}>    

      <time style={{marginRight: '10px'}}> <b>Compartilhado em:</b> {post.date}</time>
      <br />
      <span>
        {post.tags && showTags && (
          <React.Fragment>          
            <b>Habilidades Desenvolvidas: </b>
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
      </span>
    </p> 
    <p>
      {post.description}
    </p>
    {/* <Styled.a as={Link} to={post.slug} sx={{ fontSize: [1], color: '#b7b3b3', border: '1px solid #b7b3b3', padding: '0.3rem'}}>
      
    </Styled.a>    */}
    <Styled.a 
    as={Link} 
    to={post.slug}
    sx={{ 
      display: 'inline-block',
      border: 'none',
      margin: '2px',
      backgroundImage: 'none',
      backgroundColor: '#000000',
      color: '#ffffff',
      letterSpacing: '1px',
      transaction: 'all 0.1s linear',
      padding: '0.7rem 1rem',
      "&:hover": {
        cursor: 'pointer',
        backgroundColor: '#4c4c46',
        textDecoration: 'none',
      },      
    }}>Leia mais</Styled.a>   
  </Box>
)

export default BlogListItem
