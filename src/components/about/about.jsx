/** @format */

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import RoyanIcon from "../../res/RoyanIcon.png";
function About(props) {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porrodignissimos, eaque ducimus saepe quibusdam? Fugit velit est eaque, ad,sunt vitae minima quas nemo a suscipit dolor voluptas nisi. Lorem ipsumdolor sit amet consectetur adipisicing elit. Esse porro dignissimos,eaque ducimus saepe quibusdam? Fugit velit est eaque, ad, sunt vitaeminima quas nemo a suscipit dolor voluptas nisi.",
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex-display-column about-container">
      <img src={RoyanIcon} alt="Royan Icon" />
      <p ref={el}></p>
    </div>
  );
}

export default About;
