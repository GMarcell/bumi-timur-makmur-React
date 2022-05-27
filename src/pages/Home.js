import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'
import Carousel1 from '../assets/galery/2.png'
import Carousel2 from '../assets/galery/3.png'
import Carousel3 from '../assets/galery/4.png'
import Product1 from '../assets/galery/17.png'
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <main>
            <Carousel variant="dark">
                <Carousel.Item>
                    <div className='carousel-itm'>
                        <img className="d-block w-100" src={Carousel1} alt="First slide" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-itm'>
                        <img className="d-block w-100" src={Carousel2} alt="Second slide" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-itm'>
                        <img className="d-block w-100" src={Carousel3} alt="Third slide" />
                    </div>
                </Carousel.Item>
            </Carousel>
            <Container fluid>
                <Row className='my-5'>
                    <Col>
                        <Card className='w-100'>
                            <Card.Img variant="top" src={Product1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='w-100'>
                            <Card.Img variant="top" src={Product1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='w-100'>
                            <Card.Img variant="top" src={Product1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Home