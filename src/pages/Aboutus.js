import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Pin from '../assets/icons/5.png'
import Tangan from '../assets/icons/6.png'
import Gear from '../assets/icons/7.png'
import KemenKumHam from '../assets/galery/11.PNG'
import Beacukai from '../assets/galery/12.PNG'
import Maritime from '../assets/galery/13.jpg'
import Trade from '../assets/galery/14.PNG'
import Agricultural from '../assets/galery/15.png'
import TradePromotion from '../assets/galery/16.png'
import Kapal from '../assets/galery/4.png'

function Aboutus() {
    return (
        <div>
            <Container fluid className='mb-3'>
                <Row>
                    <h2 className='fw-bold ps-4 pt-3'>What We Do</h2>
                    <Col>
                        <h4 className='ps-3 pt-1'>
                            CV Bumi Timur Makmur is a manufacturer and exporter of Indonesian agricultural and fisheries products with the highest quality to be shipped both locally and globally. Our goal is to wholeheartedly provide everything our customers need. 
                        </h4>
                    </Col>
                    <Col>
                        <Card className='w-100'>
                            <Card.Img variant="top" src={Kapal}/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <h2 className='fw-bold ps-4 pt-5'>Our Key Feature</h2>
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
                <Row>
                    <h2 className='fw-bold ps-4 pt-5'>We Registered On</h2>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <img className='w-25' src={KemenKumHam} alt='KemenKumHam'/>
                        <h4 className='fw-bold'>Ministry of Law and Human Rights </h4>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <img className='w-50' src={Beacukai} alt='Beacukai'/>
                        <h4 className='fw-bold'>Directorate General of Customs and Excise</h4>
                    </Col>
                </Row>
                <Row>
                    <h2 className='fw-bold ps-4 pt-5'>We Partnerized With</h2>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <img className='w-50' src={Maritime} alt='Ministry of Maritime'/>
                        <h6 className='fw-bold'>Ministry of Marine Affairs and Fisheries</h6>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <img className='w-75' src={Trade} alt='Trade'/>
                        <h6 className='fw-bold'>Ministry of Trade of Republic Indonesia</h6>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <img className='w-75' src={Agricultural} alt='Agricultural'/>
                        <h6 className='fw-bold'>Ministry of Agriculture of Republic Indonesia</h6>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <img className='w-50' src={TradePromotion} alt='Agricultural'/>
                        <h6 className='fw-bold'>Indonesia Trade Promotion Center</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutus