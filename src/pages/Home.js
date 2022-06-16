import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar';
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
            <Navbar/>
            <div className='background-image'>
                <div className='text-center wording'>
                    <h1 className='fw-bold'>CV Bumi Timur Makmur</h1>
                    <h4 className='fw-bold'>One stop solution for the finest agricultural and aquacultural product from Indonesia</h4>
                </div>
            </div>
            <Container fluid className='mb-5'>
                <h2 className='fw-bold ps-4 pt-5'>Company Profile</h2>
                <p className='px-4'>CV Bumi Timur Makmur is a privately owned company that was founded in 2021. Our team consists of 3 people who are creative, innovative and responsible. The beginning of our company starts with our share interest in export industry, mainly focusing on aqua-agriculture. We also share the same vision and ambition, therefore we founded CV Bumi Timur Makmur, a manufacture and exporting company that is superior and competitive in the world and contributes to the achievement of the nation's progress.</p>
                <p className='px-4'>Our company is engaged in agriculture and aquaculture sectors. For agriculture sector, we focus on Corn Kernel, Corncob, Coffee Bean, Peanut, Candlenut, and Tamarind. For aquaculture sector we only focus on Seaweed. CV Bumi Timur Makmur is located in Indonesia, precisely on Timor Island, Nusa Tenggara Timur Province (Factory).</p>
                <p className='px-4'>In developing sales in the agricultural and aquaculture sectors, CV Bumi Timur Makmur features several farmers on Timur Island.</p>
                <p className='px-4'>As in accordance with our company name, CV Bumi Timur Makmur, it reflects Indonesia's natural wealth in eastern Indonesia, especially in the province of Nusa Tenggara Timur. Therefore, our company collaborates with several farmers in Nusa Tenggara Timur archipelago to produce quality products. Our company is also committed to provide the best services for all of our partners.</p>
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
            <Bottombar/>
        </main>
    )
}

export default Home