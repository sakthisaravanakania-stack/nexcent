import React from "react";
import UnderImg from "./under.jpeg";

const Under = () => {
  return (
      <div className="under">
          <div className="under-img">
          <img src={UnderImg} alt="Tesla" />
          </div>

          <div className="under-content">
              <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dul, vel rutrum risus <br />
                  tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br />
                  enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie <br />
                  mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br />
                  eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, <br />
                  vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum <br />
                  id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              
              <h4>Tim Smith</h4>

              <h3>British Dragon Boat Racing Association</h3>

              
          </div>

          <div className="under-icons">
              <h5><i className="fa-brands fa-figma"></i></h5>
              <h5><i className="fa-brands fa-apple"></i></h5>
              <h5><i className="fa-brands fa-google"></i></h5>
              <h5><i className="fa-brands fa-microsoft"></i> </h5>
              <h5><i className="fa-brands fa-meta"></i></h5>
              <h5><i className="fa-brands fa-codepen"></i></h5>
              <h2>Meet all customers  -></h2>
          </div>
    </div>
  );
};

export default Under;