import React from 'react';

function footer() {

    return(

        <section>
            <footer>
               <a href="https://github.com/mpompilio" >
                <img src={require("../../assets/images/GitHub-Mark-32px.png")} />
               </a>
               <a href="https://www.linkedin.com/in/matthew-pompilio-640158a2">
                <img src={require("../../assets/images/linkedin.png")} />
                </a>
                <a href="http://twitter.com/pommpilio">
                <img src={require("../../assets/images/twitter.png")} />
                </a>
            </footer>

        </section>
    );
}

export default footer;