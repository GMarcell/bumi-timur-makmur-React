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
import Galery13 from '../assets/galery/baru1.png'
import Galery14 from '../assets/galery/baru2.png'
import Galery15 from '../assets/galery/baru3.png'
import Galery16 from '../assets/galery/baru4.png'
import Galery17 from '../assets/galery/baru5.png'
import Galery18 from '../assets/galery/baru6.png'
import Galery19 from '../assets/galery/baru7.png'
import Galery20 from '../assets/galery/baru8.png'
import Galery21 from '../assets/galery/baru9.png'
// import Galery22 from '../assets/galery/baru10.png'

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
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery13} alt='galery13'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery14} alt='galery14'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery15} alt='galery15'/>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery16} alt='galery16'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery17} alt='galery17'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery18} alt='galery18'/>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery19} alt='galery19'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery20} alt='galery20'/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
                        <img className='galeryimg' src={Galery21} alt='galery21'/>
                    </Col>
                </Row>
            </Container>
            <Bottombar/>
        </div>
    )
}

export default Gallery