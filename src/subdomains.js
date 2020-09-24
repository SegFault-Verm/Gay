const segRouter = require('./subdomains/seg')
const express = require('express')
const htmlRedirect = require('./functions/redirect')

/**
 * Creates an individual express router which catches all requests to / and redirects to the given site.
 * @param options A set of options to be passed to htmlRedirect.
 * @param options.url The url to redirect to.
 * @param options.flag (optional) - The pride flag to use as the background (http://barchok.com/flags.html)
 * @param {number} options.redirectTime (optional, default 3s) - The amount of time to wait before redirecting.
 * @param options.customMeta - (optional) - A string of meta tags to inject manually. This will skip the process of fetching meta tags from the target site. Can technically be any <head> code.
 * @return An express router.
*/
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
    alias: ['segs', 'seg.is', 'segfault.is'],
    router: segRouter
  },
  {
    alias: ['emialis.is', 'em.is', 'ems'],
    router: genRouter({ url: 'https://emialis.com', flag: 'nonbinary' })
  },
  {
    alias: ['kevs', 'kev.is'],
    router: genRouter({ url: 'https://steamcommunity.com/id/kevin1x', flag: 'lgbt' })
  },
  {
    alias: ['vchamps', 'vchamp.is'],
    router: genRouter({ url: 'https://twitter.com/v_championssr', flag: 'bisexual' })
  },
  {
    alias: ['magiks', 'magik.is', 'magikmanz.is', 'magikmanz'],
    router: genRouter({ url: 'https://www.magikmanz.com/', flag: 'lgbt' })
  },
  {
    alias: ['stellaris', 'stellaris.is', 'garden', 'garden.is'],
    router: genRouter({ url: 'https://www.alyn.dev', flag: 'white'})
  }
]

module.exports = subdomains
