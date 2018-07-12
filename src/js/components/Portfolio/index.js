import React, { Component } from 'react';
import Project from './Project.js';

/* 
 * @author Andrew Basore
 * 
 * Portfolio component is a stateful React Componen that
 * displays visually projects to the user. We will use
 * css-grid to create a responsive layout, with images that
 * highlight and focus on interactions.
*/

import axios from 'axios';



export default class Portfolio extends Component {
    constructor (){
        super();
        this.state = {
            projects: []
        };
    }

    //loads project data via axios request and appends them to state property
    componentDidMount(){
        axios.get('/projects').then( (res) =>{
            this.setState( () => {
                return {projects: res.data.projects};
            })
        })
    }


    
    render() {

        if(this.state.projects.length > 0){
            var projects = this.state.projects;        
            return (
                <div className="container portfolio">
                    <header className="main-header">
                        <h1 className="name"><span>Portfolio</span></h1>
                    </header>
        
                    <div className="content">
                        {
                            projects.map( (project) =><Project project={project}/>)
                        }                   
                    </div>	
        
                </div>
        
            )
        } else {
            return <div>Error</div>
        }
        
    }
}
