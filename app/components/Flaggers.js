import React from 'react';


//Layout class is a component that governs the layout of our webapp
module.exports = class Flaggers extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Flaggers by Office</h1>
            </div>
        )
    }
}