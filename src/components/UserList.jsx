import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  function getUsers() {
    axios
      .get("https://64c22b43fa35860baea14921.mockapi.io/records/records")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteHandler=(userid)=>{
    axios.delete("https://64c22b43fa35860baea14921.mockapi.io/records/records/" + userid)
    .then((res)=>{
      getUsers();

    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
      {users.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, ind) => {
              return (
                <tr key={user.id}>
                  <td>{++ind}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.contact}</td>
                  <td className="text-center">
                    <button className="me-2">
                      <Link className="text-decoration-none text-dark " to={'/edit-user/' + user?.id}>Edit</Link>
                    </button>
                    <button   onClick={()=> onDeleteHandler(user?.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default UserList;
