import React from 'react'
import {useState} from 'react'
const App=()=>{
 const [result,setresult]=useState(0);
 const {result1}=result
 const onchange=e=>{
  try{
  setresult(e.target.value)}
  catch(error){
console.log('error')}}
const onclick=()=>{
  try{
    setresult(eval(result))}
  catch(error){
console.log('error')}}
const submithandler=e=>{
  e.preventDefault();}
return(
 <form onSubmit={submithandler}>
 <center>
 <b>Calculator</b><br></br><br></br>
 <input type='text'  value={result1} onChange={onchange}/>
  <br></br><br></br>
  <input type='button' onClick={onclick} value='Result' /></center>
  <p>The Result is {result}</p>
 </form>)}
export default App;