import React from 'react'

const ListMovies = ({title, movies}) => {

  return (
    <div>
        <div className='flex flex-col gap-4 p-6 bg-black'>
            <p className='text-3xl font-bold'>{title}</p>

            <div className='flex flex-row'>
                <div className='grid grid-cols-5 gap-4'>
                    {movies.map((movie, index) => (
                         <div key={index} className="rounded-lg overflow-hidden shadow-md">
                            <img src={movie.image} alt={movie.title} className="relative bg-cover bg-center w-full h-full" />
                     </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default ListMovies