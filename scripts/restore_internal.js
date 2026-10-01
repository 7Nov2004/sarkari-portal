const fs = require('fs');
let content = fs.readFileSync('src/components/SarkariClassicHero.tsx', 'utf8');

const replacement = `const toolPills = [
    { name: "Signature Resizer", url: "/tools/signature-resizer" },
    { name: "Image Resizer", url: "/tools/image-resizer" },
    { name: "Image to PDF", url: "https://www.ilovepdf.com/jpg_to_pdf" },
    { name: "Add Name & Date", url: "/tools/add-name-date" },
    { name: "Photo Sign Joiner", url: "/tools/photo-sign-joiner" },
    { name: "Age Calculator", url: "/tools/age-calculator" },
    { name: "PNG to JPG to Webp", url: "/tools/format-converter" },
    { name: "20kb Photo", url: "/tools/compressor?target=20" },
    { name: "50kb Photo", url: "/tools/compressor?target=50" },
    { name: "Photo in KB", url: "/tools/compressor" }
  ];`;

content = content.replace(/const toolPills = \[[\s\S]*?\];/, replacement);

const mapReplacement = `{toolPills.map((tool, idx) => {
          const isExternal = tool.url.startsWith("http");
          return isExternal ? (
            <a href={tool.url} target="_blank" rel="noopener noreferrer" key={idx} className="bg-[#17a2b8] hover:bg-[#138496] text-white text-[13px] px-3 py-1 rounded-full shadow-sm transition-colors">
              {tool.name}
            </a>
          ) : (
            <Link href={tool.url} key={idx} className="bg-[#17a2b8] hover:bg-[#138496] text-white text-[13px] px-3 py-1 rounded-full shadow-sm transition-colors">
              {tool.name}
            </Link>
          );
        })}`;

content = content.replace(/\{toolPills\.map\(\(tool, idx\) => \([\s\S]*?\)\)\}/, mapReplacement);

fs.writeFileSync('src/components/SarkariClassicHero.tsx', content, 'utf8');
console.log("Restored internal tools!");
