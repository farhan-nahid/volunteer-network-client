import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Event from '../Event/Event';


const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(()=>{
        fetch('https://volunteer-network-farhan.herokuapp.com/events')
            .then(res=>res.json())
            .then(data =>setEvents(data))
    },[])
    return (
        <Container>
        <div className=" row ">
            {
                events.map(event => <Event key={event._id} event={event} /> )
            }
        </div>
        </Container>
    );
};

export default Home;