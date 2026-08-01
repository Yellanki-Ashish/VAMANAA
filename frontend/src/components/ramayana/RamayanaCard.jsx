import { useNavigate } from "react-router-dom";

function RamayanaCard({ kanda, title, description }) {

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

      <h2 className="text-2xl font-bold text-orange-700">
        📖 {kanda}
      </h2>

      <h3 className="text-lg font-semibold mt-3">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

      <button
        onClick={() => navigate(`/ramayana/${encodeURIComponent(kanda)}`)}
        className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
      >
        Read More
      </button>

    </div>
  );
}

export default RamayanaCard;