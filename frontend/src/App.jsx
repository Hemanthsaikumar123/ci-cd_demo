import { useEffect, useState } from 'react'

function App() {

  const [msg,setMsg] = useState("Loading...")

  useEffect(()=>{

    fetch("http://localhost:5000/api/message")
    .then(res=>res.json())
    .then(data=>{
      setMsg(data.message)
    })

  },[])

  return (
    <>
      <h1>Fullstack Deployment Project</h1>
      <h2>{msg}</h2>
    </>
  )
}

export default App