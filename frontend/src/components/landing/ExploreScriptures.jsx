import { Link } from "react-router-dom";

const scriptures = [
  {
    title: "Bhagavad Gita",
    description: "18 Chapters • 700 Verses",
    link: "/gita",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Ramayana",
    description: "7 Kandas • Complete Story",
    link: "/ramayana",
    color: "from-red-500 to-orange-500",
  },
];

function ExploreScriptures() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Explore Scriptures
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Learn from India's greatest spiritual texts.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {scriptures.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl bg-gradient-to-r ${item.color} p-10 text-white shadow-xl`}
            >

              <h3 className="text-4xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-lg">
                {item.description}
              </p>

              <Link
                to={item.link}
                className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Explore →
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ExploreScriptures;