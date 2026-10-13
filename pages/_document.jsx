import {Html,Head,Main,NextScript} from 'next/document';
export default function Document(props){const lang=props.__NEXT_DATA__?.props?.pageProps?.lang||'en';return <Html lang={lang==='zh'?'zh-Hans':lang}><Head/><body><Main/><NextScript/></body></Html>}
