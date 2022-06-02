import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import Product1 from '../assets/galery/17.png'
import Product2 from '../assets/galery/22.PNG'
import Product3 from '../assets/galery/23.PNG'
import Product4 from '../assets/galery/26.png'
import Product5 from '../assets/galery/29.png'
import Product6 from '../assets/galery/31.png'
import Tamarind from '../assets/galery/35.jpeg'

function Home() {
    return (
        <main>
            <div className='background-image'>
                <div className='text-center wording'>
                    <h1 className='fw-bold'>CV Bumi Timur Makmur</h1>
                    <h4 className='fw-bold'>One Stop solution for the finest agriculture and fishery product from Indonesia</h4>
                </div>
            </div>
            <Container fluid className='mb-5'>
                <h2 className='fw-bold ps-4 pt-5'>Overview</h2>
                <Carousel variant="dark" className='pt-1'>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Card className='w-50'>
                                        <Card.Img variant="top" src={Product1}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Card className='w-50'>
                                        <Card.Img variant="top" src={Product2}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Card className='w-50'>
                                        <Card.Img variant="top" src={Product3}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Card className='w-50'>
                                        <Card.Img variant="top" src={Product4}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Card className='w-50'>
                                        <Card.Img variant="top" src={Product5}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Card className='w-50'>
                                        <Card.Img variant="top" src={Product6}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col className='d-flex flex-column justify-content-center align-items-center'>
                                    <Card className='w-50'>
                                        <Card.Img variant="top" src={Tamarind}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </main>
    )
}

export default Home