import React from 'react'

const Button = (props) => {
  if(props.title === 'Masuk dengan Google'){
    return (
      <div>
        <a type='button' className='items-center justify-center gap-2 flex rounded-xl p-2 bg-[#3D4142]'>
            <div><img className='w-6 h-6 bg-no-repeat bg-center bg-[url(Google-logo.svg)]'/></div>
            <div className='text-white'>{props.title}</div>
        </a>
      </div>
    )
  }

  return (
    <div>
        <a type='button' className='items-center justify-center flex rounded-xl p-2 bg-[#3D4142]'>
            <div className='text-white'>{props.title}</div>
        </a>
    </div>
  )
}

export default Button