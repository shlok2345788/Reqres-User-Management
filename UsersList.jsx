import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Users List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="rounded-full w-16 h-16 mb-2"
            />
            <h3 className="text-lg font-medium">{user.first_name} {user.last_name}</h3>
            <p className="text-gray-500">{user.email}</p>
            <div className="mt-3 flex space-x-3">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() => handleEdit(user.id)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
