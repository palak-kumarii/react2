import React from 'react'

let a= [
    {
    name:"ram",
    age:"22"
},
{
    name:"shyam",
    age:"20"
},{
      name:"rohan",
    age:"20"
},  {

    name:"sohan",
    age:"20"
}, 

]

const Object = () => {
  return (
    <div>
{
    a.map((element,index)=>(
        <>
        <h1 key ={index}>{element.name}</h1>
        </>
    ))
}

    </div>
  )
}

export default Object