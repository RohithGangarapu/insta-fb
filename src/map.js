import React from 'react'
const App=()=>{
  const arr=[
    {
      id:1,
      name:"Rohith"
    },
    {
      id:2,
      name:"Abdul"
    },
    {
      id:3,
      name:"Mohan"
    },
    {
      id:4,
      name:"charan"
    }
  ]
    return (
      arr.map((value,index)=><li key={value.id}>{value.name}</li>)
    )
}
export default App;