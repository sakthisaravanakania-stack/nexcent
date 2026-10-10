import React from 'react'
import headerImg from "./header.jpeg";

const Header = () => {
  return (
      <div className='left-side'>
          <div className='header'>
              <h2>Lessons and insights <br />
              <p>from 8 years</p>
              </h2>
              <h5>Where to grow your business as a photographer.site or social media?</h5>

              <button>Register</button>
             
          </div>

          <div className='right-side'>
              <img src={headerImg} alt={headerImg} />
          </div>
    </div>
  )
}

export default Header