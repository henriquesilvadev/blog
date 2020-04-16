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
import SoundCloudPlayer from "./soundcloud-player"
import ForBusinesses from "./for_businesses"
import WidgetUser from "./widget-user"

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
      <SoundCloudPlayer />
      <section sx={{ mb: [5 , 4, 5], p: { fontSize: [1, 2, 3], mt: 2 },
          fontFamily: '-apple-system, Helvetica, Arial, sans-serif',
          padding: '2rem', border: '1px solid'}}>
        <Hero />
        <hr />
        <SentenceBook />
      </section>
      {/* <WidgetUser username='henriquehsilva' /> */}
      <ForBusinesses />
      <section sx={{mb: [3]}}>
      <Title text="Últimas Postagens">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Demais Postagens</Link>
      </Title>
      </section>
      <Listing posts={posts} showTags={false} />      
      <EmailListForm />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage
