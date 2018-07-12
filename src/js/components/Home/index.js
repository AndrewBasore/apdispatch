import React, { Component } from 'react';
import Contact from './Contact.js';

export default class Home extends Component {

  handleClick(){
    let firebaseRef = firebase.database().ref();
    firebaseRef.child("text").set("Some Value");
  }

  render() {
    return (
      <div className="home">
        <h1>Andrew Basore</h1>
        <img src="/img/face-square.jpg" id="face" alt="Face of Andrew Basore"/>
        <p>Welcome to my website! This portfolio of sample projects belongs to a Fullstack Web Developer. Built with popular front-end languages and frameworks like Javascript, React, Webpack, and CSSGrid this expresses the experience required to shine light on any brand on the web! Please feel free to contact me via E-mail or social media below.   </p>
        <br />
        <Contact />
      </div>
    )
  }
}
