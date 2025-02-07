import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    {/* Google Tag Manager */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-PC76DGNT');
                            `,
                        }}
                    />
                </Head>
                <body>
                    {/* Google Tag Manager (noscript) */}
                    <noscript>
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PC76DGNT"
                        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                    </noscript>
                    {/* End Google Tag Manager (noscript) */}
                    <Main />
                    <NextScript />
                    {/* Invisible Mastodon link for rel="me" */}
                    <a rel="me" href="https://mastodon.social/@saidbyrich" style={{ display: 'none' }}>Mastodon</a>
                </body>
            </Html>
        );
    }
}