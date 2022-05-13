/** @format */

import React, { useState, useRef } from "react";
import testimoniesjson from "./testimoniesjson";

function Testimonies(props) {
  // const [testimonies, setTestimonies] = useState(testimoniesjson);
  const [counts, setCounts] = useState(0);
  const count = useRef(0);
  const handlePreviousTestifier = () => {
    // count.current = count.current - 1;
    // console.log(count.current);
    if (counts >= 1) {
      setCounts(counts - 1);
    } else {
      setCounts(4);
    }
  };
  const handleNextTestifier = () => {
    // count.current = count.current + 1;
    // console.log(count.current);
    if (counts <= 3) {
      setCounts(counts + 1);
    } else {
      setCounts(0);
    }
  };
  return (
    <div className="flex-display-column testimony-container">
      <h5>Testimonies</h5>
      <div className="btn-and-testimony">
        <button onClick={handlePreviousTestifier}>-</button>
        <div className="flex-display-column testimony">
          <div className="image-div">
            <img src={testimoniesjson[counts].image} alt="human1" />
          </div>
          <h4>{testimoniesjson[counts].name}</h4>
          <p>{testimoniesjson[counts].testimony}</p>
        </div>
        <button onClick={handleNextTestifier}>-</button>
      </div>
    </div>
  );
}

export default Testimonies;
