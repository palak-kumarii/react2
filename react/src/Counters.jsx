import React,{useReducer} from 'react'

const Counters = () => {
let initialState=0

const reducer = (state,action ) =>{
        switch(action){
            case 'increment':
                return state+5

                case 'decrement':
                    return state-5 
                
                    case 'reset ':
                        return 50
                    
                        default :
                            return 50


        }
    }

     const [state,dispatch] = useReducer (reducer,initialState)

  return (
    <div>
         <p>counter value is {state}</p><br/> 
        <button  onClick={() =>dispatch ('increment')}>Increment</button> <br/> <br/>
        <button  onClick={() =>dispatch ('decrement')}>Decrement</button> <br/><br/>
        <button  onClick={() =>dispatch ('reset')}>Reset</button><br/> <br/>
    </div>
  )
}

export default Counters