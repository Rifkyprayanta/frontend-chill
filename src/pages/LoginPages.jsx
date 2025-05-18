import React from 'react'
import FormLogin from '../layouts/FormLogin'

function LoginPages() {
  return (
    <div>
        <div className='flex h-screen justify-center items-center bg-[url(bg-signin-chill.jpeg)] bg-cover bg-center bg-no-repeat'>
             <FormLogin></FormLogin>
        </div>
    </div>
  )
}

export default LoginPages