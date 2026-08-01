import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LogoutButton() {
  const navigate = useNavigate();
  const auth = useAuth();

  const logout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <button
      onClick={logout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  );
}

export default LogoutButton;