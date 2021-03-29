import React from 'react';
import { Container } from 'react-bootstrap';
import Event from '../Event/Event';

const events = [
    {
        name: 'Child Support',
        img: 'https://i.ibb.co/Z8NWSTW/stuffed-Animals.png'
    },
    {
        name: 'Animal Shelter',
        img: 'https://i.ibb.co/YX0WJ3K/study-Group.png'
    },
    {
        name: 'Bird House',
        img: 'https://i.ibb.co/dLqpwpz/school-Suffiles.png'
    },
    {
        name: 'Good Student',
        img: 'https://i.ibb.co/Qjqj1q1/river-Clean.png'
    },
    {
        name: 'Food Charity',
        img: 'https://i.ibb.co/GR0cXtV/refuse-Shelter.png'
    },
    {
        name: 'Food Charity',
        img: 'https://i.ibb.co/vvRMXND/newBooks.png'
    },
    {
        name: 'Food Charity',
        img: 'https://i.ibb.co/Nrj839G/music-Lessons.png'
    },
    {
        name: 'Food Charity',
        img: 'https://i.ibb.co/ky13rkD/ITHelp.png'
    }
];



const Home = () => {
    return (
        <Container>
        <div className=" row">
            {
                events.map(event => <Event event={event} /> )
            }
        </div>
        </Container>
    );
};

export default Home;