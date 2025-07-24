
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        login(data.user, data.token);
        toast.success('Logged in Successfully!');
        navigate('/dashboard');
      } else {
        toast.error(data.message || 'Login Failed');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;