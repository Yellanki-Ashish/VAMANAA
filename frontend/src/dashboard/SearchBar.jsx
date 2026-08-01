import { Search } from "lucide-react";

function SearchBar() {
  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center bg-white rounded-2xl shadow-lg px-5 py-4">

          <Search className="text-gray-400" />

          <input
            className="ml-4 w-full outline-none text-lg"
            placeholder="Search Bhagavad Gita, Ramayana, Krishna..."
          />

        </div>

      </div>
    </section>
  );
}

export default SearchBar;