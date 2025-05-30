import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const users = [
    { id: 1, name: 'Michael Holz', date: '04/10/2013', role: 'Admin', status: 'Active', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Paula Wilson', date: '05/08/2014', role: 'Publisher', status: 'Active', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Antonio Moreno', date: '11/05/2015', role: 'Publisher', status: 'Suspended', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Mary Saveley', date: '06/09/2016', role: 'Reviewer', status: 'Active', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Martin Sommer', date: '12/08/2017', role: 'Moderator', status: 'Inactive', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  const statusColors = {
    Active: 'green',
    Suspended: 'red',
    Inactive: 'orange',
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login'; // Or use a router redirect
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h2>Welcome, {user?.name}</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>
                <div className="user-cell">
                  <img src={u.avatar} alt={u.name} />
                  <span>{u.name}</span>
                </div>
              </td>
              <td>{u.date}</td>
              <td>{u.role}</td>
              <td>
                <span className="status-dot" style={{ backgroundColor: statusColors[u.status] }}></span>
                {u.status}
              </td>
              <td>
                <span className="action-icon edit">⚙️</span>
                <span className="action-icon delete">❌</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
