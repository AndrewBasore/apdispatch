import React from 'react';
import store from './../store.js';

const getDayOfWeek = (num) =>{
    switch(num){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            return "Number is out of range"
    }
}

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
                <h2>Today is {getDayOfWeek(calendar.today)}</h2>
            </div>
        )
    }
}