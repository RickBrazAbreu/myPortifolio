import React,  { Component } from "react";
// import { Container} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import profilePicture from '../imgs/profile.JPEG'
import Button from 'react-bootstrap/Button';
// import { Nav} from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Container, Row} from 'react-bootstrap'
import Typical from 'react-typical'
import CardsProjects from "../cards/cards";

import Card from 'react-bootstrap/Card';
import ContactMe from "../contactMe/contactme";
import { useState } from 'react';

import ProjectPicture1 from '../imgs/medics.jpeg'
import AmazonGamePicture from '../imgs/amazongame.jpeg'
import tictactoePicture from '../imgs/tictactoe.jpeg'


import divisa from '../imgs/stars.PNG'






export default class ShowPage extends Component {




    
     render() {

        // STYLE FOR CARDs
        const cardContainerStyle = {
            display: 'flex',
            flexFlow: 'row wrap',
        }

       
        
        
        window.addEventListener('scroll', () =>{
            const scrolled = window.scrollY;


        })

        
        
        
        
        return(
            
            
            <div className="hold-everything-pg1" >

                
                <div className="hold-sections">
                
                    {/* SECTION 1 */}
                    <section class="section1-home-color" id="home">
                        <div className="section1">
                            
                                <div className="introducing-section1">
                                
                                    <h1 className="word-color-white">Hey, I'm Pedro.</h1><br/>
                                    <h3 className="word-color-white">Full Stack Software Engineering from<br/>General Assembly Alumni.</h3> 
                                    <h3 className="word-color-white">Creative and responsible professional<br/> with excellent troubleshooting skills.</h3>

                                    {/* <h1 className="word-color-white">Hey, I'm Pedro.</h1><br/>
                                    <h3 className="word-color-white">Full Stack Software Engineering from<br/>General Assembly Alumni.</h3> 
                                    <h3 className="word-color-white"> I create custom websites<br/>  to help businesses do better online.</h3> */}
                                    <div>
                                        {/* HERE I made the text effect infinity loop in movement,.. */}
                                        {""}
                                        <Typical 
                                        className="word-color-white"
                                        loop={Infinity} 
                                        //Steps Changing following time "1000.."
                                        steps={[ 
                                            "Ethusiastic Dev 🚨",
                                            2000,
                                            "Full Stack Developer 🤓",
                                            2000,
                                            "React Developer 🚀",
                                            2000,
                                            "Mongo Db / Express 💻",
                                            2000,
                                        ]}
                                        />
                                    </div>
                                    {/* <a>Fluent Portuguese English Spanish Game Developer</a> */}
                                </div>
                                <div className="picture-profile">
                                <img src={profilePicture} className="img-fluid prof-pic" alt="Responsive image"/>
                                </div>
                               
                            
                        </div>
                        <div className="divisa-img-adjuste">
                          <img className="divisa-img" src={divisa}/>
                        </div>
                        
                    </section>

                    {/* SECTION 2 */}
                    <section className="section2"  id="projects">
                        <div className="bg-color-2">
                            <h1 className="section2-text-color">Projects</h1>
                        
                                <div>
                                    <div className="cards-holder" style={cardContainerStyle} >
                                        <div className="cardss">
                                            <Card className="whitboard-text-cards" style={{ width: '19rem', height:'auto'}}>
                                                <Card.Img variant="top" src={ProjectPicture1} />
                                                <Card.Body className="text-inthe-cards">
                                                    <Card.Title>Medics</Card.Title>
                                                    <Card.Text class="overflow-auto">
                                                    <div className="scroll-div">
                                                        <div className="scroll-object">
                                                        This is a MERN stack application using Node.js and React.For the styling in the front-end were used Bootstrap.
                                                        The client connects via Express with Mongoose to the MongoDB server on the backend.
                                                        Patient data is seeded in the mongoDB server according to the patient model. After that, the data can be manipulated by
                                                        authenticated users inside the client.
                                                        App using React, JavaScript, HTML, CSS, Express, MongoDB, Mongoose, deployment with Heroku.

                                                        
                                                        </div>
                                                    </div>
                                                   
                                                    </Card.Text>
                                                    <div >
                                                      <Button className="btn-proj" variant="primary" href="https://themedicapp.herokuapp.com/" target="_blank">Go to Project</Button>
                                                      <Button className="btn-proj" variant="primary" href="https://github.com/RickBrazAbreu/ga-project-3-client" target="_blank">GitHub</Button>
                                                    </div>

                                                </Card.Body>
                                            </Card>
                                        </div>


                                        <div className="cardss">
                                            <Card className="whitboard-text-cards" style={{ width: '19rem', height:'auto'}}>
                                                <Card.Img variant="top" src={AmazonGamePicture} />
                                                <Card.Body className="text-inthe-cards">
                                                    <Card.Title>Amazon Game</Card.Title>
                                                    <Card.Text class="overflow-auto">
                                                    <div className="scroll-div">
                                                        <div className="scroll-object">
                                                        - This is a game I made while attending the #generalassembly Coding BootCamp.
                                                        - App using JavaScript, HTML, CSS,deployment with Netfly.

                                                        - This game is a desktop version. (No mobile).
                                                        - A game that presented me with many challenges, but I never gave up.
                                                        - To create this game I used JavaScript, HTML , CSS and a lot of Patience lol.
                                                        - I had to put a lot functions running simultaneously checking every movement the
                                                        character made inside the canvas.
                                                        - Also, to implement the "Enemies" in the game I had to console.log and check every
                                                        distance in the game to make sure the enemies were placed in the correct spots!
                                                        - I had to add colliders on every object in the scene ex: platforms, the river, ground,
                                                        enemies and also the player.
                                                        
                                                        </div>
                                                    </div>
                                                   
                                                    </Card.Text>
                                                    <div>
                                                    <Button variant="primary" href="https://benevolent-clafoutis-be601c.netlify.app" target="_blank">Go to Project</Button>
                                                    <Button className="btn-proj" variant="primary" href="https://github.com/RickBrazAbreu/Project1_AmzonGame" target="_blank">GitHub</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        

                                        <div className="cardss">
                                            <Card className="whitboard-text-cards" style={{ width: '19rem', height:'auto'}}>
                                                <Card.Img variant="top" src={tictactoePicture} />
                                                <Card.Body className="text-inthe-cards">
                                                    <Card.Title>TicTacToe</Card.Title>
                                                    <Card.Text class="overflow-auto">
                                                    <div className="scroll-div">
                                                        <div className="scroll-object">
                                                        This is a TicTacToe game, made with JavaScript controlling and checking with functions every movement in HTML and CSS. I added "addEventListener" in each block "div" inside the html,
                                                        checking every click and returning false to a boolean as soon as you click on it, also everytime a boolean is returned false it automatically switch the "TurnPlayer" ,
                                                        this way you got two active players having fun in the same time. When the game is done you have the button "RESTART" using "location.reload()" to reload the page.

                                                        
                                                        </div>
                                                    </div>
                                                   
                                                    </Card.Text>
                                                    <div>
                                                       <Button className="btn-proj" variant="primary" href="https://inspiring-sable-10ea50.netlify.app/" target="_blank">Go to Project</Button>
                                                       <Button className="btn-proj" variant="primary" href="https://github.com/RickBrazAbreu/TICTACTOE" target="_blank">GitHub</Button>
                                                    </div>

                                                </Card.Body>
                                            </Card>
                                        </div>

                                       
                                        
                                    </div>
                                    
                                </div>
                            
                        </div>
                        <div className="divisa-img-adjuste">
                          <img className="divisa-img" src={divisa}/>
                        </div>
                    </section>

                    {/* SECTION 3 */}
                    <section  id="about-me">
                        <div className="bg-color-3">
                            <h1 className="section3-text-color">About me</h1> 
                                <div className="text-aboutme">
                                    <div className="text-aboutme-adjust">
                                       <h1 className="word-color-white ">Hey, I'm Pedro.</h1><br/>
                                       <h3 className="word-color-white ">Full Stack Software Engineering from<br/>General Assembly Alumni.</h3> 
                                       <h3 className="word-color-white ">Creative and responsible professional<br/> with excellent troubleshooting skills.</h3>
                                    </div>
                                </div>

                            <div className="divisa-img-adjuste">
                              <img className="divisa-img" src={divisa}/>
                            </div>
                        </div>
                       
                    </section>


                    {/* SECTION 4 */}
                    <section  id="contact-me">
                        <div className="section4">
                            <h1 className="section4-text-color">Contact me</h1>
                            <div className="col">
                                <div className="cols-icon">
                                    <a className="icon-contact" href="https://www.linkedin.com/in/henrique-abreu-hoff/" target="_blank">
                                        <v className="fab fa-linkedin fa-4x"/>
                                    </a>
                                    <a className="icon-contact" href="https://github.com/RickBrazAbreu?tab=repositories" target="_blank">
                                        <v className="fab fa-github fa-4x"/>
                                    </a>
                                </div>
                            </div>

                            {/* <div className="section4-text-color ">
                                <h2 className="section4-email">Email:  henriqueibtou@gmail.com</h2>
                            </div> */}
                            <footer>
                                <div className="section4-text-color ">
                                    <h2 className="section4-email">Email:  henriqueibtou@gmail.com</h2>
                                </div>   
                            </footer>
                            
                           
                            {/* <ContactMe/> */}

                            
                            
                        
                        </div>
                    </section>

                    

                </div>

                <i id="btn-home" className="show-btn">
                    <Nav.Link  className="btn-logo"  href="#navtop" >
                      <p className="btn-center">△</p>
                    </Nav.Link>
                </i>
                    
        
            </div>
            
            
            
            
        )
    }
}



// window.onscroll = function() {myFunction()};
        // function myFunction() {
        // if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        //     console.log('moveu scroll down')
        //     // document.getElementById("myImg").className = "slideUp";
        //  }else if (document.body.scrollTop < 350 || document.documentElement.scrollTop < 350){
        //     console.log('moveu scroll up')

        //  }
        // }

        // function myFunction() {
        // if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        //     document.getElementById("myImg").className = "slideUp";
        // }
        // }
        

        // window.onscroll = function(ev) {
        //     if ((window.innerHeight + window.scrollY) >= -2) {
        //         console.log('moveu scroll')
        //         // you're at the bottom of the page
        //         document.getElementById( 'btn-home' ).style.display = 'block';

        //     }
        // };