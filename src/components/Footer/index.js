import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div class="footerCol">
            <div class="footerRow">
                <a href="https://github.com/niemczykk"><img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" /></a>
                <div class="author">
                    <img className="img-footer" src="https://img.icons8.com/metro/26/ffffff/copyright.png"/>
                    <p className="text-footer">Krzysztof Niemczyk 2021</p>
                </div>
            </div>
        </div>  
    )
}

export default Footer
