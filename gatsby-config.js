const path = require('path');
const mdxFeed = require('gatsby-plugin-mdx/feed');

module.exports = {
  siteMetadata: {
    title: `Gibran Svarga`,
    siteUrl: `https://gibransvarga.com/`,
    description: `I am Cyber Security Operation Engineer with strong focus on research, interactivity and development. I currently live in Jakarta, Indonesia and I have a job as the SecOps at{' '} <Link to="https://www.google.com/search?q=define%3Asomewhere&oq=define%3Asomewhere&aqs=chrome..69i57j69i58.309j0j7&sourceid=chrome&ie=UTF-8">somewhere</Link> that I couldn't tell you where it is. In my spare time, I like to hangout with my family, community, friends, and making life happier.`,
    author: `@gibransvarga`,
    keywords: [
      'cyber-security',
      'devsecops',
      'devops',
      'oss',
      'creative coding',
      'design systems',
      'javascript',
    ],
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-json`,
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gibransvarga.com`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#4e4bec',
        theme_color: '#4e4bec',
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-163371447-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/layouts/post-layout.js'),
        },
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1152,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1152,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `heading-anchor`,
              icon: `<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: mdxFeed,
    },
    `gatsby-plugin-netlify`,
  ],
};
