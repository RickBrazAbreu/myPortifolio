import React, { Component } from "react";
// import { Container} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import profilePicture from '../imgs/profile.JPEG'
import Button from 'react-bootstrap/Button';
// import { Nav} from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Container, Row} from 'react-bootstrap'
import Typical from 'react-typical'
import CardsProjects from "../cards/cards";
import ProjectPicture1 from '../imgs/medics.jpeg'
import Card from 'react-bootstrap/Card';







export default class ShowPage extends Component {
    render() {
        // STYLE FOR CARDs
        const cardContainerStyle = {
            display: 'flex',
            flexFlow: 'row wrap',
        }
        
        // $(document).ready(function () {
        //     //your code here
        //     window.addEventListener('scroll', () =>{
        //         const scrolled = window.scrollY;
    
        //         if(this.scrollY > 200){
        //             document.getElementById( '.btn-home' ).addClass( "show-btn" )
        //             //document.getElementById("btn-home").addClass("show-btn")
        //         }else{
        //             document.getElementById( '.btn-home' ).removeClass( "show-btn" )
        //             //document.getElementById("btn-home").removeClass("show-btn")
        //         }
                
        //        // $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
        //         // if(this.scrollY > 500){
        //         //     $('.scroll-up-btn').addClass("show");
        //         // }else{
        //         //     $('.scroll-up-btn').removeClass("show");
        //         // }
    
        //     })
        //   });
        window.addEventListener('scroll', () =>{
            const scrolled = window.scrollY;

            // if(this.scrollY > 200){
            //     document.getElementById( '.btn-home' ).addClass( "show-btn" )
            //     //document.getElementById("btn-home").addClass("show-btn")
            // }else{
            //     document.getElementById( '.btn-home' ).removeClass( "show-btn" )
            //     //document.getElementById("btn-home").removeClass("show-btn")
            // }
            
           // $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
            // if(this.scrollY > 500){
            //     $('.scroll-up-btn').addClass("show");
            // }else{
            //     $('.scroll-up-btn').removeClass("show");
            // }

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
                                    <h3 className="word-color-white"> I create custom websites<br/>  to help businesses do better online.</h3>
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
                    </section>

                    {/* SECTION 2 */}
                    <section className="section2"  id="projects">
                        <div className="bg-color-2">
                            <h1 className="section2-text-color">PROJECTS</h1>
                        
                                <div>
                                    <div className="cards-holder" style={cardContainerStyle} >
                                        <div className="cardss">
                                            <Card style={{ width: '18rem'}}>
                                                <Card.Img variant="top" src={ProjectPicture1} />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="primary" href="https://themedicapp.herokuapp.com/" target="_blank">Go to Project</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="cardss">
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={ProjectPicture1} />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="primary" href="https://themedicapp.herokuapp.com/" target="_blank">Go to Project</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div className="cardss">
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={ProjectPicture1} />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="primary" href="https://themedicapp.herokuapp.com/" target="_blank">Go to Project</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                        </div>
                    </section>

                    {/* SECTION 3 */}
                    <section  id="about-me">
                        <div className="bg-color-3">
                            <h1>section 3</h1>

                        
                        </div>
                    </section>
                    {/* SECTION 4 */}
                    <section  id="contact-me">
                        <div className="section4">
                            <h1 className="section3-text-center">Contact Me</h1>
                            
                        
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