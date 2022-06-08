import React from 'react'
import { Col, Container, Row, Carousel, Card } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar';
import Product1 from '../assets/galery/17.png'
import Product2 from '../assets/galery/22.PNG'
import Product3 from '../assets/galery/23.PNG'
import Product4 from '../assets/galery/26.png'
import Product5 from '../assets/galery/29.png'
import Product6 from '../assets/galery/31.png'
import Tamarind from '../assets/galery/35.jpeg'

function Product() {
    return (
        <div>
            <Navbar/>
            <Container fluid className='mb-5'>
                <h2 className='fw-bold ps-4 pt-2'>Our Products</h2>
                <Carousel variant="dark" className='pt-5'>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h4 className='fw-bold'>Corn Kernel</h4>
                                    <p>Corn kernels, known as maize in many countries, are the fruits of corn . Kernel categorized as  a grain. Kernels are used in cooking as a vegetable or a source of starch.</p>
                                </Col>
                                <Col>
                                    <Card className='w-100'>
                                        <Card.Img variant="top" src={Product1}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h4 className='fw-bold'>Corncob</h4>
                                    <p>Corncob is the central core of an ear of corn. It is the part of the ear on which the kernels grow. The ear is also considered a "cob" or "pole" but it is not fully a "pole" until the ear is shucked, or removed from the plant material around the ear. Corncob can be used as animal bedding, fire starters, biofuel, charcoal, etc.</p>
                                </Col>
                                <Col>
                                    <Card className='w-100'>
                                        <Card.Img variant="top" src={Product2}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h4 className='fw-bold'>Coffee bean</h4>
                                    <p>Coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry. Just like ordinary cherries, the coffee fruit is also a so-called stone fruit. Even though the coffee beans are not technically beans, they are referred to as such because of their resemblance to true beans.</p>
                                </Col>
                                <Col>
                                    <Card className='w-100'>
                                        <Card.Img variant="top" src={Product3}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h4 className='fw-bold'>Peanut</h4>
                                    <p>Peanut is a legume crop grown mainly for its edible seeds. It is widely grown in the tropics and subtropics.</p>
                                </Col>
                                <Col>
                                    <Card className='w-100'>
                                        <Card.Img variant="top" src={Product4}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h4 className='fw-bold'>Candlenut</h4>
                                    <p>Candlenut is a plant whose seeds are used as a source of oil and spices.</p>
                                </Col>
                                <Col>
                                    <Card className='w-100'>
                                        <Card.Img variant="top" src={Product5}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h4 className='fw-bold'>Seaweed</h4>
                                    <p>Seaweed is generally anchored to the sea bottom or other solid structures by rootlike “holdfasts,” which perform the sole function of attachment and do not extract nutrients as do the roots of higher plants. A number of seaweed species are edible, and many are also of commercial importance to humans. Some are used as fertilizers or as sources of polysaccharides</p>
                                </Col>
                                <Col>
                                    <Card className='w-100'>
                                        <Card.Img variant="top" src={Product6}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <h4 className='fw-bold'>Tamarind</h4>
                                    <p>Tamarind is a typical tropical plant that is very easy to find around us. As a kitchen spice, it turns out that tamarind contains many nutrients. This fruit which has a combination of sour and sweet taste is often used as an alternative medicine in various parts of the world. Among them, help maintain a healthy digestive system, maintain heart health, help control blood sugar, help lose weight, and much more.</p>
                                </Col>
                                <Col>
                                    <Card className='w-100'>
                                        <Card.Img variant="top" src={Tamarind}/>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Bottombar/>
        </div>
    )
}

export default Product