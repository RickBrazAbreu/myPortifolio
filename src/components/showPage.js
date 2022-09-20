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
        
        
        return(
            <div className="hold-everything-pg1" >
                <div className="hold-sections">
                
                {/* SECTION 1 */}
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

                {/* SECTION 2 */}
                <section  id="about-me">
                    <div className="bg-color-1">
                        <h1>PROJECTS</h1>
                        {/* \// STYLE FOR CARDs
                            const cardContainerStyle = {
                                display: 'flex',
                                flexFlow: 'row wrap',

                                <Col md='4'>
                                <Card style={{width: '100%', margin: 5, borderRadius:'20px', backgroundColor:'rgb(58 ,95, 95)', color:'white'}} key={patient._id}>
                                    <Card.Header>{ patient.name }</Card.Header>
                                    <Link to={`/patients/${patient._id}`}>
                                        <Image fluid={true} src={profilePicture} alt='placeholder image for patient photo'/>
                                    </Link>
                                    <Card.Body>
                                        <Card.Text>
                                            <Link style={{color: 'white'}} to={`/patients/${patient._id}`}>View</Link> 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                                
                            } */}
                            <Container>
                                <div style={cardContainerStyle} className='cards-fix'>
                                    <div className="cardss">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={ProjectPicture1} />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
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
                                                <Button variant="primary">Go somewhere</Button>
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
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                
                            </Container>
                        
                       
                            {/* <div className="row">
                                <div className="container-cards col-md-3 cards-space">
                                    <div className="cards-box">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={ProjectPicture1} />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="cards-box">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={ProjectPicture1} />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="cards-box">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={ProjectPicture1} />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="cards-box">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={ProjectPicture1} />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    
                                    
                                   
                                </div>

                                
                            </div> */}

                            
                            

                            
                            
                      
                        {/* <Nav.Link id="btn-home" className="btn-home" href="#home" >
                            <div className="btn-home-arrow">△</div>
                        </Nav.Link> */}
                    </div>
                </section>

                {/* SECTION 3 */}
                <section  id="projects">
                    <div className="bg-color-2">
                        <h1>section 3</h1>
                        {/* <Nav.Link id="btn-home" className="btn-home" href="#home" >
                            <div className="btn-home-arrow">△</div>
                        </Nav.Link> */}
                    </div>
                </section>

                {/* <Nav.Link className="btn-home" href="#home">
                    <div className="btn-home-arrow">△</div>
                </Nav.Link> */}

                

                </div>



                {/* <Nav.Link id="btn-home" className="btn-home" href="#home" >
                    <div className="btn-home-arrow">△</div>
                </Nav.Link> */}

            

                
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