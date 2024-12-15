import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual login authentication here for later when we have a backend
    console.log('Login attempt with:', formData);
    
    // Simulate successful login and redirect
    navigate('/');
  };

  return (
    <div className="login-page">
      <Link to="/">
        <img src={Logo} alt="Crave-Wave Logo" className="logo" />
      </Link>
      <h2>Login to Crave-Wave</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <style>{`
        .logo {
          position: fixed;
          top: 20px;
          left: 20px;
          width: 125px;
          height: auto;
          z-index: 1000;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Login;