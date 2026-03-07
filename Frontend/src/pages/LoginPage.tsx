import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../auth/authService";

function LoginPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    try {

      const res = await loginUser(formData);

      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);

      navigate("/dashboard");

    } catch {
      alert("Login failed");
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>

        </form>

        {/* REGISTER LINK */}

        <p className="text-center mt-6 text-sm">

          Don't have an account?

          <button
            onClick={() => navigate("/register")}
            className="text-indigo-600 font-semibold ml-1 hover:underline"
          >
            Register
          </button>

        </p>

      </div>

    </div>

  );

}

export default LoginPage;