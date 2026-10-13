import Head from 'next/head';
import {base,languages,url,pageInfo,socials,images} from '../lib/site';
import {Shell} from './Site';
import PageContent from './PageContent';
export default function Website({lang,route}){
 const {t,i,title,description}=pageInfo(lang,route); const canonical=base+url(lang,route);
 const organization={'@context':'https://schema.org','@type':'Organization','@id':base+'/#organization',name:'Stardust',url:base+'/en/',logo:base+'/assets/logo.png',telephone:'+60164099838',sameAs:socials.map(([,u])=>u),address:{'@type':'PostalAddress',streetAddress:'30, Jalan BP 5/9, Bandar Bukit Puchong',addressLocality:'Puchong',addressRegion:'Selangor',postalCode:'47120',addressCountry:'MY'},contactPoint:{'@type':'ContactPoint',telephone:'+60164099838',contactType:'sales',availableLanguage:['English','Malay','Chinese']}};
 const schema={'@context':'https://schema.org','@type':'WebPage',name:title+' | Stardust',url:canonical,inLanguage:lang==='zh'?'zh-Hans':lang,description,isPartOf:{'@type':'WebSite',name:'Stardust',url:base+'/en/'},about:{'@id':base+'/#organization'}};
 if(i>=0)schema.mainEntity={'@type':'Product',name:t.names[i],description:t.descs[i],image:base+'/assets/'+images[i]+'.webp',brand:{'@type':'Brand',name:'Stardust'},category:t.names[i]};
 return <><Head><title>{title} | Stardust Automotive Films</title><meta name="description" content={description}/><link rel="canonical" href={canonical}/>{languages.map(l=><link key={l} rel="alternate" hrefLang={l==='zh'?'zh-Hans':l} href={base+url(l,route)}/>)}<link rel="alternate" hrefLang="x-default" href={base+url('en',route)}/><meta property="og:title" content={title+' | Stardust'}/><meta property="og:description" content={description}/><meta property="og:url" content={canonical}/><meta property="og:type" content="website"/><meta name="twitter:card" content="summary"/><link rel="icon" href="/assets/favicon.svg"/>{[schema,organization].map((s,j)=><script key={j} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s).replaceAll('<','\\u003c')}}/>)}</Head><Shell {...{lang,route,t}} topic={i>=0?t.names[i]:t.contact}><PageContent {...{lang,route,t,i}}/></Shell></>;
}
