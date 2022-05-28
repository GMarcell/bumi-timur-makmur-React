import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Pin from '../assets/icons/5.png'
import Tangan from '../assets/icons/6.png'
import Gear from '../assets/icons/7.png'

function Aboutus() {
    return (
        <div>
            <Container fluid className='mb-3'>
                <Row>
                    <h2 className='fw-bold ps-4 pt-2'>What We Do</h2>
                    <Col>
                        <h4>
                            CV Bumi Timur Makmur is a manufacturer and exporter of Indonesian agricultural and fisheries products with the highest quality to be shipped both locally and globally. Our goal is to wholeheartedly provide everything our customers need. 
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <h2 className='fw-bold ps-4 pt-2'>Our Key Feature</h2>
                    <Col className='d-flex flex-column'>
                        <img className='w-50 mx-auto' src={Pin} alt='Integrity'/>
                        <h5 className='text-center'>Integrity means telling the truth, keeping our word, and treating others with fairness and respect. Integrity is one of our most cherished assets.</h5>
                    </Col>
                    <Col className='d-flex flex-column'>
                        <img className='w-50 mx-auto' src={Tangan} alt='Commitment'/>
                        <h5>Commitment is important where we will continue to provide the best to our customers and partners at all times. Earning customer’s trust by communicating in an open, honest way.</h5>
                    </Col>
                    <Col className='d-flex flex-column'>
                        <img className='w-50 mx-auto' src={Gear} alt='Quality'/>
                        <h5>It's our goal for all of our product delivered under highest standard and exceeds the expectations of our esteemed customers.</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutus