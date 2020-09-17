const segRouter = require('./subdomains/seg')
const express = require('express')
const htmlRedirect = require('./functions/redirect')

const genRouter = (options) => {
  const tmpRouter = express.Router()
  tmpRouter.get('/', async (req, res) => {
    const resp = await htmlRedirect(options, req.headers)
    res.send(resp)
  })
  return tmpRouter
}

const subdomains = [
  {
    alias: ['segs', 'seg.is'],
    router: segRouter
  },
  {
    alias: ['emialis.is', 'em.is', 'ems'],
    router: genRouter({ url: 'https://emialis.com', flag: 'nonbinary' })
  },
  {
    alias: ['kevs'],
    router: genRouter({ url: 'https://steamcommunity.com/id/kevin1x', flag: 'lgbt' })
  },
  {
    alias: ['vchamps'],
    router: genRouter({ url: 'https://twitter.com/v_championssr', flag: 'bisexual' })
  },
  {
    alias: ['magiks', 'magik.is', 'magikmanz.is', 'magikmanz'],
    router: genRouter({ url: 'https://www.magikmanz.com/', flag: 'lgbt' })
  }
]

module.exports = subdomains
