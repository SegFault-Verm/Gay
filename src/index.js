const subdomain = require('express-subdomain')
const express = require('express')
const subdomains = require('./subdomains')
const path = require('path')

const app = express()

const globalRouter = express.Router()

// Create all the routers for each of the aliases in subdomain.js.
subdomains.forEach(obj => {
  obj.alias.forEach(a => {
    app.use(subdomain(a, obj.router))
  })
})

// Images served directly at "im"
app.use(subdomain('im', express.static(path.join(__dirname, '/cdn'))))
app.use(globalRouter) // Currently unused, catch all for non-static globals.
app.use(express.static(path.join(__dirname, '/public')))

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404.html'))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(404).sendFile(path.join(__dirname, '/public/500.html'))
})

app.listen(80) // 80?! Cloudflare is good sometimes.
