import React from 'react';
import './Event.css';

const Event = ({event}) => {
    
    
    return (
        <div className="col-md-3  p-3">
           <div className="single-event">
           <div >
                <img className="img" src={event.img}  alt="..."/>
           </div>
                <h5 className="text-center p-3">{event.name}</h5>
           </div>
        </div>
    );
};

export default Event;