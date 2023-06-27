import React, { useState, useEffect } from "react";
import http from "../http";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  };

  return (
    <div>
      <h2>Users Listing</h2>
      <table className="table">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
