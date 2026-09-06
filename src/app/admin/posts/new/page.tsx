import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function NewPostPage() {
  async function createPost(formData: FormData) {
    'use server';

    const title = (formData.get('title') as string) || '';
    const category = (formData.get('category') as string) || 'JOB';
    const shortDescription = (formData.get('shortDescription') as string) || '';
    const content = (formData.get('content') as string) || '';
    const officialSourceUrl = (formData.get('officialSourceUrl') as string) || '';
    const eligibility = (formData.get('eligibility') as string) || '';
    const importantDates = (formData.get('importantDates') as string) || '';
    const requiredDocuments = (formData.get('requiredDocuments') as string) || '';
    const searchKeywords = (formData.get('searchKeywords') as string) || '';

    if (!title.trim()) {
      throw new Error('Title is required');
    }

    // Clean URL slug
    const cleanSlug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    const slug = `${cleanSlug || 'post'}-${Date.now().toString().slice(-4)}`;

    const fullContent = searchKeywords.trim()
      ? `${content}\n\n<!-- Search Keywords: ${searchKeywords} -->`
      : content;

    await prisma.post.create({
      data: {
        title,
        slug,
        category,
        shortDescription,
        content: fullContent,
        officialSourceUrl: officialSourceUrl.trim() || null,
        eligibility: eligibility.trim() || null,
        importantDates: importantDates.trim() || null,
        requiredDocuments: requiredDocuments.trim() || null,
        published: true,
        publishedAt: new Date(),
      },
    });

    revalidatePath('/');
    revalidatePath(`/category/${category}`);
    revalidatePath('/sitemap.xml');
    redirect(`/post/${slug}`);
  }

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">नया आर्टिकल / जॉब जोड़ें (Add New Post)</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
        <form action={createPost} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              पोस्ट का टाइटल (Post Title) *
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="उदा. UP Police Constable Result 2026 Cut Off Category Wise"
            />
            <p className="text-xs text-gray-500 mt-1">
              टिप: ऐसा टाइटल लिखें जैसा छात्र गूगल में सर्च करते हैं।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">कैटेगरी (Category) *</label>
              <select
                name="category"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="JOB">Sarkari Job (सरकारी नौकरी)</option>
                <option value="RESULT">Result (रिजल्ट)</option>
                <option value="ADMIT_CARD">Admit Card (एडमिट कार्ड)</option>
                <option value="YOJANA">Yojana (सरकारी योजना)</option>
                <option value="SCHOLARSHIP">Scholarship (छात्रवृत्ति)</option>
                <option value="SARKARI_KAAM">Sarkari Kaam (नागरिक सेवा)</option>
                <option value="ANSWER_KEY">Answer Key (उत्तर कुंजी)</option>
                <option value="NEWS">News & Updates (समाचार)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">
                आधिकारिक लिंक (Official Website URL)
              </label>
              <input
                type="url"
                name="officialSourceUrl"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              संक्षिप्त विवरण (Short Description) *
            </label>
            <textarea
              name="shortDescription"
              required
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="1-2 लाइन में मुख्य जानकारी दें जो गूगल सर्च रिजल्ट में दिखेगी..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              मुख्य जानकारी व विवरण (Full Content) *
            </label>
            <textarea
              name="content"
              required
              rows={8}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none leading-relaxed"
              placeholder="भर्ती या योजना के बारे में संपूर्ण विवरण यहाँ लिखें..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">
                महत्वपूर्ण तिथियां (Important Dates)
              </label>
              <input
                type="text"
                name="importantDates"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder='उदा. {"आवेदन शुरू": "10-09-2026", "अंतिम तिथि": "05-10-2026"}'
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">
                पात्रता / योग्यता (Eligibility)
              </label>
              <input
                type="text"
                name="eligibility"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="उदा. 10+2 इंटरमीडिएट पास किसी भी मान्यता प्राप्त बोर्ड से"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              ज़रूरी दस्तावेज़ (Required Documents)
            </label>
            <input
              type="text"
              name="requiredDocuments"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="आधार कार्ड, 10वीं/12वीं अंकतालिका, फोटो, हस्ताक्षर"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <label className="block text-sm font-bold text-blue-900 mb-1">
              गूगल सर्च कीवर्ड्स (Search Keywords - English & Hindi)
            </label>
            <input
              type="text"
              name="searchKeywords"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="up police, cut off, final answer key, category wise marks, safe score"
            />
            <p className="text-xs text-blue-700 mt-1">
              कॉमा (,) लगाकर वे सभी शब्द लिख दें जो लोग गूगल पर सर्च कर सकते हैं।
            </p>
          </div>

          <div className="flex gap-4 pt-4 border-t">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg text-base cursor-pointer"
            >
              तुरंत पब्लिश करें (Publish Now) 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
