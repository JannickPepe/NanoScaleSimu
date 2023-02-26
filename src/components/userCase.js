import { db } from "../db/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { collection, getDocs} from "firebase/firestore";
import { Card, Col, Container, Row } from "react-bootstrap";

import "../styles/Home.css";


const UserCase = () => {

    // State to store data to the 2x different usercase collections
    const [usercaseLeft, setUsercaseLeft] = useState([]);

    const [usercaseRight, setUsercaseRight] = useState([]);
    
    const fetchPost = async () => {
        await getDocs(collection(db, "usercaseLeft"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setUsercaseLeft(newData);                
                
            }
        )
    }
    useEffect(()=>{
        fetchPost();
    }, [])


    
    const fetchPost2 = async () => {
        await getDocs(collection(db, "usercaseRight"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setUsercaseRight(newData);                
                
            }
        )
    }
    useEffect(()=>{
        fetchPost2();
    }, [])

    
    return (
        <div className="usercase my-4">
            
            <Container className="py-2">
                <div className="usercase-wrapper1 mb-4">
                    {
                        usercaseLeft?.map((usercaseLeft, i)=>(
                            <Card className="shadow-lg" style={{borderRadius:20}}>
                                    <Row key={i}>
                                        <Col sm={12} md={4} lg={4}>
                                            <div className="usercase-info p-4">
                                                <h4>{usercaseLeft.titel}</h4>
                                                <hr></hr>
                                                <p>{usercaseLeft.tekst}</p>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={8} lg={8}>
                                            <img className="p-4" src={usercaseLeft.image} alt="llalal"></img>
                                        </Col>
                                    </Row>
                            </Card>  
                        ))
                    }
                </div>
            </Container>

            <Container className="">
                <div className="usercase-wrapper2 my-4">
                    {
                        usercaseRight?.map((usercaseRight, k)=>(
                            <Card className="shadow-lg" style={{borderRadius:20}}>
                                    <Row key={k}>
                                        <Col sm={12} md={8} lg={8}>
                                            <img className="p-4" src={usercaseRight.image} alt="llalal"></img>
                                        </Col>
                                        <Col sm={12} md={4} lg={4}>
                                            <div className="usercase-info p-4">
                                                <h4>{usercaseRight.titel}</h4>
                                                <hr></hr>
                                                <p>{usercaseRight.tekst}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                
                            </Card>
                        ))
                    }
                </div>
            </Container>
        
        </div>
    );

}

export default UserCase;
