/* 
 * Author: Andrew Basore
 * 
 * Navigational component that links to different useful sections of appliaction
 * 
 */


// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';


// Export the component
module.exports = class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className="header">
                <Link to="/"><img  src="img/ap-logo.png"/></Link>
                <Link className="" to='/calendar'>Calendar</Link>
                <Link className="" to='/flaggers'>Flaggers</Link>
                <Link className="" to='/calendar'>Map</Link>
            </nav>
        )
    }
}