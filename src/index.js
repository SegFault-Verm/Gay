const subdomain = require('express-subdomain')
const express = require('express')
const subdomains = require('./subdomains')
const path = require('path')
const fs = require('fs')
const https = require('https')
const http = require('http')

const key = fs.readFileSync('/etc/letsencrypt/live/is.slightly.gay/privkey.pem', 'utf-8')
const cert = fs.readFileSync('/etc/letsencrypt/live/is.slightly.gay/fullchain.pem', 'utf-8')

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

const httpsServer = https.createServer({ key, cert }, app)
httpsServer.listen(443, () => console.log('Listening to https over port 443')).on('error', console.log)
http.createServer((req, res) => {
  res.writeHead(301, { Location: 'https://' + req.headers.host + req.url })
  res.end()
}).listen(80, () => console.log('Redirecting from http over port 80'))
