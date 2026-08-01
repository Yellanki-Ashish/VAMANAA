import { useState } from "react";
import VerseCard from "./VerseCard";
import SearchVerse from "./SearchVerse";

function VerseList({ verses }) {
  const [search, setSearch] = useState("");

  const filteredVerses = verses.filter((verse) => {
    const query = search.toLowerCase();

    return (
      verse.sanskrit.toLowerCase().includes(query) ||
      verse.english.toLowerCase().includes(query) ||
      verse.explanation.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <SearchVerse
        search={search}
        setSearch={setSearch}
      />

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-8">

          {filteredVerses.length > 0 ? (
            filteredVerses.map((verse) => (
              <VerseCard
                key={verse.id}
                verse={verse}
              />
            ))
          ) : (
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

              <h2 className="text-2xl font-bold">
                No Verse Found
              </h2>

              <p className="mt-4 text-gray-500">
                Try another keyword.
              </p>

            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default VerseList;