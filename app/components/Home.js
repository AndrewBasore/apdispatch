import React from 'react';
import Time from './Time.js';


//Layout class is a component that governs the layout of our webapp
module.exports = class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>This is the Home page! FEEL THE INSPIRATION RRREEEEE</h1>
            </div>
        )
    }
}