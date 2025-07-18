import React,{useState} from 'react'
import { app } from './Firebase'
import {getFirestore,setDoc,doc } from "firebase/firestore"

const db = getFirestore(app)

const Web = () => {
    const [form,setForm] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target 
        setForm((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await setDoc(doc(db,"india","himachal"), {
            name: form.name,
            email: form.email,
            password: form.password
        })
        alert("Document saved successfully")
    } catch (error) {
        console.error("Error writing document: ", error)
    }
}


  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>name</label>
            <input name='name' value={form.name} onChange={handleChange}  type='text' placeholder='enter your name'/><br/> <br/>
            <label>email</label>
            <input name='email' value={form.email} onChange={handleChange} type='email' placeholder='enter your email'/><br/> <br/>
            <label>password</label>
            <input name='password' value={form.password} onChange={handleChange} type='password' placeholder='enter your password' /> <br/> <br/>
           <label > Upload Image</label> 
           <input type='file' accept='image/*' onChange={(e) => FileSystemFileEntry(e.target.files[0])}/> <br/> <br/>
           
            <button type='submit'>save </button><br/> 
           
        </form>
    </div>
  )
}

export default Web






