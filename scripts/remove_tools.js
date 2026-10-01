const fs = require('fs');
let content = fs.readFileSync('src/components/SarkariClassicHero.tsx', 'utf8');

// Remove the toolPills array definition
content = content.replace(/const toolPills = \[[\s\S]*?\];\s*/, '');

// Remove the rendering of tool pills
content = content.replace(/\{\/\* Teal Tool Pills \*\/\}\s*<div className="flex flex-wrap justify-center gap-2 mb-6 w-full">\s*\{toolPills\.map\([\s\S]*?\}\s*<\/div>/, '');

fs.writeFileSync('src/components/SarkariClassicHero.tsx', content, 'utf8');
console.log("Removed tool pills");
