import React from 'react'

const FormPassword = (props) => {
  return (
    <div>
        <div className='flex flex-col'>
        <div className='font-bold mb-2 text-white'> {props.title} </div>
          <input className='rounded-xl p-2 border-2 border-white-100 text-white' type='password' placeholder={props.title} />
        </div>
    </div>
  )
}

export default FormPassword