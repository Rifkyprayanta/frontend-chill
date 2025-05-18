import React from 'react'
import Navbar from '../layouts/Navbar'
import HeroSection from '../layouts/HeroSection'
import NextFilm from '../layouts/NextFilm'
import ListMovies from '../layouts/ListMovies'
import Footer from '../layouts/Footer'


const HomePages = () => {
  const title = [
    {
      name : "Top Rating Film dan Series Hari Ini",
    },
    {
      name : "Film Trending",
    },
    {
      name : "Rilis Baru",
    }
  ]


  const movieRating = [
    {
      title : "Suzume", 
      image : "suzume.png",
    },
    {
      title : "Jurasic World",
      image : "jurassic-world.png",
    },
    {
      title : "Sonic 2",
      image : "sonic2.png",
    },
    {
      title : "All Of Us Dead",
      image : "all-of-us-dead-top.png",
    }, 
    {
      title : "Big Hero 6",
      image : "big-hero.png",
    }, 

  ]

  const movieTrending = [
    {
      title : "Suzume", 
      image : "suzume.png",
    },
    {
      title : "Jurasic World",
      image : "jurassic-world.png",
    },
    {
      title : "Sonic 2",
      image : "sonic2.png",
    },
    {
      title : "All Of Us Dead",
      image : "all-of-us-dead-top.png",
    }, 
    {
      title : "Big Hero 6",
      image : "big-hero.png",
    },
  ]
  return (
    <div>
        <div className='bg-gray-900 text-white min-h-screen'>
            {/* Navbar */}
                <Navbar></Navbar>
            {/* Hero Section */}
                <HeroSection></HeroSection>
            {/* Next Film Section */}
                <NextFilm></NextFilm>
            {/* Top Rating */}
              <ListMovies title={title[0].name} movies={movieRating}></ListMovies>
              {/* Top Trending */}
              <ListMovies title={title[1].name} movies={movieRating}></ListMovies>
              {/* Top New Release */}
              <ListMovies title={title[2].name} movies={movieRating}></ListMovies>
              {/*Footer */}
              <Footer></Footer>
        </div>
    </div>
  )
}

export default HomePages