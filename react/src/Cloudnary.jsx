import React, { useState } from 'react'
import { app } from './Firebase'
import { getFirestore, addDoc, collection, Timestamp } from 'firebase/firestore'

const db = getFirestore(app)

const Cloudinary = () => {
  const [file, setFile] = useState(null)

  const handleClick = async () => {
    if (!file) {
      alert('Please select a file')
      return
    }

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'react1')

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dmau5kozv/image/upload',
        {
          method: 'POST',
          body: data
        }
      )

      if (!res.ok) {
        throw new Error(`Cloudinary upload failed with status ${res.status}`)
      }

      const result = await res.json()
      console.log('Cloudinary result:', result)

      if (!result.secure_url) {
        throw new Error('No secure URL returned from Cloudinary')
      }

     
      await addDoc(collection(db, 'food'), {
        url: result.secure_url,
        uploadedAt: Timestamp.fromDate(new Date())
      })

      alert('Image uploaded and URL saved to Firestore!')
    }   catch(err){
        console.log("error is find out",err)
        }
    
  }

  return (
    <div>
      <h1>Cloudinary Image Upload</h1>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleClick}>Upload Image</button>
    </div>
  )
}

export default Cloudinary
