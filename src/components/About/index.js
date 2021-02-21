import React from 'react'
import './About.css'
import img from '../Images/zdjecie.png'

function About() {
    return (
        <div className="aboutCol" id="about">
            <div className="aboutRow">
                <h1 className="title">Few words about me</h1>
                <img className="image-about" src={img} width="200px" height="250px" />
                <p className="text-about">Hello! My name is Krzysztof and I'm a programmer with passion for computer science. I'm currently a third year student at <a class="text-link" href="https://www.umk.pl/en/"> Nicolaus Copernicus University </a>pursuing a engineer degree in <a class="text-link" href="https://www.mat.umk.pl/en_GB/web/en/studies">Computer&nbsp;Science.</a></p>
            </div>
        </div>
    )
}

export default About
