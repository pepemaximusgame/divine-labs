import React from 'react'
import { words  } from "../constants/index";
import HomeExperience from './HomeExperience';
const HomePage = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
    <div className="absolute top-0 left-0 z-10">
      <img src="/images/bg.png" alt="" />
    </div>

    <div className="hero-layout relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center;">
      {/* LEFT: Hero Content */}
      <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-4">
        <div className="flex flex-col gap-1">
          <div className="hero-text flex flex-col justify-center md:text-[40px] text-[30px] font-semibold relative z-10 pointer-events-none">
          <h1>PEPE MAXIMUS: The Meme legend </h1>
          <h1>The Coin of the Empire</h1>
          <h1>My skills are</h1>
            <h1>
              Doing..
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 "
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <span/>
           
          </div>

          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Join the legion. Conquer the meme market
          </p>

          {/* <button className='bg-white h-3 w-10'>
          "See My Work"
          </button> */}
          
        </div>
      </header>

      {/* RIGHT: 3D Model or Visual */}
      <figure className="hero-3d-layout">
        <div >
          <HomeExperience />
        </div>
      </figure>
    </div>

    {/* <AnimatedCounter /> */}
  </section>
  )
}

export default HomePage