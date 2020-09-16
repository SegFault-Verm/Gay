const emRouter = require('./subdomains/em')
const kevRouter = require('./subdomains/kev')
const segRouter = require('./subdomains/seg')

const subdomains = [
  {
    alias: ['segs', 'seg.is'],
    router: segRouter
  },
  {
    alias: ['emialis.is', 'em.is', 'ems'],
    router: emRouter
  },
  {
    alias: ['kevs'],
    router: kevRouter
  }
]

module.exports = subdomains
