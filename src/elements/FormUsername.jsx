import React from 'react'
import { useState } from "react";

const FormUsername = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className='flex flex-col'>
        <div className='font-bold mb-2 text-white'> Username </div>
          <input className='rounded-xl p-2 border-2 border-white-100 text-white' type='text' placeholder='Masukkan Username'/>
        </div>
      
    </>
  )
}

export default FormUsername