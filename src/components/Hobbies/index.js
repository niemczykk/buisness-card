import React from 'react'
import './Hobbies.css'

function Hobbies() {
    return (
        <div className="hobbiesCol">
    		<div className="hobbiesRow"><h1 class="title-hobbies">Hobbies and intrests</h1>
    			<div className="inner-row">
    				<div className="inner-item">
                        <img src="https://img.icons8.com/metro/52/ffffff/empty-flag.png"/>
    					<p className="icon-title">Capture the flag</p>
    				</div>
                    <div className="inner-item">
                        <img src="https://img.icons8.com/metro/52/ffffff/computer.png"/>
                        <p className="icon-title">Programming</p>
                    </div>
                    <div className="inner-item">
                        <img src="https://img.icons8.com/material-rounded/48/ffffff/sailing-ship-small.png"/>
                        <p className="icon-title">Sailing</p>
                    </div>
    			</div>
    		</div>
    	</div>
    )
}

export default Hobbies
