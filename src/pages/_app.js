// _app.js
import GlobalStyle from '@styles/GlobalStyle'

/* Emotion */
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '@utils/createEmotionCache'

const cache = createEmotionCache()

function MyApp({ Component, pageProps, emotionCache = cache }) {
    return (
        <>
            <CacheProvider value={emotionCache}>
                <GlobalStyle />
                <Component {...pageProps} />
            </CacheProvider>
        </>
    )
}

export default MyApp
