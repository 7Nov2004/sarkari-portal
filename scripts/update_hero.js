const fs = require('fs');
let content = fs.readFileSync('src/components/SarkariClassicHero.tsx', 'utf8');

content = content.replace(/const topPills = \[[\s\S]*?\];/, `const topPills = [
    { name: "State Wise Job", link: "/state-wise-jobs" },
    { name: "Qualification Wise", link: "/state-wise-jobs" },
    { name: "सरकारी योजना", link: "/category/YOJANA" },
    { name: "सरकारी काम", link: "/category/SARKARI_KAAM" },
  ];`);

content = content.replace(/const toolPills = \[[\s\S]*?\];/, `const toolPills = [
    { name: "Signature Resizer", slug: "signature-resizer" },
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image to PDF", slug: "image-to-pdf" },
    { name: "Add Name & Date", slug: "add-name-date" },
    { name: "Photo Sign Joiner", slug: "photo-sign-joiner" },
    { name: "Age Calculator", slug: "age-calculator" },
    { name: "PNG to JPG to Webp", slug: "format-converter" },
    { name: "20kb Photo", slug: "compressor?target=20" },
    { name: "50kb Photo", slug: "compressor?target=50" },
    { name: "Photo in KB", slug: "compressor" }
  ];`);

content = content.replace(/\{toolPills\.map\(\(tool, idx\) => \([\s\S]*?\)\)\}/, `{toolPills.map((tool, idx) => (
          <Link href={\`/tools/\${tool.slug}\`} key={idx} className="bg-[#17a2b8] hover:bg-[#138496] text-white text-[13px] px-3 py-1 rounded-full shadow-sm transition-colors">
            {tool.name}
          </Link>
        ))}`);

fs.writeFileSync('src/components/SarkariClassicHero.tsx', content, 'utf8');
console.log("Replaced successfully");
