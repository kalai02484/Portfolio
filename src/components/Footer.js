import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiLinkedinFill, RiFacebookFill, RiInstagramLine, RiGithubLine, RiCopyrightLine } from "react-icons/ri";
import '../components/style.css';


function Footer() {
    return (
        <section className="footer">
            <Container className="py-5">
                <Row className="p-5">
                    <Col xs={12} className="text-center">
                        <div class="d-flex justify-content-center mb-4">
                            <a class="btn btn-light btn-social me-2" href="#"><RiLinkedinFill size={20} className="text-dark" /></a>
                            <a class="btn btn-light btn-social me-2" href="#"><RiFacebookFill size={20} className="text-dark" /></a>
                            <a class="btn btn-light btn-social me-2" href="#"><RiInstagramLine size={20} className="text-dark" /></a>
                            <a class="btn btn-light btn-social" href="#"><RiGithubLine size={20} className="text-dark" /></a>
                        </div>
                        <p class="m-0"><RiCopyrightLine size={20} /> <a class="text-white font-weight-bold" href="#">Domain Name</a>. All Rights Reserved. Designed by <a class="text-white font-weight-bold" href="">Kalai</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;