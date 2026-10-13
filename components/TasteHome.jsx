import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { images, slugs, url } from '../lib/site';
import { Lines, Photo, Button, WhatsApp, Climate } from './Site';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const copy = {
 en: {collection:'The film collection', detail:'A considered finish.\nFor every kind of drive.', story:'Materials. Design.\nA different perspective.', choose:'Find your film.', chooseBody:'Start with the result you want. Explore the material, finish and care with our team.', prev:'Previous product',next:'Next product', select:'Select product', image:'AI concept visual. Explore real samples with our team.', action:'Your next look\nstarts here.', actionBody:'Tell us about your car, your style, or your business. We’ll help you explore the right film.', explore:'Explore the collection', partnership:'Become a partner', motion:'Pause moving text', resume:'Resume moving text'},
 ms: {collection:'Koleksi filem',detail:'Kemasan pilihan.\nUntuk setiap perjalanan.',story:'Bahan. Reka bentuk.\nPerspektif berbeza.',choose:'Cari filem anda.',chooseBody:'Mulakan dengan hasil yang anda inginkan. Bincangkan bahan, kemasan dan penjagaan dengan pasukan kami.',prev:'Produk sebelumnya',next:'Produk seterusnya',select:'Pilih produk',image:'Visual konsep AI. Terokai sampel sebenar bersama pasukan kami.',action:'Gaya baharu anda\nbermula di sini.',actionBody:'Kongsikan tentang kereta, gaya atau perniagaan anda. Kami bantu anda meneroka filem yang sesuai.',explore:'Terokai koleksi',partnership:'Jadi rakan niaga',motion:'Jeda teks bergerak',resume:'Sambung teks bergerak'},
 zh: {collection:'汽车膜系列',detail:'讲究每一面。\n适合每一种驾驶生活。',story:'材料、设计。\n看见新的可能。',choose:'找到适合你的膜。',chooseBody:'从你想要的效果出发，与团队了解材质、外观和养护，做出更适合自己的选择。',prev:'上一个产品',next:'下一个产品',select:'选择产品',image:'AI 概念画面。欢迎向团队了解真实色样。',action:'你的新风格，\n从这里开始。',actionBody:'告诉我们你的车型、喜欢的风格或业务需求，一起探索适合你的汽车膜。',explore:'探索产品系列',partnership:'成为合作伙伴',motion:'暂停滚动文字',resume:'继续滚动文字'}
};
const Breaks = ({as:Tag='h2',children,...props}) => <Lines as={Tag} {...props}>{children.replaceAll('\n','<br>')}</Lines>;
export default function TasteHome({lang,t}) {
 const scope=useRef(null);const c=copy[lang];const [active,setActive]=useState(0);const [paused,setPaused]=useState(false);
 useEffect(()=>{setActive(0)},[lang]);
 useGSAP(()=>{
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   gsap.from('.taste-hero-copy > *',{y:26,opacity:0,stagger:.12,duration:1,ease:'power3.out'});
   gsap.to('.reveal-word',{opacity:1,stagger:.12,ease:'none',scrollTrigger:{trigger:'.taste-statement',start:'top 80%',end:'bottom 55%',scrub:1}});
  });
  mm.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)',()=>{
   ScrollTrigger.create({trigger:'.taste-process',start:'top 120px',end:'bottom 75%',pin:'.taste-process-intro',pinSpacing:false,invalidateOnRefresh:true});
  });
  return()=>mm.revert();
 },{scope,dependencies:[lang],revertOnUpdate:true});
 return <div className="taste-home" ref={scope}>
  <section className="taste-hero">
   <Photo asset="hero" priority/><div className="taste-hero-wash"/>
   <div className="taste-hero-copy"><Lines as="h1">{t.hero}</Lines><Lines as="p">{t.sub}</Lines><div className="taste-actions"><Button lang={lang} route="films" light>{c.explore}</Button><WhatsApp lang={lang} topic={t.contact} className="button taste-outline">{t.chat}</WhatsApp></div></div>
   <p className="taste-image-note">{c.image}</p>
  </section>
  <div className="taste-marquee" aria-label={c.collection}><div className={`taste-marquee-track ${paused?'paused':''}`} aria-hidden="true">{[0,1].map(k=><div className="taste-marquee-group" key={k}>{t.names.map(n=><span key={n}>{n}<span className="marquee-dot"/></span>)}</div>)}</div><button type="button" onClick={()=>setPaused(!paused)} aria-label={paused?c.resume:c.motion} aria-pressed={paused}>{paused?'▶':'Ⅱ'}</button><span className="sr-only">{t.names.join(', ')}</span></div>
  <section className="taste-collection">
   <div className="taste-collection-heading"><span className="taste-kicker">{c.collection}</span><h2>{t.range} <img className="taste-inline-image" src="/assets/wrap.webp" alt="" loading="lazy"/></h2><p>{t.rangeSub}</p></div>
   <div className="taste-bento">{[0,2,1,3,4].map((j,k)=><article key={j} className={`taste-product taste-product-${k}`}><Link className="taste-product-image" href={url(lang,'films/'+slugs[j])}><Photo asset={images[j]} alt={t.names[j]}/></Link><div className="taste-product-copy"><Link href={url(lang,'films/'+slugs[j])}><h3>{t.names[j]}</h3></Link><p>{t.short[j]}</p><WhatsApp lang={lang} topic={t.names[j]} className="taste-text-link">{t.learn}<span aria-hidden="true">↗</span></WhatsApp></div></article>)}</div><p className="taste-caption">{t.imageNote}</p>
  </section>
  <section className="taste-statement"><Breaks>{c.detail}</Breaks><p>{(lang==='zh'?Array.from(t.storyText):t.storyText.split(/(\s+)/)).map((word,j)=><span className="reveal-word" key={j}>{word}</span>)}</p><Button lang={lang} route="story">{t.storyLink}</Button></section>
  <section className="taste-process"><div className="taste-process-intro"><span className="taste-kicker">STARDUST</span><Breaks>{c.story}</Breaks><p>{t.groupIntro}</p><Button lang={lang} route="technology">{t.techLink}</Button></div><div className="taste-process-gallery">{['coating','factory'].map((asset,j)=><article className="taste-process-item" key={asset}><div className="taste-process-image"><Photo asset={asset} alt={t.factoryAlt}/></div><h3>{t.capabilityTitles[j]}</h3><p>{t.capabilityBodies[j]}</p></article>)}</div></section>
  <section className="taste-finder"><div className="taste-finder-heading"><h2>{c.choose}</h2><p>{c.chooseBody}</p></div><div className="taste-finder-tabs" role="group" aria-label={c.select}>{t.names.map((n,j)=><button type="button" key={n} aria-pressed={active===j} onClick={()=>setActive(j)}>{n}</button>)}</div><div className="taste-finder-panel" aria-live="polite" aria-atomic="true"><div className="taste-finder-image"><Photo asset={images[active]} alt={t.names[active]}/></div><div className="taste-finder-copy"><h3>{t.names[active]}</h3><p>{t.descs[active]}</p><ul>{t.detailBullets[active].map(b=><li key={b}>{b}</li>)}</ul><WhatsApp lang={lang} topic={t.names[active]}>{t.learn}</WhatsApp><div className="taste-carousel-controls"><button type="button" aria-label={c.prev} onClick={()=>setActive((active+4)%5)}>←</button><span aria-hidden="true">{active+1} / 5</span><button type="button" aria-label={c.next} onClick={()=>setActive((active+1)%5)}>→</button></div></div></div></section>
  <Climate t={t}/>
  <section className="taste-action"><Breaks>{c.action}</Breaks><p>{c.actionBody}</p><div className="taste-actions"><WhatsApp lang={lang} topic={t.contact} className="button light">{t.chat}</WhatsApp><Button lang={lang} route="partners" light>{c.partnership}</Button></div></section>
 </div>
}
