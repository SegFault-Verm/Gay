const express = require('express')
const htmlRedirect = require('../functions/redirect')
const emRouter = express.Router()

emRouter.get('/', async (req, res) => {
  const resp = await htmlRedirect({
    url: 'https://emialis.com',
    flag: 'nonbinary'
  }, req.headers)

  res.send(resp)
})

module.exports = emRouter
