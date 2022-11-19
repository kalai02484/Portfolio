import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/style.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skill() {
    return (
        <section className="bg-white py-5" id="skills">
            <Container>
                <span className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white">Skills</h1>
                    <h1 className="position-absolute text-uppercase text-primary mb-0">My Skills</h1>
                </span>
                <Row className="pt-md-4">
                    <Col xs={12} md={6} lg={6} className="px-4">
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold text-uppercase">HTML</h6>
                                <h6 className="font-weight-bold">95%</h6>
                            </div>
                            <ProgressBar now={90} variant="primary"/>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold text-uppercase">CSS</h6>
                                <h6 className="font-weight-bold">85%</h6>
                            </div>
                            <ProgressBar now={85} variant="danger"/>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold text-uppercase">Javascript</h6>
                                <h6 className="font-weight-bold">70%</h6>
                            </div>
                            <ProgressBar now={70} variant="info"/>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold text-uppercase">Bootstrap</h6>
                                <h6 className="font-weight-bold">80%</h6>
                            </div>
                            <ProgressBar now={80} variant="secondary" />
                        </div>

                    </Col>
                    <Col xs={12} md={6} lg={6} className="px-4">

                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold text-uppercase">JQUERY</h6>
                                <h6 className="font-weight-bold">95%</h6>
                            </div>
                            <ProgressBar now={60} variant="warning" />
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold text-uppercase">Photoshop</h6>
                                <h6 className="font-weight-bold">70%</h6>
                            </div>
                            <ProgressBar now={70} variant="primary" />
                        </div>

                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold text-uppercase">REACT JS</h6>
                                <h6 className="font-weight-bold">Loading..(Learning React)</h6>
                            </div>
                            <ProgressBar striped now={50} variant="success" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skill;