import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {user?.name || 'User'}!</h1>
      <p>Your Role: {user?.role || 'User'}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
