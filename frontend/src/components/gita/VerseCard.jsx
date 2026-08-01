import BookmarkButton from "./BookmarkButton";
import { Share2 } from "lucide-react";

function VerseCard({ verse }) {

  const shareVerse = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Bhagavad Gita",
          text: verse.english,
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h3 className="text-xl font-bold text-orange-700">
        Verse {verse.id}
      </h3>

      <p className="mt-6 text-2xl leading-loose">
        {verse.sanskrit}
      </p>

      <p className="mt-6 italic text-gray-700">
        {verse.english}
      </p>

      <div className="mt-6 border-t pt-6">
        <h4 className="font-bold">
          Explanation
        </h4>

        <p className="mt-3 text-gray-600">
          {verse.explanation}
        </p>
      </div>

      <div className="mt-8 flex gap-4 flex-wrap">

        <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition">
          Explain with AI
        </button>

        <button
          onClick={shareVerse}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition flex items-center gap-2"
        >
          <Share2 size={18} />
          Share
        </button>

        <BookmarkButton verse={verse} />

      </div>

    </div>
  );
}

export default VerseCard;