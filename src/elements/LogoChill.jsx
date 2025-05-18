import React from 'react'
import bgChill from '/Logo-chill.svg'

const LogoChill = (props) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-full h-16 bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgChill})` }} ></div>
        <div className='text-white text-[22px]'>{props.title}</div>
        <div className='text-white text-[14px]'>{props.subtitle}</div>
        </div>
    </div>
  )
}

export default LogoChill