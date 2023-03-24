
import React from "react";
import './style.css';


export default function BANNER() {
    return (
          <section className="LimitadorWidth banner-card"  id="Banner">
             <img className="euft" src="./assets/euimg.png"/>
           <div className="card">
             <h1>I'm Luiz Roberto</h1>
             <p className="area">Front-End Developer</p>
            <div>
             <a href="https://www.linkedin.com/in/luiz-roberto-jrn/" target={"_blank"} className='BtnBanner'> Linkedin </a>
             <a href="https://github.com/Luiz047" target={"_blank"} className='BtnBanner'> GitHub </a>
            </div>
           </div>
        </section>
    )
    
}