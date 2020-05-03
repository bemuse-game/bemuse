'use strict'

const siteConfig = {
  algolia: {
    apiKey: 'a113c79cadd1ce125abb6011106af056',
    indexName: 'bemuse',
  },
  title: 'Bemuse' /* title for your website */,
  tagline: 'online, web-based rhythm game',
  url: 'https://bemuse.ninja' /* your website url */,
  baseUrl: '/project/' /* base url for your project */,
  organizationName: 'bemusic', // or set an env variable ORGANIZATION_NAME
  projectName: 'bemuse',
  headerLinks: [
    { href: 'https://bemuse.ninja', label: 'Play' },
    { doc: 'user-guide', label: 'Docs' },
    { page: 'contribute', label: 'Contribute' },
    { href: 'https://discord.gg/aB6ucmx', label: 'Discord' },
    { href: 'https://github.com/bemusic/bemuse', label: 'GitHub' },
  ],
  /* path to images for header/footer */
  headerIcon: 'img/white-logo.png',
  footerIcon: 'img/white-logo.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: 'rgb(227, 78, 122)',
    secondaryColor: 'rgb(157, 35, 60)',
    greenColor: 'rgb(145, 207, 0)',
    blueColor: 'rgb(49, 188, 250)',
  },
  /* custom fonts for website */
  fonts: {
    baseFont: ['Source Sans Pro', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' + new Date().getFullYear() + ' Bemuse Team',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300italic',
  ],
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/MathJax.js?config=TeX-AMS-MML_HTMLorMML',
  ],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/bemusic/bemuse',
  // On page navigation for the current documentation page
  onPageNav: 'separate',
}

module.exports = siteConfig
