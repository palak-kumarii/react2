import React,{useRef,useState} from 'react'

const UseRef = () => {
    const myref = useRef(0);

    const [count,setcount] = useState(0);

    const handleClick = () => {
        myref.current +=1;
        setcount(myref.current);
    };
    
  return (
    <div>
        <h2>count:{count}</h2><br/>
     <button onClick={handleClick}>Increase</button>

    </div>
  )
}

export default UseRef



