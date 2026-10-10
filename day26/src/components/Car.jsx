import React from 'react'
import CarImg from "./car.jpeg";

const Car = () => {
  return (
      <div className='car'>
          
          <div className='car-content'>
              <h3>Caring is the new marketing</h3>
              <p>The Nextcent blog is the best place to read about the latest membership insights, <br />
                  trends and more. See who's joining the community, read about how our community <br />
                  are increasing their membership income and lot's more.</p>
                  <img src={CarImg} alt={CarImg}  />
          </div>
    </div>
  )
}

export default Car