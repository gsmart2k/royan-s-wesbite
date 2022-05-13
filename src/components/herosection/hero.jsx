/** @format */

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero(props) {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Therapy", "Healing", "Treatment", "Miracle"],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex-display-column hero-container">
      <div className="flex-display-column herotexts">
        <h3>Royan</h3>
        <h3>
          <span ref={el}></span>
        </h3>
      </div>
      <div className="flex-display-column button-div">
        <button id="btn1">Book Royan</button>
        <button id="btn2">Know More</button>
      </div>
    </div>
  );
}

export default Hero;
