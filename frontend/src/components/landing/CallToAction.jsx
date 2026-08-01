import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-600 to-amber-500 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Begin Your Spiritual Journey Today
        </h2>

        <p className="mt-6 text-xl">
          Explore sacred scriptures, ask AI, and discover timeless wisdom.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <Link
            to="/home"
            className="bg-white text-orange-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
          >
            Get Started
          </Link>

          <Link
            to="/ask-ai"
            className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-700 transition"
          >
            Ask AI
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CallToAction;