import React from 'react'
import FormRegister from '../layouts/FormRegister'
import bgRegister from '/bg-register-page.jpeg'


const RegisterPages = () => {
  return (
    <div>
         <div className='flex h-screen justify-center items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgRegister})` }}>
            <FormRegister></FormRegister>
        </div>
    </div>
  )
}

export default RegisterPages