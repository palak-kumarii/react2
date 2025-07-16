import React,{useState} from 'react'
import { app } from './Firebase'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"


const auth = getAuth(app)


const CreateUserWithEmail = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            console.log("user is registered successfully")
            alert("user is registered successfully")
        })
        .catch((err)=>{
            console.log("user is not registerd due to error",err)
            alert("user is not registered due to error")
        })


    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>email</label>
            <input onChange={(e)=>setEmail(e.target.value)} id='email' name='email' value={email}   type='email' placeholder='enter your email' /><br/>
            <label htmlFor='pass'>password</label>
            <input id='pass' name='password' value={password} onChange={(e) =>setPassword(e.target.value)} type='password' placeholder='enter your password' /> <br/>
            <button type='submit'>register user</button>
        </form>
    </div>
  )
}

export default CreateUserWithEmail