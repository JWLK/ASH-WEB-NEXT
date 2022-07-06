// _document.js
import { Children } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

/* Emotion */
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '@utils/createEmotionCache'

class ASHDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* HTML META & PWA Setting Info */}
                    <meta name="theme-color" content={`#fff`} />
                    <meta name="description" content="meta-content" />
                    <meta property="og:image" content="/logo.png" />
                    <link rel="icon" href="/logo.png" />
                    {/* Script */}
                    {/* <script defer src="https://url"></script> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

ASHDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => {
                return <App emotionCache={cache} {...props} />
            },
        })

    const initialProps = await Document.getInitialProps(ctx)
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ))

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
    }
}

export default ASHDocument
