import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center">

      <div className="text-center text-white max-w-2xl">

        <h1 className="text-5xl font-extrabold mb-6">
          Role Based Access Control
        </h1>

        <p className="text-lg mb-10 opacity-90">
          Secure authentication system built with
          Spring Boot, JWT, React and TypeScript.
        </p>

        <div className="flex justify-center gap-6">

          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 bg-indigo-900 rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            Register
          </button>

        </div>

      </div>

    </div>

  );
}

export default HomePage;