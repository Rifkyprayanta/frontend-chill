import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between items-center gap-4 p-5 bg-black'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Copyright */}
        <div>
          <div className="flex items-center space-x-2 text-white text-2xl font-bold">
            <div className="text-3xl" />
            <span>CHILL</span>
          </div>
          <p className="text-gray-400 mt-4">@2023 Chill All Rights Reserved.</p>
        </div>

        {/* Genre */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
          <div>
            <h3 className="text-white font-semibold mb-2">Genre</h3>
            <ul className="space-y-1">
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
          </div>
          <div>
            <h3 className="invisible">Genre</h3>
            <ul className="space-y-1">
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>KDrama</li>
            </ul>
          </div>
          <div>
            <h3 className="invisible">Genre</h3>
            <ul className="space-y-1">
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
              <li>Romantis</li>
              <li>Sains & Alam</li>
              <li>Thriller</li>
            </ul>
          </div>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="text-white font-semibold mb-2">Bantuan</h3>
          <ul className="text-gray-300 space-y-1">
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </div>
           
        </div>
    </div>
  )
}

export default Footer