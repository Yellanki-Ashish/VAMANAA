import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function ChapterCard({ chapter }) {
  return (
    <Link
      to={`/gita/chapter/${chapter.id}`}
      className="group block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2"></div>

      <div className="p-8">

        <div className="flex items-center justify-between">

          <div className="bg-orange-100 p-4 rounded-2xl">
            <BookOpen size={30} className="text-orange-700" />
          </div>

          <span className="text-sm font-semibold text-orange-700">
            Chapter {chapter.id}
          </span>

        </div>

        <h2 className="text-2xl font-bold mt-6">
          {chapter.name}
        </h2>

        <p className="text-lg text-orange-700 mt-2">
          {chapter.sanskrit}
        </p>

        <p className="text-gray-600 mt-5">
          {chapter.description}
        </p>

        <div className="mt-8 flex justify-between items-center">

          <span className="bg-orange-100 px-4 py-2 rounded-full text-orange-700 font-semibold">
            {chapter.verses} Verses
          </span>

          <span className="text-orange-700 font-bold group-hover:translate-x-1 transition">
            →
          </span>

        </div>

      </div>
    </Link>
  );
}

export default ChapterCard;