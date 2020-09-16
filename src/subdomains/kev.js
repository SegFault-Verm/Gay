const express = require('express')
const htmlRedirect = require('../functions/redirect')
const kevRouter = express.Router()

kevRouter.get('/', (req, res) => {
  const rebuildHead = `
        <title>Redirecting: kevin</title>
        <meta name="twitter:card" content="summary">
        <meta name="Description" content="hello">
        <meta name="twitter:site" content="@steam" />
        <meta property="og:title" content="Steam Community :: Kevin">
        <meta property="og:site_name" content="(and that's  okay 🏳️‍🌈)">
        <meta property="twitter:title" content="Steam Community :: Kevin">
        <meta property="og:type" content="website">
        <meta property="fb:app_id" content="105386699540688">
        <meta property="og:description" content="hello">
        <meta property="twitter:description" content="hello">
        <link rel="image_src" href="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e9/e938c06c84abff3633f1eef75f83f950504d1a88_full.jpg">
        <link rel="image_src" href="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e9/e938c06c84abff3633f1eef75f83f950504d1a88_full.jpg">
        <meta property="og:image" content="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e9/e938c06c84abff3633f1eef75f83f950504d1a88_full.jpg">
        <meta name="twitter:image" content="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e9/e938c06c84abff3633f1eef75f83f950504d1a88_full.jpg" />
    `

  res.send(htmlRedirect({
    url: 'https://steamcommunity.com/id/kevin1x',
    flag: 'lgbt',
    redirectTime: 3000
  }, rebuildHead))
})

module.exports = kevRouter
