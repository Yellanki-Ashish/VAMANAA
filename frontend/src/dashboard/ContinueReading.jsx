const books = [
  {
    title: "Bhagavad Gita",
    chapter: "Chapter 2",
    verse: "Verse 47",
    progress: 70,
  },
  {
    title: "Ramayana",
    chapter: "Ayodhya Kanda",
    verse: "Episode 12",
    progress: 45,
  },
];

function ContinueReading() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Continue Reading
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {books.map((book) => (
            <div
              key={book.title}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <h3 className="text-2xl font-bold">
                {book.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {book.chapter}
              </p>

              <p className="text-orange-700 font-semibold">
                {book.verse}
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-6">
                <div
                  className="bg-orange-600 h-3 rounded-full"
                  style={{ width: `${book.progress}%` }}
                ></div>
              </div>

              <p className="mt-3 text-sm text-gray-500">
                {book.progress}% Completed
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ContinueReading;