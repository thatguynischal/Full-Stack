import React, { useState, useEffect } from "react";
import http from "../http";
import Edit from "./Edit";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  const deleteUser = (id) => {
    http.delete(`/users/${id}`).then((res) => {
      fetchAllUsers();
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
              <td className="d-flex gap-2">
                <Link
                  className="btn btn-primary"
                  to={{ pathname: "/edit/" + a.id }}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-secondary"
                  to={{ pathname: "/view/" + a.id }}
                >
                  View
                </Link>
                <div
                  onClick={() => {
                    deleteUser(a.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
