require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `HENRIQUE SILVA DEV`,
    siteTitleAlt: `HENRIQUE SILVA DEV`,
    siteHeadline: `Henrique Silva - Dev`,
    siteUrl: `https://henriquesilva.dev`,
    siteDescription: `Sou Programador, Matemático e eterno aprendiz em busca de significado no mundo através de rascunhos de cálculo e linhas de código.`,
    siteLanguage: `pt-br`,
    siteImage: `/assets/img/logo-mind.png`,
    author: `@hhsilva`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `BLOG`,
            slug: `/blog`,
          },
          {
            title: `CURSOS`,
            slug: `/courses`,
          },
            // {
            //   title: `PARA EMPRESAS`,
            //   slug: `/for-businesses`,
            // },  
          {
            title: `SOBRE`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          // {
          //   name: `About`,
          //   target: `_blank`,
          //   url: `https://about.me/henriquesilva`,
          // },
          {
            name: ``,
            target: `_blank`,
            url: `https://github.com/henriquehsilva`,
          },
          // {
          //   name: `Instagram`,
          //   target: `_blank`,
          //   url: `https://www.instagram.com/hhdasilva/`,
          // },
          // {
          //   name: `LinkedIn`,
          //   target: `_blank`,
          //   url: `https://www.linkedin.com/in/hhdasilva/`,
          // },
          // {
          //   name: `Twitter`,
          //   target: `_blank`,
          //   url: `https://twitter.com/henriquegeek`,
          // },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henrique Silva Dev - Blog`,
        short_name: `henriquesilvadev-blog`,
        description: `Programmer, Mathematical and Lifelong Learner.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://dev.us19.list-manage.com/subscribe/post?u=65338fe69bd7e3f70bd675d53&amp;id=3cf1696e47',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
