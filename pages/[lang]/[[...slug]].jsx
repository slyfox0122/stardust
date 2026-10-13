import Website from '../../components/Website';
import {languages,routes} from '../../lib/site';
export default Website;
export function getStaticPaths(){return {paths:languages.flatMap(lang=>routes.map(route=>({params:{lang,slug:route?route.split('/'):[]}}))),fallback:false}}
export function getStaticProps({params}){const route=(params.slug||[]).join('/');if(!languages.includes(params.lang)||!routes.includes(route))return {notFound:true};return {props:{lang:params.lang,route}}}
