import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '/workspaces/landing-page-p33-grupo2/src/img/henry-be-IicyiaPYGGI-unsplash.jpg';


function Carta () {
  return (
    <div className="card-container p-2 col-12 col-sm-6 col-md-3" >
        <Card>
            <Card.Img variant="top" src={Image}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  ); 
}

export default Carta;