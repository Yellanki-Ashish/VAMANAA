import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-orange-50 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-orange-600">
          🙏 Welcome, {user?.username}
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome back to Vamanaa
        </p>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">
              AI Questions
            </h2>

            <p className="text-4xl font-bold mt-2">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">
              Favorite Verses
            </h2>

            <p className="text-4xl font-bold mt-2">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">
              Chapters Read
            </h2>

            <p className="text-4xl font-bold mt-2">
              0
            </p>
          </div>

        </div>

        {/* Quick Actions */}

        <h2 className="text-2xl font-bold mt-12 mb-6">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          <Link
            to="/gita"
            className="bg-white rounded-xl shadow p-6 hover:bg-orange-100"
          >
            📖 Bhagavad Gita
          </Link>

          <Link
            to="/ramayana"
            className="bg-white rounded-xl shadow p-6 hover:bg-orange-100"
          >
            📜 Ramayana
          </Link>

          <Link
            to="/ask-ai"
            className="bg-white rounded-xl shadow p-6 hover:bg-orange-100"
          >
            🤖 Ask AI
          </Link>

          <Link
            to="/profile"
            className="bg-white rounded-xl shadow p-6 hover:bg-orange-100"
          >
            👤 Profile
          </Link>

        </div>

        {/* Daily Wisdom */}

        <div className="bg-white rounded-xl shadow p-8 mt-12">

          <h2 className="text-2xl font-bold text-orange-600">
            🌸 Today's Wisdom
          </h2>

          <p className="italic mt-4 text-lg">
            "You have a right to perform your prescribed duty,
            but you are not entitled to the fruits of your actions."
          </p>

          <p className="mt-3 font-semibold">
            — Bhagavad Gita 2.47
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;