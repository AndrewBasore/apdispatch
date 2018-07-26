/*
 * Author: Andrew Basore
 * Layout Component is the main component of the dispatch application.
 * It is composed of a Navbar
 */
import React from 'react';
import Navbar from './Navbar.js';
import Main from './Main.js';

//Layout class is a component that governs the layout of our webapp
module.exports = class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar />
                <Main />
            </div>
        )
    }
}

