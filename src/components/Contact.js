import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import '../components/style.css';

function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <section className="bg-white py-5" id="contact">
            <Container>
                <span className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white">CONTACT</h1>
                    <h1 className="position-absolute text-uppercase text-primary mb-0">CONTACT ME</h1>
                </span>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={9} lg={8} className="mt-4">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="d-flex justify-content-center">
                                <Form.Group as={Col} md={6} controlId="validationCustom01" className="mb-3">
                                    <Form.Control
                                        className="form-control"
                                        required
                                        type="text"
                                        placeholder="Your name"
                                    />
                                    <Form.Control.Feedback type="invalid">Please Enter Yourname. </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md={6} controlId="validationCustom02" className="mb-3">
                                    <Form.Control
                                        className="form-control"
                                        required
                                        type="email"
                                        placeholder="Enter Email"
                                    />
                                    <Form.Control.Feedback type="invalid">Please Enter Yourname. </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Form.Control
                                        className="form-control"
                                        type="text"
                                        placeholder="Subject"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a Subject.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Message"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide Message.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 justify-content-center d-grid">
                                <Button type="submit" className="vvd2 mt-4" onClick={() => console.log('connect')}>Hire Me <ArrowRightCircle className="ms-3" size={25} /></Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;