import React from 'react'
import CenterImg from "./center.jpeg";
const Center = () => {
  return (
      <div className='center'>
          <img src={CenterImg} alt={CenterImg} />
          
          <div className='center-content'>
              <h3>The unseen of spending three <br />
                  years at Pixelgrade       </h3>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br />
                  accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br />
                  porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br />
                  quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              
              <button>Learn More</button>
          </div>
    </div>
  )
}

export default Center