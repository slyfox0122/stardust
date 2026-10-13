import content from './content.json';
export const { translations, socials, address } = content;
export const languages = ['en', 'ms', 'zh'];
export const base = 'https://stardust-carfilm.slyfoz.chatgpt.site';
export const slugs = ['window-film', 'paint-protection', 'colour-wrap', 'colour-ppf', 'custom-print-wrap'];
export const images = ['tint', 'ppf', 'wrap', 'colour-ppf', 'print'];
export const routes = ['', 'films', ...slugs.map(s => `films/${s}`), 'technology', 'story', 'partners', 'contact'];
export const url = (lang, route = '') => `/${lang}/${route ? route + '/' : ''}`;
export const whatsapp = (lang, topic) => 'https://wa.me/60164099838?text=' + encodeURIComponent(({en:'Hello Stardust, I would like to learn more about ',ms:'Hai Stardust, saya ingin tahu lebih lanjut tentang ',zh:'你好 Stardust，我想了解'})[lang] + topic);
export function pageInfo(lang, route) {
 const t = translations[lang]; const i = slugs.indexOf(route.split('/')[1]);
 const title = !route ? t.home : route === 'films' ? t.products : i >= 0 ? t.names[i] : ({technology:t.nav[1],story:t.nav[2],partners:t.nav[3],contact:t.contact})[route];
 const description = !route ? t.sub.replaceAll('<br>', ' ') : route === 'films' ? t.productsSub : i >= 0 ? t.descs[i] : ({technology:t.techDesc,story:t.storyDesc,partners:t.partnerDesc,contact:t.contactDesc})[route];
 return {t, i, title, description};
}
