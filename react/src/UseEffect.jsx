import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)

    const handleClick = ()=>{
        setCount(count+1) 
    }

    useEffect(()=>{
        console.log("side effect is run")
        return()=>{
            console.log("side effect is cleaned")
        }
    })
  return (
    <div>
        <button onClick={handleClick}>increment</button>
        <p>{count}</p>
    </div>
  )
}

export default UseEffect