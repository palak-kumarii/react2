import React from 'react'
import {Link,useParams} from "react-router-dom"


const DynamicRouting = () => {
    // const params = useParams()
    // console.log(params.id)


    const {id} = useParams()
  return (
    <div>
        <Link to="/">Home</Link>
         <Link to="/About">About</Link>
          <Link to="/Service">Service</Link>
           <Link to="/Contact">Contact</Link>
          <Link to="/search">search</Link>
          <Link to="/relative">Relative</Link>
                    <Link to="/location">Location</Link>

           <h1>{id}</h1>
    </div>
  )
}

export default DynamicRouting