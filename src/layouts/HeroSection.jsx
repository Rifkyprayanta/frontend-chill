import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center h-144" style={{ backgroundImage: "url('Hero.png')" }}>
        <div className='flex flex-col p-6 items-left justify-end h-full'>
          <h1 className="text-4xl font-bold mb-4">Duty After School</h1>
            <p className="text-lg">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,</p>
            <p className="text-lg"> Departemen pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah.</p> 
            <p className='text-lg'>Mereka pun segera menjadi pejuang garis depan dalam perang.</p>

          <div className='flex justify-between'>
            <div className="mt-4 flex space-x-4">
              <a type='button' className="bg-[#0F1E93] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">Mulai</a>
              <a type='button' className="bg-[#22282A] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">Selengkapnya</a>
              <a type='button' className="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">18+</a>
            </div>

            <div className="mt-4 flex space-x-4">
              <a type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">18+</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection