import React, { Component } from 'react'

export default class Project extends Component {
    constructor(props){
        super(props);
    }
  
    render() {
        let project = this.props.project;
        
    return (
      
    <div className="cube-container">
        <div className="photo-cube">
            <img className="front" src={project.backgroundImage} alt=""/>
            <div className="back photo-desc">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
                <a href={project.href} className="button">website</a>
                <a href={project.code} class="button">code</a>
            </div>
            <img className="left" src="img/photos/2.jpg" alt=""/>
            <img className="right" src="img/photos/3.jpg" alt=""/>
        </div>
    </div>	
      
    )
  }
}
