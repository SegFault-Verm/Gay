const https = require('https')
const getMeta = require('lets-get-meta')

const fetchHTML = (url, headers) => {
  delete headers.host
  delete headers['accept-encoding']
  delete headers['cdn-loop']
  Object.keys(headers).filter(k => k.indexOf('cf-') > -1).forEach(key => delete headers[key])

  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (resp) => {
      let data = ''
      resp.on('data', (chunk) => {
        data += chunk
      })
      resp.on('end', () => {
        resolve(data)
      })
    }).on('error', reject)
  })
}

const rebuildMetaTags = (tags) => {
  const vals = Object.entries(tags).filter(tag => tag[0] !== 'og:site_name')
  vals.push(['og:site_name', '(and that\'s  okay 🏳️‍🌈)']) // Inject leftist propaganda into the meta tags
  return vals.map(tag => `<meta name="${tag[0]}" property="${tag[0]}" content="${tag[1]}">`).join('\n')
}

/**
 * Assign the project to an employee.
  * @param options The config for the redirection page.
  * @param options.url The url to redirect to.
  * @param options.flag (optional) - The pride flag to use as the background (http://barchok.com/flags.html)
  * @param {number} options.redirectTime (optional, default 3s) - The amount of time to wait before redirecting.
  * @param options.customMeta - (optional) - A string of meta tags to inject manually. This will skip the process of fetching meta tags from the target site. Can technically be any <head> code.
  * @returns {string} The HTML of the redirection page.
 **/
const htmlRedirect = async (options, headers) => {
  let newHead = null
  if (!options.customMeta) {
    const fetchedHTML = await fetchHTML(options.url, headers) // Get the html from the target site
    newHead = rebuildMetaTags(getMeta(fetchedHTML)) // Transfer the altered meta tags from the target site
  }

  return (
        `<!doctype html>
        <html lang="en">
            <head>
                ${newHead || ''}${options.customMeta ? options.customMeta : ''}
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
                <link rel="stylesheet" href="css/redirect.css">
                <link rel="stylesheet" href="css/flags.css">
            </head>
            <body ${options.flag ? `class="${options.flag}"` : ''}>
                <div class="container">
                    <div class="child">
                        <div><strong>Redirecting...</strong></div>
                        <div>&nbsp;</div>
                        <div><a class="addspace" href="${options.url}">${options.url.replace(/(https?:\/\/)?(www\.)?/g, '')}</a></div>
                        <div>&nbsp;</div>
                        <div class="smalltext">Be queer, and be proud! Donate to the cause:
                        <a href='https://www.stonewall.org.uk/support-stonewall'>Stonewall</a>,
                        <a href='https://www.thetrevorproject.org/'>Trevor Project</a>
                        <a href='https://transequality.org/'>NCTE</a>,
                        <a href='https://www.equalityfederation.org/'>Equality Federation</a>
                        </div>
                    </div>
                </div>
            </body>
            <script>
                // window.setTimeout(() => { window.location.replace('${options.url}'); }, ${options.redirectTime ? options.redirectTime : 3000});
            </script>
        </html> `
  )
}

module.exports = htmlRedirect
