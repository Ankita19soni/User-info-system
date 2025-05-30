import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // ✅ Reuse the same styles

const Register = () => {
  const [form, setForm] = useState({ name: '', dob: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/register', form);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    window.location.href = '/dashboard';
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-avatar">
            <span role="img" aria-label="user">🧑</span>
          </div>
          <h2>SIGN UP</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">📝</span>
            <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <span className="icon">📅</span>
            <input name="dob" type="text" placeholder="Date of Birth" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <span className="icon">📧</span>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
