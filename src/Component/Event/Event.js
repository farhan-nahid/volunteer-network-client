import React from 'react';
import { Card } from 'react-bootstrap';
import './Event.css';

const Event = ({event}) => {  
    
    return (
        <div className="col-md-6 col-lg-3  ">
            <Card  className="mt-4 single-events">
                <Card.Img variant="top" className="img" src={event.imageURL} />
                <Card.Body className="name text-center">
                    <Card.Title >{event.name}</Card.Title>
                </Card.Body>
             </Card>
        </div>
    );
};

export default Event;