<h1 align="center">
    <img alt="Slovenski" title="Slovenski" src="src/assets/icon.png" width="140"> </br>
</h1>

<h4 align="center">
  A minimal, lightweight and modern blog starter for <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>.
</h4>
<p align="center">
    <a target="_blank" href="https://app.netlify.com/sites/blogging-from-hell/deploys"><img src="https://img.shields.io/netlify/bd4d0ae4-7578-4a6a-9ca1-3359d0301206" alt="Netlify" /></a>
    <a target="_blank" href="https://travis-ci.org/slovenski/blog/builds"><img src="https://img.shields.io/travis/slovenski/blog" alt="Travis CI" /></a>
    <a target="_blank" href="https://www.codacy.com/manual/gibranduatiga/blog?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=slovenski/blog&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/f6e7d02ab48144dea73c48ed470e1b97" alt="Codacy"/></a>
    <a target="_blank" href="https://github.com/slovenski/blog/issues"><img src="https://img.shields.io/github/issues/slovenski/blog" alt="Issue" /></a>
    <a target="_blank" href="https://github.com/slovenski/blog/blob/master/LICENSE"><img src="https://img.shields.io/github/license/slovenski/blog?color=blue" alt="MIT License" /></a>    
</p>

## Table of contents
+ [Quick Start](http://github.com/slovenski/blog#quick-start)
+ [Deploy with Netlify](http://github.com/slovenski/blog#deploy-with-netlify)
+ [Folder Structure](http://github.com/slovenski/blog#folder-structure)

## Quick Start

#### Create a Gatsby site

Use the Gatsby CLI to create a new site, specifying the starter.

```sh
gatsby new blog https://github.com/slovenski/blog
```

#### Start Developing

Navigate into your new site's directory and start it up.

```sh
cd blog
gatsby build && develop -H 0.0.0.0
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

## Deploy with Netlify

[Netlify](https://netlify.com) CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

<a target="_blank" href="https://app.netlify.com/start/deploy?repository=https://github.com/slovenski/blog"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>

After clicking that button, you'll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you'll need to set up Netlify's Identity service to authorize users to log in to the CMS.

## Deploy to Github Pages

To deploy to github pages, simply do the following:

- Ensure that your `package.json` file correctly reflects where this repo lives
- Change the `pathPrefix` in your `config.js`
- Run the standard deploy command

```sh
npm run deploy
```

#### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ gatsby serve
```

## Folder Structure

```
└── content
    ├── assets
    └── posts
└── static
    ├── human.txt
    └── logo.png    
└── src
    ├── assets
    │   └── icon.png
    ├── components
    │   ├── call-out.js
    │   ├── codepen.js
    │   ├── cycle-mode.js
    │   ├── date.js
    │   ├── footer.js
    │   ├── global-header.js
    │   ├── header.js
    │   ├── post-list.js
    │   ├── profile-links.js
    │   ├── pronunciation.js
    │   ├── related-posts.js
    │   ├── seo.js
    │   └── writing-featured.js
    ├── design-system
    │   ├── blockquote.js
    │   ├── buttons.js
    │   ├── card-link.js
    │   ├── demo-source.js
    │   ├── icon.js
    │   ├── image.js
    │   ├── index.js
    │   ├── links.js
    │   ├── lists.js
    │   ├── page-header.js
    │   ├── primitives.js
    │   ├── skeletor.js
    │   ├── stack.js
    │   ├── system-functions.js
    │   └── typography.js
    ├── layouts
    │   ├── ds-to-mdx.js
    │   ├── layout.js
    │   ├── page-layout.js
    │   └── post-layout.js
    ├── pages
    │   ├── 404.js
    │   ├── index.js
    │   └── writing.js
    ├── theme
    │   ├── color-mode-styles.js
    │   ├── colors.js
    │   ├── index.js
    │   ├── prism-styles.js
    │   └── theme.js
    └── use-color-mode.js
```
