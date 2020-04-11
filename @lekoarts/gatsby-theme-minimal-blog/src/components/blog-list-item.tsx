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
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4} sx={{border: '1px solid', padding: '2rem'}}>
    <Styled.a as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
      {post.title}
    </Styled.a>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time style={{marginRight: '10px'}}> <b>Compartilhado em:</b> {post.date}</time>
      <br />
      <span>
        {post.tags && showTags && (
          <React.Fragment>          
            <b>Assunto: </b>
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
      </span>
    </p>
    <p sx={{fontFamily: '-apple-system, Helvetica, Arial, sans-serif'}}>
      {post.description}
    </p>
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
