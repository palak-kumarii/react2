import React,{useState} from 'react'
import { app } from './Firebase'
import {getFirestore,setDoc,doc,Timestamp } from "firebase/firestore"

const db = getFirestore(app)

const Web = () => {
    const [form,setForm] = useState({
        name:"",
        email:"",
        password:""
    });

    const [file, setFile] = useState(null);
    const [imageURL, setImageURL] = useState('');

    const handleChange = (e) =>{
        const {name,value} = e.target 
        setForm((prev)=>({
            ...prev,[name]:value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      let uploadedUrl = '';

      if (file) {
        // Upload to Cloudinary
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'react1'); // Your Cloudinary preset

        const res = await fetch(
          'https://api.cloudinary.com/v1_1/dmau5kozv/image/upload',
          {
            method: 'POST',
            body: data
          }
        );

        const result = await res.json();
        if (!result.secure_url) {
          throw new Error('Upload failed');
        }

        uploadedUrl = result.secure_url;
        setImageURL(uploadedUrl);
      }

      // Save to Firestore
      await setDoc(doc(db, 'india', 'himachal'), {
        ...form,
        imageUrl: uploadedUrl,
        createdAt: Timestamp.now()
      });

      alert('Document saved successfully!');
    } catch (error) {
      console.error('Error saving document:', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>name</label>
            <input name='name' value={form.name} onChange={handleChange}  type='text' placeholder='enter your name'/><br/> <br/>
            <label>email</label>
            <input name='email' value={form.email} onChange={handleChange} type='email' placeholder='enter your email'/><br/> <br/>
            <label>password</label>
            <input name='password' value={form.password} onChange={handleChange} type='password' placeholder='enter your password' /> <br/> <br/>
           <label> Upload Image</label> 
           <input type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])} /> <br /> <br />

            <button type='submit'>save </button><br/> 
           
        </form>

      {imageURL && (
        <div style={{ marginTop: 20 }}>
          <h3>Image Preview:</h3>
          <img
            src={imageURL}
            alt='Uploaded'
            style={{ width: '300px', border: '1px solid #ccc' }}
          />
        </div>
      )}

    </div>
  )
}

export default Web

