import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email: form.email,
      password: form.password,
    });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    window.location.href = '/dashboard';
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-avatar">
            <span role="img" aria-label="user">👤</span>
          </div>
          <h2>SIGN IN</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input name="email" type="email" placeholder="username" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input name="password" type="password" placeholder="password" onChange={handleChange} required />
          </div>
          <div className="login-options">
            <label>
              <input type="checkbox" name="remember" onChange={handleChange} />
              Remember me
            </label>
            <a href="#" className="forgot-link">Forgot your password?</a>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
