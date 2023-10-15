import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersTable.css';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <table>
        <caption>Dummy Data</caption>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Profile</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              <img src={user.image} alt={user.firstName} class="profile-image" />
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.domain}</td>
            <td>{user.ip}</td>
            <td>{user.university}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
