import ChapterGrid from "../components/gita/ChapterGrid";

function BhagavadGita() {
  return (
    <div className="bg-orange-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold">
            Bhagavad Gita
          </h1>

          <p className="text-xl mt-6 max-w-3xl mx-auto">
            Explore all eighteen chapters of the Bhagavad Gita with
            Sanskrit verses, translations, and explanations.
          </p>

        </div>

      </section>

      <ChapterGrid />

    </div>
  );
}

export default BhagavadGita;