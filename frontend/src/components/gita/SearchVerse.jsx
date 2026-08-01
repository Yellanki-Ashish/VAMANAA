import { Search } from "lucide-react";

function SearchVerse({ search, setSearch }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">

      <div className="flex items-center bg-white rounded-2xl shadow-lg px-5 py-4">

        <Search className="text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search verses..."
          className="ml-4 w-full outline-none"
        />

      </div>

    </div>
  );
}

export default SearchVerse;