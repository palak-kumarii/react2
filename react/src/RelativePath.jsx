import React from 'react'
import{Link, Outlet} from "react-router-dom"

const RelativePath = () => {
  return (
    <div>
        <nav>  
<Link to="pant">pant</Link>
<Link to="shirt">shirt</Link>
<Link to="t-shirt">t-shirt</Link>
</nav>
<Outlet/>
    </div>
  )
}

export default RelativePath