import { Brain, BookOpen, ScrollText, Bookmark } from "lucide-react";

const actions = [
  {
    title: "Ask AI",
    icon: <Brain size={36} />,
  },
  {
    title: "Bhagavad Gita",
    icon: <BookOpen size={36} />,
  },
  {
    title: "Ramayana",
    icon: <ScrollText size={36} />,
  },
  {
    title: "Bookmarks",
    icon: <Bookmark size={36} />,
  },
];

function QuickActions() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {actions.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl cursor-pointer transition"
            >

              <div className="text-orange-700">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-5">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default QuickActions;