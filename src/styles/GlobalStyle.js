import { Global, css } from '@emotion/react'

const style = css`
    @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
    * {
        box-sizing: border-box;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 나눔스퀘어, 'NanumSquare', sans-serif;
    }
    .reg {
        font-weight: 400;
    }
    .bold {
        font-weight: 700;
    }
    .exb {
        font-weight: 800;
    }
    .light {
        font-weight: 300;
    }

    select,
    input,
    button,
    textarea {
        border: 0;
        outline: 0 !important;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`

const GlobalStyle = () => {
    return <Global styles={style} />
}

export default GlobalStyle
