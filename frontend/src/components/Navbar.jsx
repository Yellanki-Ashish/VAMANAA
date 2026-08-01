import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link
          to="/"
          className="text-3xl font-bold tracking-wide"
        >
          ॐ Vamanaa
        </Link>

        <div className="flex gap-6">

          <Link to="/">Home</Link>

          <Link to="/gita">Bhagavad Gita</Link>

          <Link to="/ramayana">Ramayana</Link>

          <Link to="/ask-ai">Ask AI</Link>

          <Link to="/about">About</Link>

          <Link to="/profile">Profile</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;