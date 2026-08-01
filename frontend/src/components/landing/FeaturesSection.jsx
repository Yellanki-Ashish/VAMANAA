import { Brain, BookOpen, ScrollText, Sparkles } from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI Spiritual Guide",
    description:
      "Ask spiritual questions and receive intelligent answers inspired by ancient scriptures.",
    icon: <Brain size={40} />,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 2,
    title: "Bhagavad Gita",
    description:
      "Read all 18 chapters with Sanskrit, translation, explanation, and daily learning.",
    icon: <BookOpen size={40} />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 3,
    title: "Ramayana",
    description:
      "Explore every Kanda with beautiful stories, values, and important characters.",
    icon: <ScrollText size={40} />,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 4,
    title: "Daily Wisdom",
    description:
      "Receive one inspiring verse every day to guide your thoughts and actions.",
    icon: <Sparkles size={40} />,
    color: "bg-green-100 text-green-700",
  },
];

function FeaturesSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-900">
            Explore Vamanaa
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
            Discover timeless wisdom through AI, sacred scriptures,
            and personalized spiritual guidance.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl border bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div
                className={`h-20 w-20 rounded-2xl flex items-center justify-center ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>

              <button className="mt-8 text-orange-700 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;