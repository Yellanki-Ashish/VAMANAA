const topics = [
  "Dharma",
  "Karma",
  "Meditation",
  "Krishna",
  "Rama",
  "Bhakti",
];

function TrendingTopics() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Trending Topics
        </h2>

        <div className="flex flex-wrap gap-4">

          {topics.map((topic) => (
            <button
              key={topic}
              className="px-6 py-3 rounded-full bg-orange-100 text-orange-700 font-semibold hover:bg-orange-700 hover:text-white transition"
            >
              {topic}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrendingTopics;