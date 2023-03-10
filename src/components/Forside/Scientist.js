
import { db } from "../../db/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Card, Col, Row } from "react-bootstrap";

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
        <Row xs={1} md={1} lg={3} xl={3} className="g-4 px-4 mx-4">
            {
                scientist?.map((science, i)=>(
                    <Col style={{position: 'relative', paddingTop:45, paddingBottom:20}} key={i}>
                        <Card className="shadow-lg" style={{borderRadius:20, display: "flex", justifyContent: "center", alignItems: "center", height:400}} border="info mx-4">
                            <Card.Img style={{width:180, height:150, position: 'absolute', bottom:320}} className="rounded-circle p-4" variant="top" src={science.image} alt="Description"/>
                            <div className="scientist-info">
                                <Card.Title className="text-center" style={{position: 'relative', top: 40}}><h3>{science.navn}</h3></Card.Title>
                                <hr style={{position: 'relative', top: 40}}></hr>
                                <Card.Body style={{position: 'relative', top: 30}}>
                                    <Card.Title><h4>{science.titel}</h4></Card.Title>
                                    <Card.Text>
                                        <div className="" style = {{display:"flex", alignItems: "center", justifyContent:"end"}}>
                                            < FaQuoteRight  style={{display:"flex", alignItems: "center", justifyContent:"end", margin: '0px'}} size={20}/>
                                        </div>
                                        <p>{science.tekst}</p>
                                        < FaQuoteLeft size={20}/>
                                    </Card.Text>
                                </Card.Body>
                                <div className="scientistcard-link">
                                        <Card.Link href="#" style={{ display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#3C9FE1", padding:5, borderBottomLeftRadius:20, borderBottomRightRadius:20 ,position: "relative", top:33}} >
                                            Læs Mere
                                        </Card.Link>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );

}

export default Scientist;