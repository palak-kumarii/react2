import React,{useReducer} from 'react'
import style from "./Abc.module.css"

const Abc = () => {
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
        <button className={style.btn1} onClick={() =>dispatch ('increment')}>Increment</button>
         <button className={style.btn2} onClick={() =>dispatch ('decrement')}>Decrement</button>
          <button className={style.btn3} onClick={() =>dispatch ('reset')}>reset</button>
<p>counter value is {state}</p>
    </div>
  )
}

export default Abc

// style={{}}