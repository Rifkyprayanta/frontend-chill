import React from 'react'
import FormUsername from '../elements/FormUsername'
import FormPassword from '../elements/FormPassword'
import ForgetUsername from '../elements/ForgetUsername'
import Button from '../elements/Button'
import LogoChill from '../elements/LogoChill'

const FormRegister = () => {
    const titlePlaceholder = "Kata Sandi";
    const titlePlaceholder2 = "Konfirmasi Kata Sandi";
    const subtitlePlaceholder = "Masukkan Kata Sandi";
    const subtitle2Placeholder = "Masukkan Konfirmasi Kata Sandi";

  return (
    <div>
        <div className='flex flex-col w-96 rounded-xl bg-[#181A1CD6] p-4 gap-4 justify-center'>
            <div>
                <LogoChill title="Daftar" subtitle="Selamat Datang!"></LogoChill>
            </div>
            <div>
                <FormUsername></FormUsername>
            </div>
            <div>
                <FormPassword title={titlePlaceholder} subtitle={subtitlePlaceholder}></FormPassword>
            </div>
            <div>
                <FormPassword title={titlePlaceholder2} subtitle={subtitle2Placeholder}></FormPassword>
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

export default FormRegister