import React from 'react'
import Child4 from './Child4'


const Child3 = ({message}) => {
  return (
    <div>
   <h3>Child3</h3>
    <Child4 message={message}/>
    </div>
  )
}

export default Child3