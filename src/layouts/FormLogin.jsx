import React from 'react'
import FormUsername from '../elements/FormUsername'
import FormPassword from '../elements/FormPassword'
import ForgetUsername from '../elements/ForgetUsername'
import Button from '../elements/Button'
import LogoChill from '../elements/LogoChill'



const FormLogin = () => {
  return (
    <div>
        <div className='flex flex-col w-96 rounded-xl bg-[#181A1CD6] p-4 gap-4 justify-center'>
            <div>
                <LogoChill title="Masuk" subtitle="Selamat Datang Kembali!"></LogoChill>
            </div>
            <div>
                <FormUsername></FormUsername>
            </div>
            <div>
                <FormPassword></FormPassword>
            </div>
            <div>
                <ForgetUsername></ForgetUsername>
            </div>
            <div>
                <Button title="Login"></Button>
            </div>
            <div className='text-gray-400 text-center'>Atau</div>
            <div>
                <Button title="Masuk dengan Google"></Button>
            </div>
        </div>
    </div>
  )
}

export default FormLogin