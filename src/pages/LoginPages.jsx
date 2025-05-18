import React from 'react'
import FormLogin from '../layouts/FormLogin'
import bgSignin from '/bg-signin-chill.jpeg'

function LoginPages() {
  return (
    <div>
        <div className='flex h-screen justify-center items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgSignin})` }}>
             <FormLogin></FormLogin>
        </div>
    </div>
  )
}

export default LoginPages