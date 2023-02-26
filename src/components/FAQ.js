
import { db } from "../db/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Accordion} from "react-bootstrap";

import '../styles/Home.css';

const FAQ = () => {

    
    // State to store data todos
    const [faq, setFaq] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "faq"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setFaq(newData);                
            }
        )
    }
    useEffect(()=>{
        fetchPost();
    }, [])

    
    return (
        <div className="faq-wrapper">
                        
            {
                faq?.map((faqs,i)=>(
                    <div key={i}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    {faqs.titel}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {faqs.tekst}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    ))
                }
        </div>
    
    );

}

export default FAQ;