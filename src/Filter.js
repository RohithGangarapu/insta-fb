import React from 'react'
const App=()=>{
  const arr=[10,20,30,40,50]
  const filtered_arr=arr.filter((value)=>value>10)
    return (
      filtered_arr.map((value)=><li>{value}</li>)
    )
}
export default App;