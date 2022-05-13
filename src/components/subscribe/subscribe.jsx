/** @format */

import React from "react";

function Subscribe(props) {
  return (
    <div className="flex-display-column subscribe-container">
      <h5>
        Would you love to receive Newsletters from Royan?
        <div id="Royan"></div>
      </h5>
      <div className="input">
        <input type="email" placeholder="Email"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
