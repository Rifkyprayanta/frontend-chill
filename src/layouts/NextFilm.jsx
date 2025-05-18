import React from 'react'

const NextFilm = () => {
    const movies = [
        {
            title : "Dont Look Up",
            rating : "⭐ 4.5/5",
            image : "dont-look-up.png",
        },
        {
            title : "The Batman",
            rating : "⭐ 4.5/5",
            image : "all-of-us-are-dead.png",
        },
        {
            title : "Blue Lock",
            rating : "⭐ 4.5/5",
            image : "blue-lock.png",
        },
        {
            title : "A Man called Otto",
            rating : "⭐ 4.5/5",
            image : "a-man-called-otto.png",
        }
    ]
  return (
    <div>
        <div className='flex flex-col gap-4 p-6 bg-black'>
            <p className='text-3xl font-bold'>Melanjutkan Nonton Film</p>
            
            <div className='flex flex-row'>
                <div className='grid grid-cols-4 gap-4'>
                    {movies.map((movie, index) => (
                         <div key={index} className="rounded-lg overflow-hidden shadow-md">
                         <img src={movie.image} alt={movie.title} className="relative bg-cover bg-center w-full h-48" />
                         <div className="p-4 flex flex-row justify-between">
                             <h3 className="text-lg font-bold">{movie.title}</h3>
                             <p className="text-gray-400">{movie.rating}</p>
                         </div>
                     </div>
                     
                    ))}
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default NextFilm