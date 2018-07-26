/* 
 *@author Andrew Basore
 * Intent:
 * Main entrypoint for React application. We import React
 * to create a component to render with ReactDOM. This
 * is also the entrypoint for webpack to compile our JS  
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';


import css from "./css/main.scss";




//Connect Layout with BrowserRouter and render it out to div#app
ReactDOM.render((
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
   
), document.getElementById('app'));
