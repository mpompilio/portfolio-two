import React , { useState } from 'react';

function Portfolio() {
    return(
      
        <section class="work" id="work">
            <div class="flex-row">
                <h2 class="work-header">Work</h2>
            </div>
    
        
            <div class="main-work">
                <a href="https://mpompilio.github.io/FoodDashAPP/" >
                    <img src={require("../../assets/images/tunebook.jpeg")} alt="run buddy image" />
                </a>
                <div class="image-tag">
                    <a href="https://vast-woodland-57588.herokuapp.com/" >
                        <h3>tunebook</h3>
                        <p>HTML/CSS/JS</p>
                    </a>
                </div>
            </div>
    
            <ul class="secondary-work">
    
                <li>
                    <div class="secondary-work">
                        <a href="https://mpompilio.github.io/code-refactor/">
                            <img src={require("../../assets/images/Horiseon.jpeg")} alt="Horiseon" class="worklist-img" />
                        </a>
                        <div class="second-image-tag">
                            <a href="https://mpompilio.github.io/code-refactor/">
                                <h3>Horiseon</h3>
                                <p>HTML/CSS</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="secondary-work">
                        <a href="https://mpompilio.github.io/run-buddy/">
                            <img src={require("../../assets/images//fakeproject1.jpeg")} alt="Fake Project 1" class="fakeproject1" />
                        </a>
                        <div class="second-image-tag">
                            <a href="https://mpompilio.github.io/run-buddy/">
                                <h3>Fake Project 1</h3>
                                <p>HTML/CSS</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="secondary-work">
                        <a href="https://mpompilio.github.io/run-buddy/">
                            <img src={require("../../assets/images/Horiseon.jpeg")} alt="Fake Project 2" class="worklist-img" />
                        </a>
                        <div class="second-image-tag">
                            <a href="https://mpompilio.github.io/run-buddy/">
                                <h3>Fake Project 2</h3>
                                <p>HTML/CSS</p>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;