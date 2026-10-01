const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = {
  "pm-surya-ghar-muft-bijli-yojana-2026-subsidy": "https://pmsuryaghar.gov.in/",
  "pm-internship-scheme-2026-apply-online": "https://pminternship.mca.gov.in/",
  "psb-59-minute-loan-yojana-msme": "https://www.psbloansin59minutes.com/",
  "driving-license-mobile-number-update-online": "https://sarathi.parivahan.gov.in/",
  "traffic-e-challan-status-check-pay-online": "https://echallan.parivahan.gov.in/",
  "udyam-msme-registration-certificate-free-apply": "https://udyamregistration.gov.in/",
  "pm-svanidhi-yojana-10000-loan-online-apply": "https://pmsvanidhi.mohua.gov.in/",
  "egramswaraj-panchayat-fund-work-details-check": "https://egramswaraj.gov.in/",
  "pm-kisan-tractor-yojana-subsidy-online-apply": "https://agricoop.gov.in/",
  "all-bank-balance-check-missed-call-number-list": "https://www.npci.org.in/",
  "up-panchayat-chunav-voter-list-pdf-download": "https://sec.up.nic.in/",
  "passport-seva-online-apply-registration-process": "https://www.passportindia.gov.in/"
};

async function main() {
  for (const [slug, url] of Object.entries(updates)) {
    const updated = await prisma.post.update({
      where: { slug: slug },
      data: { officialSourceUrl: url }
    });
    console.log(`Updated ${slug} -> ${updated.officialSourceUrl}`);
  }
}
main().finally(() => prisma.$disconnect());
