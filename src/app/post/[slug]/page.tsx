import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Calendar,
  ChevronRight,
  ExternalLink,
  AlertTriangle,
  FileText,
  CheckCircle2,
  ListOrdered,
  HelpCircle,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post || !post.published) {
    return {
      title: 'Update Not Found',
    };
  }

  const categoryName = post.category.replace('_', ' ');

  return {
    title: `${post.title} - Complete Details & Official Links`,
    description:
      post.shortDescription ||
      `Get all details, important dates, eligibility, and official link for ${post.title}.`,
    alternates: {
      canonical: `https://govportal.online/post/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Sarkari Portal`,
      description: post.shortDescription,
      url: `https://govportal.online/post/${post.slug}`,
      type: 'article',
      publishedTime: (post.publishedAt || post.createdAt).toISOString(),
      section: categoryName,
      tags: [categoryName, 'Sarkari Portal', 'Government Updates'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.shortDescription,
    },
  };
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post || !post.published) {
    notFound();
  }

  // Related updates from same category
  const related = await prisma.post.findMany({
    where: { category: post.category, published: true, id: { not: post.id } },
    take: 5,
    orderBy: { publishedAt: 'desc' },
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      JOB: 'bg-blue-600',
      RESULT: 'bg-green-600',
      YOJANA: 'bg-orange-600',
      ADMIT_CARD: 'bg-purple-600',
      NEWS: 'bg-red-600',
      ANSWER_KEY: 'bg-teal-600',
      SARKARI_KAAM: 'bg-indigo-600',
      SCHOLARSHIP: 'bg-pink-600',
    };
    return colors[category] || 'bg-gray-600';
  };

  const categoryName = post.category.replace('_', ' ');

  let datesObj: Record<string, string> | null = null;
  if (post.importantDates) {
    try {
      datesObj = JSON.parse(post.importantDates);
    } catch {
      // plain text fallback handled in template
    }
  }

  // Structured FAQs for this post
  const defaultFaqs = [
    {
      q: `${post.title} के लिए आधिकारिक वेबसाइट कौन सी है?`,
      a: post.officialSourceUrl
        ? `इसकी आधिकारिक वेबसाइट ${post.officialSourceUrl} है, जहाँ से आप सीधे सत्यापन या आवेदन कर सकते हैं।`
        : 'इसके लिए आधिकारिक वेबसाइट भारत सरकार / राज्य सरकार के संबंधित पोर्टल पर उपलब्ध है।',
    },
    {
      q: 'इसके लिए कौन-कौन से आवश्यक दस्तावेज चाहिए?',
      a: post.requiredDocuments
        ? `मुख्य दस्तावेज: ${post.requiredDocuments}।`
        : 'आधार कार्ड, पहचान पत्र, निवास प्रमाण पत्र और पासपोर्ट साइज फोटो की आवश्यकता होती है।',
    },
    {
      q: 'आवेदन या स्टेटस चेक करने की क्या प्रक्रिया है?',
      a: post.applicationProcess
        ? post.applicationProcess
        : 'आधिकारिक पोर्टल पर जाकर रजिस्ट्रेशन नंबर अथवा आधार नंबर दर्ज करके ऑनलाइन आवेदन या स्टेटस चेक किया जा सकता है।',
    },
  ];

  // JSON-LD Structured Data for Google Rich Results (Article)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.shortDescription,
    image: `https://govportal.online/post/${post.slug}/opengraph-image`,
    datePublished: (post.publishedAt || post.createdAt).toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      '@type': 'Organization',
      name: 'GovPortal.online',
      url: 'https://govportal.online',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GovPortal.online',
      logo: {
        '@type': 'ImageObject',
        url: 'https://govportal.online/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://govportal.online/post/${post.slug}`,
    },
  };

  // Breadcrumbs Schema
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://govportal.online',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryName,
        item: `https://govportal.online/category/${post.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://govportal.online/post/${post.slug}`,
      },
    ],
  };

  // FAQ Schema for Google Accordion Rich Snippet in Search Results
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: defaultFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-6 items-center flex-wrap">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <Link
            href={`/category/${post.category}`}
            className="hover:text-blue-600 uppercase"
          >
            {categoryName}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-800 font-medium truncate max-w-[200px] md:max-w-md">
            {post.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
              {/* Featured HD 1200px Banner (Google Discover & Social) */}
              <div className="relative w-full aspect-[1200/630] overflow-hidden bg-slate-950 border-b border-gray-200">
                <img
                  src={`/post/${post.slug}/opengraph-image`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Header */}
              <div className={`${getCategoryColor(post.category)} text-white p-6 md:p-8`}>
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                  {categoryName}
                </div>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center text-sm bg-black/10 inline-flex px-3 py-1.5 rounded-lg">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    Updated:{' '}
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8">
                {/* Short Intro */}
                <div className="text-lg text-gray-700 font-medium mb-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-r-lg leading-relaxed">
                  {post.shortDescription}
                </div>

                {/* Viral Share Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 mb-8">
                  <div className="flex items-center gap-2 text-green-900 font-bold text-sm">
                    <span>📲 दोस्तों व ग्रुप्स में शेयर करें:</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`📢 *${post.title}*\n\nपूरी जानकारी, योग्यता और ऑफिशियल लिंक यहाँ देखें 👇\nhttps://govportal.online/post/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-sm hover:scale-105"
                    >
                      WhatsApp पर भेजें
                    </a>
                    <a
                      href={`https://t.me/share/url?url=${encodeURIComponent(`https://govportal.online/post/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs md:text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-sm hover:scale-105"
                    >
                      Telegram
                    </a>
                  </div>
                </div>

                {/* Table of Contents (विषय सूची) */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
                  <div className="flex items-center gap-2 text-slate-800 font-bold mb-3 text-base">
                    <ListOrdered size={20} className="text-blue-600" />
                    <span>विषय सूची (Table of Contents)</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-blue-700 font-medium">
                    <li>
                      <a href="#about-section" className="hover:underline flex items-center gap-1.5">
                        👉 संपूर्ण विवरण (About Update)
                      </a>
                    </li>
                    {post.importantDates && (
                      <li>
                        <a href="#important-dates" className="hover:underline flex items-center gap-1.5">
                          👉 महत्वपूर्ण तिथियां (Dates)
                        </a>
                      </li>
                    )}
                    {post.eligibility && (
                      <li>
                        <a href="#eligibility-section" className="hover:underline flex items-center gap-1.5">
                          👉 पात्रता व नियम (Eligibility)
                        </a>
                      </li>
                    )}
                    {(post.applicationProcess || post.requiredDocuments) && (
                      <li>
                        <a href="#apply-section" className="hover:underline flex items-center gap-1.5">
                          👉 आवेदन प्रक्रिया व दस्तावेज
                        </a>
                      </li>
                    )}
                    <li>
                      <a href="#official-links" className="hover:underline flex items-center gap-1.5">
                        👉 महत्वपूर्ण लिंक (Official Link)
                      </a>
                    </li>
                    <li>
                      <a href="#faq-section" className="hover:underline flex items-center gap-1.5">
                        👉 अक्सर पूछे जाने वाले सवाल (FAQ)
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Main Content */}
                <div id="about-section" className="prose max-w-none text-gray-800 mb-10 leading-relaxed scroll-mt-20">
                  <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mb-4">
                    संपूर्ण विवरण / About this Update
                  </h2>
                  <p className="whitespace-pre-line text-base text-gray-700">
                    {post.content.replace(/<!--[\s\S]*?-->/g, '')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Important Dates */}
                  {post.importantDates && (
                    <div id="important-dates" className="bg-orange-50 rounded-xl p-6 border border-orange-100 scroll-mt-20">
                      <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                        <Calendar size={20} /> महत्वपूर्ण तिथियां (Important Dates)
                      </h3>
                      {datesObj ? (
                        <ul className="space-y-3">
                          {Object.entries(datesObj).map(([key, value]) => (
                            <li
                              key={key}
                              className="flex justify-between items-start border-b border-orange-200/50 pb-2 last:border-0"
                            >
                              <span className="font-medium text-gray-700">{key}:</span>
                              <span className="text-orange-700 font-bold text-right ml-4">
                                {String(value)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="whitespace-pre-line text-gray-700">
                          {post.importantDates}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Eligibility */}
                  {post.eligibility && (
                    <div id="eligibility-section" className="bg-blue-50 rounded-xl p-6 border border-blue-100 scroll-mt-20">
                      <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                        <CheckCircle2 size={20} /> पात्रता एवं योग्यता (Eligibility)
                      </h3>
                      <p className="whitespace-pre-line text-gray-700">
                        {post.eligibility}
                      </p>
                    </div>
                  )}
                </div>

                {/* Application Process & Documents */}
                {(post.applicationProcess || post.requiredDocuments) && (
                  <div id="apply-section" className="mb-10 scroll-mt-20">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-2 mb-6">
                      आवेदन प्रक्रिया एवं दस्तावेज (How to Apply)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {post.applicationProcess && (
                        <div>
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <FileText size={18} /> आवेदन के चरण (Steps)
                          </h4>
                          <p className="whitespace-pre-line text-gray-700 bg-gray-50 p-4 rounded-lg">
                            {post.applicationProcess}
                          </p>
                        </div>
                      )}
                      {post.requiredDocuments && (
                        <div>
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <FileText size={18} /> आवश्यक दस्तावेज (Required Documents)
                          </h4>
                          <p className="whitespace-pre-line text-gray-700 bg-gray-50 p-4 rounded-lg">
                            {post.requiredDocuments}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Official Links */}
                <div id="official-links" className="bg-gray-100 rounded-xl p-6 md:p-8 mt-10 border border-gray-200 scroll-mt-20">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    महत्वपूर्ण लिंक (Official Important Links)
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {post.officialSourceUrl && (
                      <a
                        href={post.officialSourceUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
                      >
                        Visit Official Website <ExternalLink size={18} />
                      </a>
                    )}
                    {post.category === 'JOB' && post.officialSourceUrl && (
                      <a
                        href={post.officialSourceUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
                      >
                        Apply Online Here <ExternalLink size={18} />
                      </a>
                    )}
                    {post.category === 'RESULT' && post.officialSourceUrl && (
                      <a
                        href={post.officialSourceUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
                      >
                        Check Result <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Interactive FAQ Section */}
                <div id="faq-section" className="mt-10 bg-slate-50 rounded-xl border border-slate-200 p-6 scroll-mt-20">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-3">
                    <HelpCircle className="text-blue-600" size={22} /> अक्सर पूछे जाने वाले सवाल (FAQ)
                  </h3>
                  <div className="space-y-4">
                    {defaultFaqs.map((faq, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base flex items-start gap-2">
                          <span className="text-blue-600 font-extrabold">Q.</span> {faq.q}
                        </h4>
                        <p className="text-gray-700 text-sm pl-6 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 flex items-start gap-3 text-sm text-gray-600 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <AlertTriangle className="text-yellow-600 flex-shrink-0" size={20} />
                  <p>
                    <strong>अस्वीकरण (Disclaimer):</strong> यह पोर्टल केवल जन-सूचना और
                    मार्गदर्शन हेतु है। यह किसी भी सरकारी विभाग का आधिकारिक पोर्टल नहीं है।
                    आवेदन करने या निर्णय लेने से पूर्व हमेशा आधिकारिक स्रोत पर दी गई जानकारी से
                    मिलान करें।
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 border-b pb-2 mb-4">
                सम्बंधित अपडेट (Related Updates)
              </h3>
              <ul className="space-y-4">
                {related.map((item) => (
                  <li key={item.id}>
                    <Link href={`/post/${item.slug}`} className="group block">
                      <h4 className="font-medium text-sm text-gray-800 group-hover:text-blue-600 mb-1 line-clamp-2">
                        {item.title}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {new Date(item.publishedAt || item.createdAt).toLocaleDateString('en-IN')}
                      </span>
                    </Link>
                  </li>
                ))}
                {related.length === 0 && (
                  <li className="text-sm text-gray-500">कोई सम्बंधित अपडेट नहीं।</li>
                )}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 text-center">
              <h3 className="font-bold text-blue-900 mb-2">अलर्ट प्राप्त करें</h3>
              <p className="text-sm text-blue-700 mb-4">
                नवीनतम सरकारी नौकरी एवं योजनाओं की सूचना सबसे पहले प्राप्त करें।
              </p>
              <Link
                href="/category/JOB"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-colors text-sm"
              >
                सभी सरकारी नौकरियां देखें
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
