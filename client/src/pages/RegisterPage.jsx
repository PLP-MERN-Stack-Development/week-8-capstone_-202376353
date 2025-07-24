import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Registered Successfully! Please login.');
        navigate('/');
      } else {
        toast.error(data.message || 'Registration Failed');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Register</h2>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <button type="submit" className="login-btn">Register</button>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
};

export default RegisterPage;