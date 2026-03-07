import Navbar from "../components/Navbar";
import AdminCard from "../components/AdminCard";
import UserCard from "../components/UserCard";

function DashboardPage() {

  const role = localStorage.getItem("role");

  return (

    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        {role === "ADMIN" && <AdminCard />}

        {role === "USER" && <UserCard />}

      </div>

    </div>

  );

}

export default DashboardPage;