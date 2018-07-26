/*
 * Author: Andrew Basore
 * Main Component holds all rendering logic for front-end routes.
 * Look here for issues with React-Router
 */ 
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import Flaggers from './Flaggers';
import Locations from './Locations';

module.exports = class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/flaggers" component={Flaggers} />
                <Route path="/map" component={Locations} />
            </Switch>
        );
    }
}