import React from 'react';
import '../styles/Home.css';

import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';

import ModalEmail from '../components/CTA/ModalEmail';
import Subscriber from '../components/CTA/Subscriber';
import ValueCard from '../components/Forside/VærdiCard';
import UserCase from '../components/Forside/userCase';
import Scientist from '../components/Forside/Scientist';
import Customer from '../components/Forside/Customer';
import FAQ from '../components/Forside/FAQ';
import Video from '../components/Forside/Video';
import ScrollButton from '../components/CTA/ScrollButton';

import UserCaseRight from '../components/Forside/userCaseRight';




function Home() {

    
    return (
        
        <div className="Home">
            <Container fluid>

            
                <div className='hero-wrapper mb-4' >
                    <Row>

                        <Col sm={12} md={12} lg={4} xl={4}>
                            <div className='hero_info'>
                                <div className='hero-title pt-4'>
                                    <motion.div
                                        animate={{ x: [1, 50, 1], opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 3,
                                            delay: 0.3,
                                            ease: [0.5, 0.71, 1, 1.5],
                                        }}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                    >
                                        <h1>Engager Dine Elever Med Interaktive og Realistiske Simuleringer</h1>
                                    </motion.div>
                                </div>
                                <div className='hero-tekst pt-4'>
                                <motion.div
                                    animate={{ x: [5, 95, 5], opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 3,
                                        delay: 0.3,
                                        ease: [0.5, 0.71, 1, 1.5],
                                    }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileHover={{ scale: 1.1}}
                                >
                                    <p>Elevate Your Classroom Teaching With Cutting-edge Molecular Simulations And Interactive Virtual Labs.
                                    </p>
                                </motion.div>
                                </div>
                                <div className='hero-btn mt-4 px-4 pt-4'>
                                    <button type="button" class="btn btn-primary btn-lg">VORES PRODUKTER</button>
                                </div>
                                <div className='hero-link mt-4 mx-2 mb-4'>
                                    <i className="fa fa-envelope px-2"></i><Card.Link href="#">Læs Om Vores Platform I Ingeniøren</Card.Link>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={12} lg={8} xl={8}>
                            <div className='hero-video'>
                                <Video/>
                            </div>
                        </Col>

                    </Row>
                </div>



                <div className='værdi-wrapper'>

                    <Row> 
                        <Col sm={12} md={12} lg={12}>
                            <div  className='værdi-text text-center mt-4 mb-4 text-dark'>
                                <h2>Hvilke værdier bringer vi</h2>
                            </div>
                            <div className='værdi-body mb-4'>
                                <div className='valuecard-komponent p-4'>
                                    <ValueCard/>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='justify-content-lg-center'>
                        <Col sm={12} md={12} lg={6}>
                            <div className='mere justify-content-center px-4 pb-4'>
                                <Card border="info" className='justify-content-center bg-light'>
                                    <Card.Body>
                                        <Card.Title className='text-center py-1'><h3>Hvad Mere Bringer Vi?</h3></Card.Title>
                                        <Card.Text className='px-4'>
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Card.Text className='text-center'>
                                            <p>Læs Mere Om Vores VR Platform? <Button variant="primary">Klik her</Button></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    
                </div>



            
                <div className='mb-4'>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <div className='usercase-title text-center my-4'>
                                <h2>User Cases</h2>
                            </div>
                            <div className='usercase-komponent'>
                                <Container>
                                    <UserCase/>
                                </Container>
                                <Container>
                                    <UserCaseRight/> 
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </div>



            
                <div className='py-4'>
                    <Row className='justify-content-center'>
                        <Col sm={10} md={10} lg={10}>
                            <div className='text-center my-4'>
                                <h2>Board of Scientist</h2>
                                <h5>Hos NanoScaleSimulation sigter vi efter de bedste vilkår og resulter i følgende områder</h5>
                            </div>
                            <div className=' py-2'>
                                <Scientist/>
                            </div>
                        </Col>
                    </Row>
                </div>



        
                <div className='custom wrapper text-dark pb-4'>
                    <Row className='justify-content-center'>
                        <Col sm={12} md={9} lg={9} xl={9}>
                            <div className='custom-titel text-center mt-4 mb-4'>
                                <h2>Customer success</h2>
                                <h5>Hos NanoScaleSimulation vægter vi kvalitet på et niveau, som kan tilfredstille alle</h5>
                            </div>
                            <div className='custom-komponent'>
                                <Container>
                                    <Card body className='shadow-lg' style={{borderRadius:30, backgroundColor:'#3C9FE1', display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Customer/>
                                    </Card>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </div>



                <div className='text-dark my-4'>
                    <Row className='justify-content-center'>
                        <Col sm={12} md={8} lg={8} xl={8}>
                            <div className='text-center mt-4 mb-4'>
                                <h2>FAQ</h2>
                                <h5>Hos NanoScaleSimulation har vi lavet en QA, for at hjæpe med hurtige svar</h5>
                            </div>
                            <div className='FAQ-komponent mb-4'>
                                <FAQ/>
                            </div>
                        </Col>
                    </Row>
                </div>


                <div className='text-dark'>
                    <Row className='justify-content-center '>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='text-center my-4'>
                                <h2>Subscriber</h2>
                            </div>
                            <div className='subscriber-komponent mb-4'>
                                <Container>
                                    <Subscriber/>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </div>

            <ModalEmail/>
            <ScrollButton />
        </Container>
        </div>
    );
}

export default Home;