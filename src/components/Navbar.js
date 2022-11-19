import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useState} from 'react';
import '../components/style.css';
import classNames from "classnames";
import styles from "../components/styles.module.css";
import { HideOn} from "react-hide-on-scroll";
import { FaPowerOff } from "react-icons/fa";

function Navigationbar() {
    const [activeLink, setActiveLink] = useState("home");

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (

        <HideOn height={50} inverse >
            <div className={classNames(styles.sticky, styles.showOnHeight)}>
                <Navbar fixed="top" bg="light" expand="lg" className="shadow">
                    <Container >
                        <Navbar.Brand href="#home">
                            <h1 className="m-0 display-5"><span class="text-primary">Art</span>Folio</h1>
                            {/* <img src={''} alt="Logo"/> */}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav" className="pb-2 pb-md-0">
                            <Nav className="m-auto">
                                <Nav.Link href="#home" data-to-scrollspy-id="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                                <Nav.Link href="#about" data-to-scrollspy-id="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                                <Nav.Link href="#education" data-to-scrollspy-id="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education & Experience</Nav.Link>
                                <Nav.Link href="#skills" data-to-scrollspy-id="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                                <Nav.Link href="#projects" data-to-scrollspy-id="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                                <Nav.Link href="#contact" data-to-scrollspy-id="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                            </Nav>
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href=""><img src={''} alt="" /></a>
                                    <a href=""><img src={''} alt="" /></a>
                                    <a href=""><img src={''} alt="" /></a>
                                </div>
                            </span>
                            <button className="vvd" onClick={() => console.log('connect')}>Download CV</button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
        </HideOn>
        
    );
}

export default Navigationbar;