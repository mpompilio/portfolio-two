import React from 'react';

function About() {
  return (
    <section className="my-5" id="about-me">

            <h2 className="section-header">
                About Me
            </h2>

        <div className="about-me-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus lobortis ipsum in tempus.
                Fusce dignissim, elit eu hendrerit pretium, lorem ante viverra neque, id bibendum ante augue quis arcu.
                Curabitur convallis augue eu dui hendrerit aliquet fermentum sit amet justo. Cras vel nulla bibendum,
                semper purus sed, euismod sapien. Integer et nisl sed velit porttitor tempus non id enim. Mauris dictum
                massa nec massa viverra convallis. Morbi vitae lacinia ipsum, quis fringilla felis.</p>
            <img src={require("../../assets/images/Business-Headshot.jpeg")} className='headshot'/>
        </div>
    </section>
  );
}

export default About;


