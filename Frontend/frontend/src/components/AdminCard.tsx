function AdminCard() {

  return (

    <div className="bg-red-500 text-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-2">
        Admin Panel
      </h2>

      <p>
        Only admins can see this content.
      </p>

    </div>

  );

}

export default AdminCard;