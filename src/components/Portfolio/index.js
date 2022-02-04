import React , { useState } from 'react';

function Portfolio() {
    return(
      
        <section class="work" id="work">
            <div class="flex-row">
                <h2 class="work-header">Work</h2>
            </div>
    
        
            <div class="main-work">
                <a href="https://radiant-springs-59444.herokuapp.com/" >
                    <img src={require("../../assets/images/nfteez.png")} alt="run buddy image" />
                </a>
                <div class="image-tag">
                    <a href="https://radiant-springs-59444.herokuapp.com/" >
                        <h3>nfteez</h3>
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
                                <h3 className='tag-font'>Horiseon</h3>
                                <p className='tag-font'>HTML/CSS</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="secondary-work">
                        <a href="https://mpompilio.github.io/run-buddy/">
                            <img src={require("../../assets/images/run-buddy.jpeg")} alt="Run-Buddy" class="worklist-img" />
                        </a>
                        <div class="second-image-tag">
                            <a href="https://mpompilio.github.io/run-buddy/">
                                <h3 className='tag-font'>Run-Buddy</h3>
                                <p className='tag-font'>HTML/CSS</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="secondary-work">
                        <a href="https://mpompilio.github.io/FoodDashAPP/">
                            <img src={require("../../assets/images/FoodDashAPP.jpeg")} alt="FoodDashApp" class="worklist-img" />
                        </a>
                        <div class="second-image-tag">
                            <a href="https://mpompilio.github.io/FoodDashAPP/">
                                <h3 className='tag-font'>FoodDashAPP</h3>
                                <p className='tag-font'>HTML/CSS/JS</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="secondary-work">
                        <a href="https://cryptic-plains-83438.herokuapp.com/">
                            <img src={require("../../assets/images/note-taker.png")} alt="Note Taker" class="worklist-img" />
                        </a>
                        <div class="second-image-tag">
                            <a href="https://cryptic-plains-83438.herokuapp.com/">
                                <h3 className='tag-font'>Note-Taker</h3>
                                <p className='tag-font'>HTML/CSS/JS</p>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="secondary-work">
                        <a href="https://stark-reef-04391.herokuapp.com/">
                            <img src={require("../../assets/images/zoo-keepr.png")} alt="Zoo-Keepr" class="worklist-img" />
                        </a>
                        <div class="second-image-tag">
                            <a href="https://stark-reef-04391.herokuapp.com/">
                                <h3 className='tag-font'>Zoo Keepr</h3>
                                <p className='tag-font'>HTML/CSS/JS</p>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;