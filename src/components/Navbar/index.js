import React from 'react'
import { Link } from 'react-scroll'
import { NavItems } from "./NavItems.js"
import './Navbar.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <Link
                className="navLogo"
                activeClass="a"
                to="welcome"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-75}
                duration={500}
            > KN </Link>

            <div className="navMenu">
                {NavItems.map((item, index) => {
                    return (
                    <Link
                        key={index}
                        className="navItem" 
                        activeClass="active"
                        to={item.url}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-75}
                        duration={500}
                    > {item.name} </Link>
                )})}
            </div>
        </nav>
    )
}

export default Navbar
