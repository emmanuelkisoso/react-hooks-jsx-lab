import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>Wow</p>
    <img src={image} alt="I Made This" />
  </div>
  )
}

export default About;
