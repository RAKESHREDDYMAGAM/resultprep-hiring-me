import { useEffect, useState } from "react";
import API from "../services/api";

function Admin() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {

    try {

      const res = await API.get("/users");

      setUsers(res.data);

    } catch (err) {

        alert(err.response?.data?.error || "Failed to fetch users");

    }

  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {

    try {

      await API.delete(`/users/${id}`);

      fetchUsers();

    } catch (err) {

      alert("Failed to delete user");

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h2>Admin Panel</h2>

      <h3>Users</h3>

      {users.map((user) => (

        <div
          key={user.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginTop: "10px"
          }}
        >

          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>

          <button onClick={() => deleteUser(user.id)}>
            Delete User
          </button>

        </div>

      ))}

    </div>

  );
}

export default Admin;