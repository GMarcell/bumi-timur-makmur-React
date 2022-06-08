import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Galery.css'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar';
import Galery1 from '../assets/galery/18.png'
import Galery2 from '../assets/galery/19.png'
import Galery3 from '../assets/galery/21.png'
import Galery4 from '../assets/galery/24.png'
import Galery5 from '../assets/galery/25.png'
import Galery6 from '../assets/galery/27.png'
import Galery7 from '../assets/galery/28.png'
import Galery8 from '../assets/galery/30.png'
import Galery9 from '../assets/galery/32.png'
import Galery10 from '../assets/galery/33.png'
import Galery11 from '../assets/galery/34.png'
import Galery12 from '../assets/galery/36.jpeg'

function Gallery() {
    return (
        <div>
            <Navbar/>
            <Container fluid className='mt-3'>
            <h2 className='fw-bold ps-4 pt-3'>Gallery</h2>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery1} alt='galery1'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery2} alt='galery2'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery3} alt='galery3'/>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery4} alt='galery4'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery5} alt='galery5'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery6} alt='galery6'/>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery7} alt='galery7'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery8} alt='galery8'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery9} alt='galery9'/>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery10} alt='galery10'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery11} alt='galery11'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery12} alt='galery12'/>
                    </Col>
                </Row>
            </Container>
            <Bottombar/>
        </div>
    )
}

export default Gallery