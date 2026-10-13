import fs from 'node:fs';
import assert from 'node:assert/strict';
const base='https://stardust-carfilm.slyfoz.chatgpt.site';
const slugs=['window-film','paint-protection','colour-wrap','colour-ppf','custom-print-wrap'];
const routes=['','films',...slugs.map(s=>'films/'+s),'technology','story','partners','contact'];
let count=0;
for(const lang of ['en','ms','zh'])for(const route of routes){
 const path=`out/${lang}/${route?route+'/':''}index.html`;const html=fs.readFileSync(path,'utf8');
 assert(html.includes('Protect Your Ride. Define Your Style'),path+' slogan');
 assert(html.includes(`lang="${lang==='zh'?'zh-Hans':lang}"`),path+' document language');
 assert(html.includes(`href="${base}/${lang}/${route?route+'/':''}"`),path+' canonical');
 for(const l of ['en','ms','zh'])assert(html.includes(`href="/${l}/${route?route+'/':''}"`),path+' language link');
 assert(html.includes('https://wa.me/60164099838?text='),path+' WhatsApp');
 assert(html.includes('__NEXT_DATA__'),path+' Next.js output');
 for(const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)){
 const target=match[1];if(target.startsWith('/_next/')){assert(fs.existsSync('out'+decodeURIComponent(target)),target);continue}
 const file='out'+target;assert(fs.existsSync(file)||fs.existsSync(file+'/index.html'),path+' broken link '+target);
 }
 for(const script of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g))JSON.parse(script[1]);
 if(route==='contact')assert(html.includes('<form id="enquiry"'),path+' form');count++;
}
assert.equal((fs.readFileSync('out/sitemap.xml','utf8').match(/<loc>/g)||[]).length,count);
assert(fs.existsSync('out/index.html'));assert(fs.existsSync('out/404.html'));
console.log(`Verified ${count} multilingual routes, metadata, JSON-LD, internal links, assets and enquiry forms.`);
