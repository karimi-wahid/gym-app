import React from 'react';
import aboutImage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutImage} alt="" />
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora ex debitis modi voluptatum adipisci voluptas possimus? Distinctio cupiditate aperiam, laudantium quisquam nostrum non labore?</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default About