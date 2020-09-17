# Gay
Custom image host for my .gay domain.

## How to add your own subdomain and use it as a redirection platform.

1) Fork this repo.

2) Add an entry to `src/subdomains.js` with aliases and a genRouter function. Currently, only `*.domain.gay` will work, although I am working on adding `*.*.domain.gay`. (Yes, some of the aliases in this will not work yet.)

  ```js
  const options = {
    url: "https://theredirecturl.com//", // (Required)
    flag: "lgbt", // Or any of the flags in http://barchok.com/flags.html (Optional, defaults to white)"
    redirectTime: 3000 // Time on splash screen before redirecting (Optional, defaults to 3000ms),
    customMeta: `<title>Page Title</title><meta name="example" content="details">`
      // A string of meta tags to inject manually.
      // This will skip the process of fetching meta tags from the target site.
      // Can technically be any <head> code. (Optional, recommended against)
  }
  ```

  ```js
  const subdomains = [
    alias: ['domain', 'domain2'], router: genRouter(options),
  ]
  ```
  
  3. Merge request and contact me, I will need to add a cloudflare entry for it.
  
**For more complex additions, such as custom routing, please add a file under `src/subdomains/` which exports your custom router, and then use:**
  ```js
  const yourRouter = require('./subdomains/you');
  { alias: ['youralias'], router: yourRouter }
