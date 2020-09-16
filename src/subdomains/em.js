const express = require('express')
const htmlRedirect = require('../functions/redirect')
const emRouter = express.Router()

emRouter.get('/', (req, res) => {
  const rebuildHead = `
        <title>Redirecting: emialis</title>
        <meta name="title" content="emialis">
        <meta name="description" content="she/they • epic gamer">
        <meta property="og:type" content="website">
        <meta property="og:title" content="emialis">
        <meta property="og:description" content="she/they • epic gamer">
        <meta property="og:image" content="https://emialis.com/images/emialis/icon.png?dim=420">
        <meta property="og:site_name" content="(and that's okay 🏳️‍🌈)">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:title" content="emialis">
        <meta property="twitter:description" content="she/they • epic gamer">
        <meta property="twitter:image" content="https://emialis.com/images/emialis/icon.png?dim=420">
        <meta name="author" content="emilia repo">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="icon" href="https://emialis.com/images/emialis/icon.png?dim=420">
    `

  res.send(htmlRedirect({
    url: 'https://emialis.com',
    flag: 'nonbinary',
    redirectTime: 3000
  }, rebuildHead))
})

module.exports = emRouter
