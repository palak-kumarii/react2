import React from 'react'
import Child2 from './Child2'

const Child1 = ({message}) => {
  return (
    <div>
  <h3> Child1</h3>
  <Child2 message={message}/>
    </div>
  )
}

export default Child1