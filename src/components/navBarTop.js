import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

export default class NavBarTop extends Component {
    render() {
        return(
            <div>
                <Navbar  className="bg-nav-bar"  expand="lg navbar-expand-md ">
                    <Container>
                    <Navbar.Brand  href="#home"> <p className="word-color-white">Portifolio</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="me-auto">
                        <Nav.Link  href="#home"> <p className="word-color-white">Home</p></Nav.Link>
                        <Nav.Link  href="#about-me"> <p className="word-color-white">About Me</p></Nav.Link>
                        <Nav.Link  href="#projects"> <p className="word-color-white">Projects</p></Nav.Link>
                        <Nav.Link  href="#contact-me"> <p className="word-color-white">Contact Me</p> </Nav.Link>
                        {/* <NavDropdown title="Projects" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">TicTacToe</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Travel Guide</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Virtual Store</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        {/* ola antes de contaa..c.*/}
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                
            </div>




        )
    }
}




// data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e