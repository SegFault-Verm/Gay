const express = require('express')
const htmlRedirect = require('../functions/redirect')

const segRouter = express.Router()

segRouter.get('/:param', async (req, res) => {
  if (req.params.param === 'favicon.ico') return

  const funDescriptions = [
    'I hope you like my image uwu',
    'owaaa~~ look at this!',
    'omg a screenshot!',
    'well, well, well, if it isn\'t a file',
    'mildly.gay & slightly.gay property of seg uwu',
    'only cool people can see this image',
    'read if cute'
  ]

  const cdnFile = `https://im.slightly.gay/${req.params.param}`

  const customMeta = `
    <title>Seg's Images</title>
    <meta name="title" content="Image">
    <meta property="og:type" content="website">
    <meta property="og:image" content="${cdnFile}">
    <meta property="og:site_name" content="(and that's  okay 🏳️‍🌈)">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${funDescriptions[Math.floor(Math.random() * funDescriptions.length)]}">
    <meta property="twitter:image" content="${cdnFile}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="${cdnFile}">
`

  const resp = await htmlRedirect({
    url: cdnFile,
    flag: 'bisexual',
    redirectTime: 1500,
    customMeta
  }, req.headers)

  res.send(resp)
})

module.exports = segRouter
