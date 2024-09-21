import React from 'react';
import { useState } from 'react';
function Onchange1(){
    const [data,setdata]=useState(
        {
            username:'',
            password:'',
        }
    );
    const {username,password}=data;
    const onChange=e=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=e=>{
        e.preventDefault();
        console.log(data);
    }
    return(<div>
        <form onSubmit={submit}>
        <input type='text' name='username' value={username} 
        onChange={onChange} />
          <input type='password' name='password' value={password} 
        onChange={onChange} />
        <input type='submit' name='submit'/>
        </form>
    </div>
)
}
export default Onchange1;