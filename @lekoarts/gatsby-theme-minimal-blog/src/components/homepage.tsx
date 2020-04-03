/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import SentenceBook from "./sentence-book"
import EmailListForm from "./email-list-form"
import SpotifyPlaylist from "./spotify-playlist"

type PostsProps = {
  posts: {
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
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ mb: [4, 4, 5], p: { fontSize: [1, 2, 3], mt: 2 }, background: '#f2f2f2', color: '#2a2a2a',
          fontFamily: '-apple-system, Helvetica, Arial, sans-serif',
          padding: '2rem',}}>
        <Hero />
        <hr />
        <SentenceBook />
      </section>
      <section sx={{mb: [5,3]}}>
      <Title text="Últimas Postagens">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Demais Postagens</Link>
      </Title>
      </section>
      <Listing posts={posts} showTags={false} />
      {/* <SpotifyPlaylist uri={"https://open.spotify.com/playlist/5ggSdArYBwNDU95ePtnPYG"}/> */}
      <EmailListForm />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage
