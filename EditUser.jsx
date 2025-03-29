import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      setUser({
        first_name: response.data.data.first_name,
        last_name: response.data.data.last_name,
        email: response.data.data.email,
      });
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://reqres.in/api/users/${id}`, user).then(() => {
      navigate("/users");
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Edit User
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-3"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-3"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            placeholder="Last Name"
          />
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-3"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
