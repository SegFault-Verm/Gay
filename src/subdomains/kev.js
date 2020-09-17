const express = require('express')
const htmlRedirect = require('../functions/redirect')
const kevRouter = express.Router()

kevRouter.get('/', async (req, res) => {
  const resp = await htmlRedirect({
    url: 'https://steamcommunity.com/id/kevin1x',
    flag: 'lgbt'
  }, req.headers)

  res.send(resp)
})

module.exports = kevRouter
