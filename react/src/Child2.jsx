import React from 'react'
import Child3 from './Child3'


const Child2 = ({message}) => {
  return (
    <div>
        <h3>Child2</h3>
        <Child3 messsage={message}/>
    </div>
  )
}

export default Child2