import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Software Engineer",
    review:
      "Vamanaa helped me understand the Bhagavad Gita in a simple and practical way. The AI responses are truly inspiring.",
  },
  {
    id: 2,
    name: "Priya Reddy",
    role: "Student",
    review:
      "Reading one verse every day has become part of my morning routine. The application is beautiful and easy to use.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Entrepreneur",
    review:
      "Whenever I'm confused, I ask Vamanaa AI for guidance. The explanations are meaningful and motivating.",
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-700 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Users Say
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Thousands of people are discovering ancient wisdom through Vamanaa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} fill="currentColor" size={20} />
                ))}
              </div>

              <p className="mt-6 text-gray-600 leading-8">
                "{user.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {user.name}
                </h3>

                <p className="text-gray-500">
                  {user.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;