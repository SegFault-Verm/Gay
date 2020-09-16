const htmlRedirect = (options, newHead) => {
  return (
        `
<!doctype html>
<html lang="en">
    <head>
        ${newHead}
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <link rel="stylesheet" href="css/redirect.css">
        <link rel="stylesheet" href="css/flags.css">
    </head>
    <body class="${options.flag}">
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
        window.setTimeout(() => { window.location.replace('${options.url}'); }, ${options.redirectTime});
    </script>
</html>
        `
  )
}

module.exports = htmlRedirect
