
import { db } from "../../db/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Card, Col, Image, Row } from "react-bootstrap";

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

import '../../styles/Home.css';

const Scientist = () => {

    // State to store data scientist
    const [scientist, setScientist] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "scientist"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setScientist(newData);                
                
            }
        )
    }
    useEffect(()=>{
        fetchPost();
    }, [])

    
    return (
        <div className="scientist-component">
            <Row  xs={1} md={1} lg={3} xl={3} className="g-4 px-4 mx-4">
            {
                scientist?.map((science, i)=>(
                <Col className="pb-3">
                    <Card className="card-custom bg-white border-white border-0 shadow-lg" style={{borderRadius:20, height:550}} border="info mx-2">
                        <div className="card-custom-img" style={{backgroundImage:`url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)`}}></div>
                        <div class="card-custom-avatar">
                            <Image className="img-fluid" src={science.image} alt="Avatar"/>
                        </div>
                        <Card.Body className="" style={{overflowY: 'auto'}}>
                            <Card.Title>
                                <h4 className="">{science.navn}</h4>
                                <h5 className="">{science.titel}</h5>
                            </Card.Title>
                            <hr></hr>
                            <div className="" style = {{display:"flex", alignItems: "center", justifyContent:"end"}}>
                                < FaQuoteRight  style={{display:"flex", alignItems: "center", justifyContent:"end", margin: '0px', marginBottom:10}} size={20}/>
                            </div>
                            <Card.Text>
                                <p className="">{science.tekst}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </Card.Text>
                            < FaQuoteLeft size={20}/>
                        </Card.Body>
                        <Card.Footer className="text-center" style={{background:'linear-gradient(305deg, rgba(44,106,148,1) 0%, rgba(14,159,255,1) 50%, rgba(60,159,225,1) 100%)', borderColor:'inherit'}}>
                            <a href="/" className="btn btn-outline-light p-2 my-1">Læs mere</a>
                        </Card.Footer>
                    </Card>
                </Col>
                ))
            }
            </Row>
        </div>
    );
}

export default Scientist;