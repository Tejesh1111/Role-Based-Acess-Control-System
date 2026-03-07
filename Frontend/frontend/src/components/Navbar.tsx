import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/login");

  };

  return (

    <div className="bg-gray-900 text-white p-4 flex justify-between">

      <h1 className="font-bold text-lg">
        RBAC System
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-3 py-1 rounded"
      >
        Logout
      </button>

    </div>

  );

}

export default Navbar;