/** @format */

import React from "react";
import Header from "./components/header/header.jsx";
import Hero from "./components/herosection/hero.jsx";
import About from "./components/about/about.jsx";
import Testimonies from "./components/testimonies/testimonies.jsx";
import Subscribe from "./components/subscribe/subscribe.jsx";
import Footer from "./components/footer/footer.jsx";
import Blog from "./components/blog/blog.jsx";

function App(props) {
  return (
    <div>
      {/* <Header />
      <Blog />
      <Footer /> */}
      <Header />
      <Hero />
      <About />
      <Testimonies />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
