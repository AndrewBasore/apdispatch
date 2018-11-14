/* 
 * Author: Andrew Basore
 * 
 * Navigational component that links to different useful sections of appliaction
 * 
 */


// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';
import Time from './Time.js';


// Export the component
module.exports = class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className="header">
                <Link to="/"><Time /><img  src="/public/img/ap-logo.png"/></Link>
                <Link className="" to='/calendar'> Calendar</Link>
                <Link className="" to='/flaggers'>Flaggers</Link>
                <Link className="" to='/map'>Map</Link>
            </nav>
        )
    }
}