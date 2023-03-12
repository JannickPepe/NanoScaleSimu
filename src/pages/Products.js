import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import HeroVideo from "../components/produkter/produktVideo";
import Mor from '../components/produkter/forløbGuide'
import Far from "../components/produkter/forløbInfo";
import VerticalTabs from "../components/produkter/produktSektion";


function Products() {
    return (
        <div className="Products">     
            <Container fluid>   
                
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12}>
                        <div className='hero-video'>
                            <HeroVideo/>
                        </div>
                    </Col>
                </Row>
    
                <Row className="">
                    <div className="produkt-forløb-titel text-center">
                        <h2>Vores Projekt Forløb</h2>
                        <hr></hr>
                    </div>
                    <Col className="" sm={12} md={12} lg={4} xl={4} style={{display: "flex", justifyContent: "end", alignItems: "center"}}>
                        <div className="produkt-forløb-left text-center">
                            <h3 className="">Projekt Forløb Info</h3>
                            <Far/>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={8} xl={8}>
                        <div className="produkt-forløb-right text-center">
                            <h3 className="">Projekt Forløb Proces</h3>
                            <Mor/>
                        </div>
                    </Col>
                </Row>

                <div className="produkt-sektion">
                    <Row>
                        <Col>
                            <div className="produkt-sektion-titel text-center">
                                <h2>Vores Produkter</h2>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VerticalTabs/>
                        </Col>
                    </Row>

                </div>

            </Container>
        </div>
    );
}


export default Products;