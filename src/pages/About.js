
import React from 'react';
import heroimg from "../img/bg_container1.png";
import '../styles/About.css';

import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, Figure, Image } from 'react-bootstrap';

import ModalEmail from '../components/ModalEmail';
import ScrollButton from '../components/ScrollButton';

import { BsFillArrowDownCircleFill } from "react-icons/bs";


import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
    animation: 1s 4s 2 ${bounceAnimation};
`;

function About() {
    return (
        <Container fluid>
            <div className="About-Page">     
                

                <div className='hero-section'>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <figure className='position-relative'>
                                <img src={heroimg} alt="heroimg" />
                            </figure>
                            <motion.figcaption 
                                animate={{ x: [0, 300, 0], opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 3,
                                    delay: 0.3,
                                    ease: [0.5, 0.71, 1, 1.5],
                                }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileHover={{ scale: 1.1}}
                            >
                                <h1 className=''>Information Omkring:</h1>
                                <hr></hr>
                                <h4 className=''>Vision, Projekter Og Om Os</h4>
                                
                            </motion.figcaption>
                            <div className='hero-icon-section' style={{}}>
                                <BouncyDiv>
                                <BsFillArrowDownCircleFill className='hero-icon' size={60} style={{}}/>
                                </BouncyDiv>
                            </div>
                            
                        </Col>
                    </Row>
                </div>


                <div className='vision-section my-4'>

                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className='vision-h2 text-center'>
                                <h2>Vores Vision</h2>
                            </div>
                        </Col>
                    </Row>
                    
                    
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <Image rounded alt="vision" src={require('../img/galleri4.jpg')} />
                                <div className='text-dark text-center pt-2'>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <hr></hr>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={8} xl={8} className='text-dark'>
                                <div className='vision-brødtekst'>
                                    <p>
                                    Vi gør det muligt for lejere at blive medejere, hvor de løbende kan opspare ejerskab ved at købe en lille bid hver måned. <br></br><br></br> Interesserne bliver på denne måde mere afstemt, da lejer føler ejerskab og passer bedre på boligen. <br></br><br></br>
                                    Dette resulterer i bedre driftsøkonomi for porteføljen af lejligheder. <br></br> Samt giver en sundere og mere bæredygtig gevinst af din investering.
                                    </p>
                                </div>

                                <div className='vision-værdi-sektion text-center p-4 mb-4'>
                                    <div className='vision-værdi' style={{width:'28%', display:'inline-block'}}>
                                        <Image className='w-75' alt="vision" src={require('../img/vr-glasses.png')}  />
                                    </div>
                                    <div className='vision-værdi' style={{width:'28%', display:'inline-block', marginLeft:20, marginRight:20}}>
                                        <Image className='vision-img w-75' alt="vision" src={require('../img/research.png')}  />
                                    </div>
                                    <div className='vision-værdi' style={{width:'28%', display:'inline-block'}}>
                                        <Image className='w-75' alt="vision" src={require('../img/molecules.png')}  />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>


                <div className='hvem-sektion my-4'>

                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className='hvem-sektion-h2 text-center'>
                                <h2>Hvem er vi</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        </Col>
                    </Row>

                </div>



            </div>
        </Container> 
    );
}


export default About;