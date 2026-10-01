const fs = require('fs');
let content = fs.readFileSync('src/components/SarkariClassicHero.tsx', 'utf8');

const replacement = `const toolPills = [
    { name: "Signature Resizer", url: "https://image11zon.com/signature-resizer" },
    { name: "Image Resizer", url: "https://imageresizer.com/" },
    { name: "Image to PDF", url: "https://www.ilovepdf.com/jpg_to_pdf" },
    { name: "Add Name & Date", url: "https://tools.sarkariresult.com/name-date-on-photo" },
    { name: "Photo Sign Joiner", url: "https://tools.sarkariresult.com/photo-sign-joiner" },
    { name: "Age Calculator", url: "https://www.calculator.net/age-calculator.html" },
    { name: "PNG to JPG to Webp", url: "https://www.iloveimg.com/convert-to-jpg" },
    { name: "20kb Photo", url: "https://image11zon.com/compress-image-to-20kb" },
    { name: "50kb Photo", url: "https://image11zon.com/compress-image-to-50kb" },
    { name: "Photo in KB", url: "https://image11zon.com/compress-image" }
  ];`;

content = content.replace(/const toolPills = \[[\s\S]*?\];/, replacement);

const mapReplacement = `{toolPills.map((tool, idx) => (
          <a href={tool.url} target="_blank" rel="noopener noreferrer" key={idx} className="bg-[#17a2b8] hover:bg-[#138496] text-white text-[13px] px-3 py-1 rounded-full shadow-sm transition-colors">
            {tool.name}
          </a>
        ))}`;

content = content.replace(/\{toolPills\.map\(\(tool, idx\) => \([\s\S]*?\)\)\}/, mapReplacement);

fs.writeFileSync('src/components/SarkariClassicHero.tsx', content, 'utf8');
console.log("Updated to external links.");
