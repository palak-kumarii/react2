import React from 'react'
import Child1 from './Child1'


const Child = () => {
const a = "data"
  return (
    <div>
       <h1>Parent component  message:data</h1>
       <Child1 message={a}/>
       
    </div>
  )
}

export default Child