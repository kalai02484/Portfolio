import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/style.css';
import Tabs from "../components/portfolio-gallery/Tabs";
import Items from "../components/portfolio-gallery/Items";
import Data from "../components/portfolio-gallery/Data";
import { useState } from "react";

function Projects() {

    const [data, setData] = useState(Data);
    const categoryData = Data.map((value) => {
        return value.category
    });
    const tabsData = ["all", ...new Set(categoryData)];

    const filterCategory = (category) => {
        if (category == "all") {
            setData(Data);
            return;
        }
        const filteredData = Data.filter((value) => {
            return value.category == category;
        })
        setData(filteredData);
    }

    return (
        
        <section className="bg-light py-5" id="projects">
            <Container>
                <span className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white">Gallery</h1>
                    <h1 className="position-absolute text-uppercase text-primary mb-0">My Portfolio</h1>
                </span>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} className="text-center">
                        <Tabs filterCategory={filterCategory} tabsData={tabsData} />
                        <Items data={data} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}



export default Projects;