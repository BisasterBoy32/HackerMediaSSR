import Document , { Head , NextScript ,Main } from "next/document";

export default class MyDocument extends Document{

    render() {
        return (
            <html lang="en">
                <Head>
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