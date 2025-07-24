import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>
        Role: <span className={user.role === 'Admin' ? 'admin-badge' : 'user-badge'}>{user.role}</span>
      </p>

      {user.role === 'Admin' && (
        <button onClick={() => navigate('/admin')} className="admin-btn">
          Go to Admin Dashboard
        </button>
      )}
    </div>
  );
};

export default Dashboard;
