import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

export default class NavBarTop extends Component {
    render() {
        return(
        
            <ii >
                
                 {/* <Navbar id="navtop" className="navbar bg-nav-bar nav-fix-open"  expand="lg navbar-expand-md ">
                    <Container>
                     <Navbar.Brand  href="#navtop"> <p className="nav-btn-scale word-color-white">Portfolio</p></Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav  " className="passing-tabs-flex">
                        <Nav className="me-auto passing-tabs">
                        <Nav.Link  href="#navtop"> <p className="nav-btn-scale word-color-white">Home</p></Nav.Link>
                        <Nav.Link  href="#projects"> <p className="nav-btn-scale word-color-white tabs">WORK</p></Nav.Link>
                        <Nav.Link > <p className="nav-btn-scale word-color-white tabs tabs-i">|</p></Nav.Link>
                        <Nav.Link  href="#about-me"> <p className="nav-btn-scale word-color-white tabs">ABOUT</p></Nav.Link>
                        <Nav.Link  > <p className="nav-btn-scale word-color-white tabs tabs-i">|</p></Nav.Link>
                        <Nav.Link  href="#contact-me"> <p className="nav-btn-scale word-color-white tabs">CONTACT</p> </Nav.Link>
                        </Nav>
                     </Navbar.Collapse>
                 </Container>
                  </Navbar>  */}

                  <Navbar bg="light" expand="lg navbar-expand-md">
                        <Container>
                            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                
                                {/* <Nav.Link  href="#navtop"> <p className="nav-btn-scale word-color-white">Home</p></Nav.Link> */}
                                <Nav.Link  href="#projects"> <p className="nav-btn-scale word-color-white tabs">WORK</p></Nav.Link>
                                <Nav.Link > <p className="nav-btn-scale word-color-white tabs tabs-i">|</p></Nav.Link>
                                <Nav.Link  href="#about-me"> <p className="nav-btn-scale word-color-white tabs">ABOUT</p></Nav.Link>
                                <Nav.Link  > <p className="nav-btn-scale word-color-white tabs tabs-i">|</p></Nav.Link>
                                <Nav.Link  href="#contact-me"> <p className="nav-btn-scale word-color-white tabs">CONTACT</p> </Nav.Link>
                                    {/* <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">
                                                Separated link
                                            </NavDropdown.Item>
                                    </NavDropdown> */}
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>

               
                
                
            </ii>




        )
    }
}




// data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e