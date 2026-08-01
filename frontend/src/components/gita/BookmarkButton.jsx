import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

function BookmarkButton({ verse }) {
  const key = `bookmark-${verse.id}`;

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const isSaved = localStorage.getItem(key);
    setSaved(!!isSaved);
  }, [key]);

  const toggleBookmark = () => {
    if (saved) {
      localStorage.removeItem(key);
      setSaved(false);
    } else {
      localStorage.setItem(key, JSON.stringify(verse));
      setSaved(true);
    }
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`px-6 py-3 rounded-xl transition ${
        saved
          ? "bg-orange-600 text-white"
          : "bg-gray-100"
      }`}
    >
      <Bookmark size={18} className="inline mr-2" />
      {saved ? "Bookmarked" : "Bookmark"}
    </button>
  );
}

export default BookmarkButton;