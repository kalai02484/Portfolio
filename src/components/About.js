import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../components/style.css';
import AboutImg from '../img/about.jpg';
import { ArrowRightCircle } from 'react-bootstrap-icons';

function About() {
    return (
        <section className="About_section bg-white pt-3 pb-5" id="about">
            <Container>
                <span className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white">About</h1>
                    <h1 className="position-absolute text-uppercase text-primary mb-0">About Me</h1>
                </span>
                <Row className="align-items-center">
                    <Col xs={12} md={4} lg={5} className="p-4 text-center">
                        <Image fluid rounded src={AboutImg} width="100%"></Image>
                    </Col>
                    <Col xs={12} md={8} lg={7} className="p-4 d-flex flex-column justify-content-center">
                        <h3>UI Designer & Web Developer</h3>
                        <p>Passionate and highly effective developer who has successfully make applications for Web. Well- educated and poised with more than 2.5 years expertise. Seeking an exciting
opportunity to create and design apps for a company in various sector.</p>
                        <Row>
                            <Col xs={12} md={5} lg={5}>
                                <p>Name: Kalaimani</p>
                            </Col>
                            <Col xs={12} md={5} lg={5}>
                                <p>Degree: Bachelor</p>

                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5}>
                                <p>Phone: +91 8940262218</p>

                            </Col>
                            <Col xs={12} md={5} lg={5}>
                                <p>Address: Villupuram, Tamil Nadu.</p>

                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5}>
                                <p>Birthday: 16 August 1997</p>

                            </Col>
                            <Col xs={12} md={5} lg={5}>
                                <p>Experience: 2.5 Years</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5}>
                                <p>Email: kalai02484@gmail.com</p>
                            </Col>
                            <Col xs={12} md={5} lg={5}>
                                <p>Freelance: Available</p>
                            </Col>
                        </Row>
                        <button className="vvd2 mt-4" onClick={() => console.log('connect')}>Hire Me <ArrowRightCircle className="ms-3" size={25} /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;