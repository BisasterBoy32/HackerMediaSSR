import Document , { Head , NextScript ,Main } from "next/document";

export default class MyDocument extends Document{

    render() {
        return (
            <html lang="en">
                <Head>
                    <link rel="manifest" href="manifest.json" />

                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="HackerN" />
                <meta name="apple-mobile-web-app-title" content="HackerN" />
                <meta name="theme-color" content="#f60" />
                <meta name="msapplication-navbutton-color" content="#f60" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="msapplication-starturl" content="/" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="icon" sizes="512x512" href="/static/icons/icon-512-512.png" />
                <link rel="apple-touch-icon" sizes="512x512" href="/static/icons/icon-512-512.png" />
                <link rel="icon" sizes="192x192" href="/static/icons/icon-192x192.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="/static/icons/icon-192x192.png" />
                <meta name="description" content="Hacker news show the top news in USA" />
                <meta name="robots" content="noindex , nofollow" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
                <link 
                href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap"
                rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    font-family: 'Roboto', sans-serif;
                `}</style>
            </html >
        )
    }
}