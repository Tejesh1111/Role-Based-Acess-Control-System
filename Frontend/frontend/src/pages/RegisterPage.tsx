import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../auth/authService";

function RegisterPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
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

      await registerUser(formData);

      alert("Registration successful");

      navigate("/login");

    } catch {

      alert("Registration failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Name"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <select
            name="role"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700"
          >
            Register
          </button>

        </form>

        {/* LOGIN LINK */}

        <p className="text-center mt-6 text-sm">

          Already have an account?

          <button
            onClick={() => navigate("/login")}
            className="text-purple-600 font-semibold ml-1 hover:underline"
          >
            Login
          </button>

        </p>

      </div>

    </div>

  );

}

export default RegisterPage;