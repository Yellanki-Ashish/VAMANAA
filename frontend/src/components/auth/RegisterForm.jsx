import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";

function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const result = await register(form);

      if (result.success) {
        alert("Registration Successful!");
        navigate("/login");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Unable to connect to the server.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
    >
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Register
      </h2>

      {error && (
        <p className="text-red-600 text-sm mb-4">
          {error}
        </p>
      )}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 mb-4"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 mb-4"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 mb-6"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg"
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

export default RegisterForm;