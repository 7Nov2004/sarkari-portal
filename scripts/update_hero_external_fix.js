const fs = require('fs');
let content = fs.readFileSync('src/components/SarkariClassicHero.tsx', 'utf8');

const replacement = `const toolPills = [
    { name: "Signature Resizer", url: "https://www.sarkariresult.tools/image-resizer/" },
    { name: "Image Resizer", url: "https://imageresizer.com/" },
    { name: "Image to PDF", url: "https://www.ilovepdf.com/jpg_to_pdf" },
    { name: "Add Name & Date", url: "https://www.sarkariresult.tools/name-and-date-on-photo/" },
    { name: "Photo Sign Joiner", url: "https://www.sarkariresult.tools/photo-and-signature-joiner/" },
    { name: "Age Calculator", url: "https://www.calculator.net/age-calculator.html" },
    { name: "PNG to JPG to Webp", url: "https://www.iloveimg.com/convert-to-jpg" },
    { name: "20kb Photo", url: "https://image.11zon.com/en/compress-image/compress-image-to-20kb.php" },
    { name: "50kb Photo", url: "https://image.11zon.com/en/compress-image/compress-image-to-50kb.php" },
    { name: "Photo in KB", url: "https://image.11zon.com/en/compress-image/" }
  ];`;

content = content.replace(/const toolPills = \[[\s\S]*?\];/, replacement);

fs.writeFileSync('src/components/SarkariClassicHero.tsx', content, 'utf8');
console.log("Updated to accurate external links.");
