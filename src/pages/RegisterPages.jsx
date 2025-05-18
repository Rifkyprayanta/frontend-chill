import React from 'react'
import FormRegister from '../layouts/FormRegister'


const RegisterPages = () => {
  return (
    <div>
         <div className='flex h-screen justify-center items-center bg-[url(bg-register-page.jpeg)] bg-cover bg-center bg-no-repeat'>
            <FormRegister></FormRegister>
        </div>
    </div>
  )
}

export default RegisterPages