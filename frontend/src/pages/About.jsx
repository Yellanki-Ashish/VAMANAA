function About() {

  return (

    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-5xl font-bold text-center text-orange-600 mb-10">
        About Vamanaa
      </h1>

      {/* Mission */}

      <div className="bg-white shadow-lg rounded-xl p-8 mb-8">

        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          🌸 Our Mission
        </h2>

        <p className="text-gray-700 leading-8">
          Vamanaa is an AI-powered platform dedicated to making the timeless
          wisdom of Sanatana Dharma accessible to everyone. Our mission is to
          help users explore the Bhagavad Gita, Ramayana, Mahabharata, and
          Hindu philosophy in a simple, meaningful, and interactive way.
        </p>

      </div>

      {/* Vision */}

      <div className="bg-white shadow-lg rounded-xl p-8 mb-8">

        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          🌍 Our Vision
        </h2>

        <p className="text-gray-700 leading-8">
          To build the world's most trusted AI companion for learning
          Sanatana Dharma by combining ancient scriptures with modern
          Artificial Intelligence.
        </p>

      </div>

      {/* Features */}

      <div className="bg-white shadow-lg rounded-xl p-8 mb-8">

        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          ✨ Features
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">

          <li>Bhagavad Gita Explorer</li>

          <li>Ramayana Explorer</li>

          <li>Mahabharata Explorer</li>

          <li>AI Spiritual Assistant</li>

          <li>Daily Sloka</li>

          <li>Semantic Search</li>

          <li>User Authentication</li>

          <li>Chat History</li>

        </ul>

      </div>

      {/* Technologies */}

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          💻 Technologies Used
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>⚛ React.js</div>

          <div>⚡ FastAPI</div>

          <div>🤖 Gemini AI</div>

          <div>🧠 ChromaDB</div>

          <div>🔍 Sentence Transformers</div>

          <div>🔐 JWT Authentication</div>

        </div>

      </div>

    </div>

  );

}

export default About;