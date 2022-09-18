import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

export default class NavBarTop extends Component {
    render() {
        return(
            <div>
                <Navbar className="bg-nav-bar"  expand="lg navbar-expand-md ">
                    <Container>
                    <Navbar.Brand href="#home">Portifolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about-me">About Me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact-me">Contact Me</Nav.Link>
                        {/* <NavDropdown title="Projects" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">TicTacToe</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Travel Guide</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Virtual Store</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                
            </div>
        )
    }
}