import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-50 min-h-screen flex items-center">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}

          <div>

            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Ancient Wisdom • AI Powered
            </span>

            <div className="text-7xl lg:text-8xl text-amber-600 mb-6">
              ॐ
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Vamanaa
            </h1>

            <h2 className="text-2xl lg:text-4xl text-orange-700 font-semibold mt-4 leading-relaxed">
              Ancient Wisdom
              <br />
              for Modern Seekers
            </h2>

            <p className="mt-8 text-lg text-gray-700 leading-8 max-w-xl">
              Discover timeless teachings from the Bhagavad Gita,
              Ramayana and other sacred scriptures through an
              intelligent AI-powered spiritual companion.
            </p>

            {/* Sanskrit Quote */}

            <div className="mt-10 border-l-4 border-orange-600 pl-5">

              <p className="text-2xl text-orange-800 font-semibold">
                यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
              </p>

              <p className="mt-2 text-gray-600 italic">
                "Whenever righteousness declines and unrighteousness rises,
                I manifest Myself."
              </p>

              <p className="mt-1 text-sm text-orange-700">
                — Bhagavad Gita 4.7
              </p>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/home"
                className="px-8 py-4 bg-orange-700 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-800 transition duration-300"
              >
                Get Started
              </Link>

              <Link
                to="/ask-ai"
                className="px-8 py-4 border-2 border-orange-700 text-orange-700 rounded-xl font-semibold hover:bg-orange-700 hover:text-white transition duration-300"
              >
                Ask AI
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-orange-300 blur-3xl opacity-30 animate-pulse"></div>

              <div className="relative h-96 w-96 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-2xl">

                <span className="text-white text-[180px] font-bold">
                  ॐ
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <div className="h-12 w-7 border-2 border-orange-600 rounded-full flex justify-center">

          <div className="h-3 w-3 bg-orange-600 rounded-full mt-2"></div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;