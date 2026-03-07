import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">

      <div className="text-center text-white max-w-2xl">

        <h1 className="text-6xl font-extrabold mb-6">
          RBAC System
        </h1>

        <p className="text-xl mb-10 opacity-90">
          Secure Role Based Access Control built with
          Spring Boot + JWT + React
        </p>

        <div className="flex justify-center gap-6">

          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-xl hover:scale-105 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 bg-indigo-900 rounded-xl shadow-xl hover:scale-105 transition"
          >
            Register
          </button>

        </div>

      </div>

    </div>
  );
}

export default HomePage;