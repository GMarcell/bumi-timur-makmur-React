import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product1 from '../assets/galery/17.png'
import Product2 from '../assets/galery/22.PNG'
import Product3 from '../assets/galery/23.PNG'
import Product4 from '../assets/galery/26.png'
import Product5 from '../assets/galery/29.png'
import Product6 from '../assets/galery/31.png'

function Product() {
    return (
        <div>
            <Container className='mb-5'>
            <h2 className='fw-bold ps-4 pt-2'>Our Products</h2>
            <Row className='mb-3'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-75' src={Product1} alt='Product1'/>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-75' src={Product2} alt='Product1'/>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-75' src={Product3} alt='Product1'/>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-75' src={Product4} alt='Product1'/>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-75' src={Product5} alt='Product1'/>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='w-75' src={Product6} alt='Product1'/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Product