import React,{Component} from 'react'
import {useState,useEffect} from 'react'
const useEffect=()=>{
    const [count,setcount]=useState(0);
    useEffect(()=>console.log('use effect'),[count])
    return (
        <div>
          <button onClick={()=>setcount(count+1)}>Click me({count})</button>
        </div>
    )
}
export default useEffect;