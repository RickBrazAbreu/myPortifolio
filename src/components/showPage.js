import React, { Component } from "react";
// import { Container} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import profilePicture from '../imgs/profile.JPEG'

export default class ShowPage extends Component {
    render() {
        return(
            <div>
                <section id="home">
                <div className="container-showPage">
                    <div className="introducing">
                        <h2>Hello I'm Pedro</h2><br/>
                        <p>Welcome to my Profile</p>
                    </div>
                    <div className="picture-profile">
                    <img src={profilePicture} class="img-fluid" alt="Responsive image"/>
                    </div>
                </div>
                </section>

                <section id="about-me">
                    <div className="bg-color-1">
                        <h1>section 2</h1>
                    </div>
                </section>
                <section id="projects">
                    <div className="bg-color-2">
                        <h1>section 3</h1>
                    </div>
                </section>

            </div>
            
            
            
        )
    }
}