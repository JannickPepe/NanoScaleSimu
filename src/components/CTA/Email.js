/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";

import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../../styles/Email.css";



export default function Email() {


    const [details, setDetails] = useState({
        navn: '',
        email: '',
        besked: '',
    })


    const PostData =async(e)=>{
        e.preventDefault()
        
        const {navn, email, besked}=details;

        const res =await fetch("https://nanoscale-simulations-website-default-rtdb.europe-west1.firebasedatabase.app/email.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            navn,
            email,
            besked,

            })
            
        })

    }



    return (
        <div className="outer-container">
            <h3>Udfyld formularen</h3>

            <Container>

                <Form>
                    <Form.Group className="contactform mb-3">
                        <Form.Label>Fulde Navn</Form.Label>
                        <Form.Control type="text" placeholder="Fornavn og efternavn"  onChange={(e)=> setDetails({...details,navn:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="contactform mb-3">
                        <Form.Label>Email addresse</Form.Label>
                        <Form.Control type="email" placeholder="Barack@Obama.com" onChange={(e)=> setDetails({...details,email:e.target.value})}/>
                        <Form.Text className="text-muted">
                            <p>We'll never share your email with anyone else.</p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="contactform mb-3">
                        <Form.Label>Læg venligst en kommentar</Form.Label>
                        <Form.Control type="text" placeholder="kommentar..." onChange={(e)=> setDetails({...details,besked:e.target.value})} />
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit" onClick={ PostData }>Submit</Button>

            </Container>

        </div>
    )

}


