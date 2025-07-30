import React,{useReducer} from 'react'

const Counters = () => {
let initialState=0

const reducer = (state,action ) =>{
        switch(action){
            case 'increment':
                return state+1

                case 'decrement':
                    return state-1 
                
                    case 'reset ':
                        return 0
                    
                        default :
                            return initialState


        }
    }

     const [state,dispatch] = useReducer (reducer,initialState)

  return (
    <div>
         <p>counter value is {state}</p>
        <button  onClick={() =>dispatch ('increment')}>Increment</button> <br/>
        <button  onClick={() =>dispatch ('decrement')}>Decrement</button> <br/>
        <button  onClick={() =>dispatch ('reset')}>Reset</button><br/> <br/>
    </div>
  )
}

export default Counters