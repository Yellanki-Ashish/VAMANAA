import { useParams } from "react-router-dom";

import gitaChapters from "../data/gitaChapters";
import verses from "../data/verses";

import ChapterHeader from "../components/gita/ChapterHeader";
import VerseList from "../components/gita/VerseList";

function ChapterPage() {
  const { id } = useParams();

  const chapter = gitaChapters.find(
    (item) => item.id === Number(id)
  );

  const chapterVerses = verses[id] || [];

  if (!chapter) {
    return (
      <div className="text-center py-20">
        Chapter Not Found
      </div>
    );
  }

  return (
    <>
      <ChapterHeader chapter={chapter} />

      {/* Reading Progress */}
      <div className="max-w-5xl mx-auto px-6 py-6">

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-orange-600 h-3 rounded-full"
            style={{ width: "25%" }}
          />
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Reading Progress 25%
        </p>

      </div>

      {/* Verse List */}
      <VerseList verses={chapterVerses} />

      {/* Navigation */}
      <div className="flex justify-between max-w-5xl mx-auto px-6 pb-16">

        <button className="bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 transition">
          ← Previous Chapter
        </button>

        <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition">
          Next Chapter →
        </button>

      </div>

    </>
  );
}

export default ChapterPage;