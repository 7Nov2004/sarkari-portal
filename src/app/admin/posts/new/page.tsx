export default function NewPostPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-3xl">
        <p className="text-gray-500 italic mb-6">
          Note: This is a demo interface. Creating a post requires implementing a Server Action or API route in a production app.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Enter post title" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
              <option value="JOB">Sarkari Job</option>
              <option value="RESULT">Result</option>
              <option value="ADMIT_CARD">Admit Card</option>
              <option value="YOJANA">Yojana</option>
              <option value="NEWS">News</option>
              <option value="ANSWER_KEY">Answer Key</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24" placeholder="Brief summary of the update..."></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 h-48" placeholder="Detailed content..."></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Official Website URL</label>
            <input type="url" className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="https://..." />
          </div>
          
          <div className="flex gap-4 pt-4">
            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Save Draft
            </button>
            <button type="button" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
