import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <>
    <section id="Home-page">
      <div className='background-home'></div>
    <div id="Travel-to-space">
        <h1>SO, YOU WANT TO TRAVEL TO <span className='d-block  mt-1'>SPACE</span></h1>
        <article>
          <p> <span className=''>lets face it; if you want to go to space, you might as well
          </span>
            <span className='block '>
            genuinely go to outer space and not hover kind of on the 
            </span>
            <span className='block'>
            edge of it. Well sit back, and relax, because we'll give you
            </span>
            <span className='block'>
            a truly out of this world experience!
            </span>
          </p>
        </article>
    </div>
    <button id='Explore' className=' me-5'>
      Explore
    </button>
    </section>
    </>
  )
}

export default Home
