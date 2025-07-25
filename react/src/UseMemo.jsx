// import React,{useState,useMemo,useEffect,use} from 'react'

// function UseMemo  () {
//    const [number,setNumber] = useState(0);
//    const [state,setState] = useState(0)



//    const squared = useMemo(() => {
//     console.log('calculate square...');
//     return number * number;
//    },[number]);
//   return (
//     <div>
//         <h3>Square Calculator</h3>
//         <input type='number' value={number} onChange={(e) => setNumber(Number(e.target.value))}/>

//         <p>Square :{squared}</p>
//         <button onClick={(e) => setState(state+1)}>increment</button>
//         <p>{state}</p>
//     </div>
//   )
// }

// export default UseMemo