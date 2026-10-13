import { GeistSans } from 'geist/font/sans';
import '../public/assets/style.css';
import '../public/assets/taste.css';
export default function App({Component,pageProps}){return <div className={`${GeistSans.variable} site-font`}><Component {...pageProps}/></div>}
