import React from 'react';

function Resume() {

    return(
        <section>

        <h1 className="resume-title">Resume</h1>

        <div>
            <a
                href={require("../../assets/documents/Matthew Pompilio_Resume.docx")}
                download
             >
             Download my Resume
            </a>
            </div>


        <h2 className="skills-h2">Front-End Skills</h2>
        <ul>
            <li className="skills-li">HTML</li>
            <li className="skills-li">CSS</li>
            <li className="skills-li">JavaScript</li>
            <li className="skills-li">React</li>
            <li className="skills-li">Bootstrap</li>
            <li className="skills-li">jQuery</li>
        </ul>

        <h2 className="skills-h2">Back-End Skills</h2>
        <ul>
            <li className="skills-li">APIs</li>
            <li className="skills-li">NodeJS</li>
            <li className="skills-li">MongoDB</li>
            <li className="skills-li">SQL</li>
            <li className="skills-li">NoSQL</li>
        </ul>


        </section>
    );
}

export default Resume;