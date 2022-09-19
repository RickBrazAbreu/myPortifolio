import React, { Component } from "react";
// import { Container} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import profilePicture from '../imgs/profile.JPEG'
import Button from 'react-bootstrap/Button';
// import { Nav} from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

import Typical from 'react-typical'




export default class ShowPage extends Component {
    render() {
        
        
        return(
            <div className="hold-everything-pg1" >
                <div className="hold-sections">
                
                <section id="home">
                    <div className="container-showPage">
                        <div className="introducing">

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
                        <img src={profilePicture} class="img-fluid prof-pic" alt="Responsive image"/>
                        </div>
                    </div>
                </section>

                <section  id="about-me">
                    <div className="bg-color-1">
                        <h1>section 2</h1>
                        <Nav.Link id="btn-home" className="btn-home" href="#home" >
                            <div className="btn-home-arrow">△</div>
                        </Nav.Link>
                    </div>
                </section>

                <section  id="projects">
                    <div className="bg-color-2">
                        <h1>section 3</h1>
                        <Nav.Link id="btn-home" className="btn-home" href="#home" >
                            <div className="btn-home-arrow">△</div>
                        </Nav.Link>
                    </div>
                </section>

                {/* <Nav.Link className="btn-home" href="#home">
                    <div className="btn-home-arrow">△</div>
                </Nav.Link> */}

                

                </div>



                <Nav.Link id="btn-home" className="btn-home" href="#home" >
                    <div className="btn-home-arrow">△</div>
                </Nav.Link>

            

                
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