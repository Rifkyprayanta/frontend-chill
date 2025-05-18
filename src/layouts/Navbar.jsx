import React from 'react'
import LogoChill from '../elements/LogoChill'

const Navbar = () => {
  return (
    <div>
        <nav className='w-full flex justify-between items-center gap-4 p-5 bg-black'>

            <div className="flex flex-row gap-6">
                    <div className="w-32 h-8 bg-no-repeat bg-center bg-[url('/Logo-chill.svg')] bg-contain"></div>
                    <a href="#" className="text-gray-400 hover:text-white">Series</a>
                    <a href="#" className="text-gray-400 hover:text-white">Film</a>
                    <a href="#" className="text-gray-400 hover:text-white">Daftar Saya</a>
            </div>

            <div className='flex flex-row gap-4'> 
              <div className="w-32 h-8 bg-no-repeat bg-center bg-[url('/account.svg')] bg-contain"></div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar