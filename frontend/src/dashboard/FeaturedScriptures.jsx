import { BookOpen } from "lucide-react";

const scriptures = [
  "Bhagavad Gita",
  "Ramayana",
  "Mahabharata",
  "Vedas",
];

function FeaturedScriptures() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Featured Scriptures
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {scriptures.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
            >

              <BookOpen
                size={42}
                className="text-orange-700"
              />

              <h3 className="mt-5 text-xl font-bold">
                {item}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedScriptures;