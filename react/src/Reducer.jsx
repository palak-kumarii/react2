import React,{useReducer} from 'react'
import Red from "./Reducer.module.css"

const Reducer = () => {
    let initialState =0 
   

    const reducer = (state,action ) =>{
        switch(action){
            case 'increment':
                return state+1
        


                case 'decrement':
                    return state-1 
                

                    case 'reset ':
                        return 0
                    
                        default:
                            return initialState


        }
    }

     const [state,dispatch] = useReducer (reducer,initialState)
  return (
    <div>
        <button className={Red.btn1} onClick={() =>dispatch ('increment')}>Increment</button>
         <button className={Red.btn2} onClick={() =>dispatch ('decrement')}>Decrement</button>
          <button className={Red.btn3} onClick={() =>dispatch ('reset')}>reset</button>
<p>counter value is {state}</p>
    </div>
  )
}

export default Reducer

// style={{backgroundColor:"red",color:"green",fontSize:"55px"}}