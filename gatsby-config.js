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
    siteImage: `https://storage.cloud.google.com/staging.enduring-tea-269022.appspot.com/me.png`,
    author: `@henriquesilvadev`,
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
            title: `CATÁLOGO`,
            slug: `/courses`,
          },
          {
            title: `SOBRE`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `AGENDAR REUNIÃO`,
            target: `_blank`,
            url: `https://calendly.com/henriquesilvadev`,
          },
          {
            name: `APORTE`,
            target: `_blank`,
            url: `https://nubank.com.br/pagar/9ifs7/C6JdIWea8E`,
          },
          {
            name: `ATELIÊ`,
            target: `_blank`,
            url: `https://henriquesilvadev.slack.com`,
          },
          {
            name: `COMUNIDADE`,
            target: `_blank`,
            url: `https://join.slack.com/t/henriquesilvadev/shared_invite/zt-dczfn4xt-7J_HA1C2OLzo4aIs1S39Ww`,
          },
          {
            name: `MINHA SALA DE AULA`,
            target: `_blank`,
            url: `https://henriquesilvadev.teachable.com/p/home`,
          },
          {
            name: `SALA DE REUNIÃO`,
            target: `_blank`,
            url: `https://zoom.us/j/7512795114?pwd=dTNiQ2kzNmgrZFE3aTJrZEJndk54QT09`,
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
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
