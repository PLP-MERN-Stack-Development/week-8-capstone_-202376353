import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', {
        email: formData.email,
        password: formData.password,
      });
      
      if (res.data.success) {
        toast.success("Logged in successfully!");
        localStorage.setItem('token', res.data.token);
        setUser(res.data.user);
        navigate('/dashboard');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your Login Form Fields */}
    </form>
  );
};
<p>
  Don't have an account? <Link to="/register">Sign Up</Link>
</p>


export default LoginPage;
