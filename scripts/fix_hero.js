const fs = require('fs');
let content = fs.readFileSync('src/components/SarkariClassicHero.tsx', 'utf8');
content = content.replace(/\{ name: ".*?", link: "\/category\/YOJANA" \},/g, '{ name: "सरकारी योजना", link: "/category/YOJANA" },');
content = content.replace(/\{ name: ".*?", link: "\/category\/SARKARI_KAAM" \},/g, '{ name: "सरकारी काम", link: "/category/SARKARI_KAAM" },');
content = content.replace(/"\/search\?q=State\+Wise"/g, '"/state-wise-jobs"');
content = content.replace(/"\/search\?q=Qualification"/g, '"/state-wise-jobs"');
fs.writeFileSync('src/components/SarkariClassicHero.tsx', content, 'utf8');
