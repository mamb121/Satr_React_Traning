import React,{useState,useEffect} from 'react'

export default function App() {
    const[count,setCount]=useState(0)
    useEffect(()=> {document.title = `the counter is  ${count}`})
  return (
    <div>
        <p>
            you click count {count} times
        </p>
        <button onClick={()=>setCount(count + 1)}>Click to add </button>
        <button onClick={()=>setCount(count - 1)}>Click to sub </button>
    </div>
  )
}
