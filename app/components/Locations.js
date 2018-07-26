import React from 'react';


//Layout class is a component that governs the layout of our webapp
module.exports = class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Locations services page</h1>
            </div>
        )
    }
}