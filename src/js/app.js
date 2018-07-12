/* 
 *@author Andrew Basore
 * Intent:
 * Main entrypoint for React application. We import React
 * to create a component to render with ReactDOM. This
 * is also the entrypoint for webpack to compile our JS  
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Portfolio from './components/Portfolio';
import Home from './components/Home/';

import css from "../css/main.scss";


//Layout class is a component that governs the layout of our webapp
class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="header">
                    <Link className="" to="/portfolio">Portfolio</Link>
                    <Link className="" to="/">Home</Link>
                </div>
                <main className="">
                    <div className="page-content">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/portfolio' component={Portfolio}/>
                        </Switch>
                    </div>
                </main>
            </div>
        )
    }
}

//Connect Layout with BrowserRouter and render it out to div#app
ReactDOM.render((
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
   
), document.getElementById('app'));
