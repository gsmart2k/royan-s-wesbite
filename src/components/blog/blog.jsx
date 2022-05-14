/** @format */

import React from "react";

function Blog(props) {
  return (
    <div className="blog-container">
      <div className="heading">
        <h1>Royan's Mini Blog</h1>
        <tag>Royan provides tips to a healthy living</tag>
      </div>
      <div className="flex-display-column faqs-container">
        <h4>Faqs</h4>
        <input type="text" placeholder="Search for a Question..." />
        <div className="flex-display-column faqs">
          <p>Why does it take so long for an addiction to stop ?</p>
          <p>Why does it take so long for an addiction to stop ?</p>
          <p>Are there drugs that helps with addiction ?</p>
          <p>Are there drugs that helps with addiction ?</p>
          <p>How can I contact Royan?</p>
          <p>How can I contact Royan?</p>
          <p>What's the Therapy price like ?</p>
          <p>What's the Therapy price like ?</p>
          <p>
            Are there options for an online meeting if I can't meet her
            physically ?
          </p>
        </div>
      </div>
      <div className="flex-display-column send-questions">
        <h4>Your Question was not in the FAQ ?</h4>
        <h4>
          Post your questions here, Royan will do her best to attend to them all
          !
        </h4>
        <input type="text" placeholder="Type your questions here ..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Blog;
