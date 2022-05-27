import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Teams1 from '../assets/teams/8.png'
import Teams2 from '../assets/teams/9.png'
import Teams3 from '../assets/teams/10.png'
import { Carousel } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src={Teams1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Teams2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Teams3} alt="Third slide" />
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Home