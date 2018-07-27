import React from 'react';
import store from './../store.js';



//Home page shows a greeting, as well as the day
module.exports = class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {auth, calendar} = store.getState();
        return(
            <div>
                <h1>Hello, {auth.user.name || "Stranger"}! </h1>
                <h2>Today is {calendar.today.dayOfWeek}</h2>
            </div>
        )
    }
}