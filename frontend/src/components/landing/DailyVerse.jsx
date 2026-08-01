function DailyVerse() {
  return (
    <section className="bg-orange-50 py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="text-orange-700 font-semibold uppercase tracking-widest">
            Daily Inspiration
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Verse of the Day
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Start your day with timeless wisdom from the Bhagavad Gita.
          </p>

        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-10">

          <p className="text-3xl text-center text-orange-800 leading-relaxed font-semibold">

            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।

          </p>

          <p className="mt-8 text-center text-gray-700 text-xl italic">

            "You have the right to perform your duty,
            but never to the fruits of your actions."

          </p>

          <div className="mt-8 text-center">

            <span className="inline-block bg-orange-100 text-orange-700 px-5 py-2 rounded-full font-semibold">
              Bhagavad Gita • Chapter 2 • Verse 47
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DailyVerse;