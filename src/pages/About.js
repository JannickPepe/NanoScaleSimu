
import React from 'react';
import heroimg from "../img/bg_container1.png";
import '../styles/About.css';

import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Image } from 'react-bootstrap';

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

                    <Container>

                        <Row>
                            <Col sm={12} md={3} lg={3} xl={3} >
                                <div className='hvem-profil-img bg-info' style={{borderRadius:84, padding:12}}>
                                    <Image rounded alt="vision" src={require('../img/idea.png')}  />
                                </div>
                                <div className='hvem-profil-navn bg-info'>
                                    <h3>Jannick Pedersen</h3>
                                </div>
                            </Col>
                            <Col sm={12} md={9} lg={9} xl={9}>
                                <div className='hvem-content'>
                                    <div className='hvem-rolle'>
                                        <h4>Min Rolle </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div className='hvem-historie'>
                                    <h4>Min Historie</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <hr></hr>

                        <Row>
                            <Col sm={12} md={9} lg={9} xl={9}>
                                <div className='hvem-content-right'>
                                    <div className='hvem-rolle-right'>
                                        <h4>Min Rolle </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div className='hvem-historie-right'>
                                        <h4>Min Historie</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={3} lg={3} xl={3} >
                                <div className='hvem-profil-img-right bg-info' style={{borderRadius:84, padding:12}}>
                                    <Image rounded alt="vision" src={require('../img/idea.png')}  />
                                </div>
                                <div className='hvem-profil-navn-right bg-info'>
                                    <h3>Jannick Pedersen</h3>
                                </div>
                            </Col>
                        </Row>

                        <hr></hr>

                    </Container>
                </div>



                <div className='vores-projekter-sektion my-4'>

                    <div className='vores-projekter-intro text-center my-4'>
                        <Row>
                            <Col>
                            <div className='vores-projekter-titel mt-4'>
                                <h2>Vores Projekter</h2>
                                <h5 style={{marginTop:20}}>Her Vil Du Se Vores Senete Projekter</h5>
                            </div>
                            </Col>
                        </Row>
                    </div>
                    
                    <div className='vores-projekter-content'>
                        <Container>
                            <Row className='justify-content-center'>
                                <Col sm={12} md={9} lg={9} xl={9}>
                                <div class="card my-4" style={{borderRadius:'20px'}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-3">
                                        <Image rounded alt="vision" src={require('../img/galleri6.jpg')}  />
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h4 class="card-title">Project XY, At Roskilde campus</h4>
                                                <p class="card-text">Creating AR experiences is incredibly easy with Hololink's intuitive, browser-based editor. This allows you to create working prototypes in record time.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 text-center bg-info" style={{borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}}>
                                            <Card.Title style={{marginTop:70}}>
                                                <a href='home' alt="læsMere" style={{textDecoration:'none'}}>
                                                    <h4>Læs<span style={{display:'block', paddingTop:5}}>Mere</span></h4>
                                                </a>
                                            </Card.Title>
                                        </div>
                                    </div>
                                </div>
                                </Col>
                                <Col sm={12} md={9} lg={9} xl={9}>
                                <div class="card my-4" style={{borderRadius:'20px'}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-2 text-center bg-info" 
                                        style={{borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}>
                                            <Card.Title style={{marginTop:70}}>
                                                <a href='home' alt="læsMere" style={{textDecoration:'none'}}>
                                                    <h4>Læs<span style={{display:'block', paddingTop:5}}>Mere</span></h4>
                                                </a>
                                            </Card.Title>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h4 class="card-title">Project VR Play</h4>
                                                <p class="card-text">Creating AR experiences is incredibly easy with Hololink's intuitive, browser-based editor. This allows you to create working prototypes in record time.</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <Image rounded alt="vision" src={require('../img/galleri6.jpg')}  />
                                        </div>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
            
                </div>

                
            <ModalEmail/>
            <ScrollButton/>

            </div>
        </Container> 
    );
}


export default About;