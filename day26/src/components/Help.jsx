import React from 'react'

const Help = () => {
  return (
      <div className='help'>
          <div className='help-main'>
              <h2>Helping a local <br />
                  <h4>business reinvent itself</h4>
              </h2>

              <p>We reached here with our hand work and dedication</p>
          </div>

          <div className='members'>
          <h3><i class="fa-solid fa-user-group"></i></h3>   
              <h5>2,245,341</h5>
              <p>Members</p>
          </div>

          <div className='clubs'>
              <h2><i class="fa-brands fa-squarespace"></i></h2>
              <h5>46,328</h5>
              <p>Clubs</p>
          </div>

          <div className='event'>
              <h2><i class="fa-solid fa-monument"></i></h2>
              <h5>828,867</h5>
              <p>Event Bookings</p>
          </div>

          <div className='payment'>
              <h2><i class="fa-solid fa-wallet"></i></h2>
              <h5>1,926,436</h5>
              <p>Payments</p>
        </div>
         


    </div>
  )
}

export default Help