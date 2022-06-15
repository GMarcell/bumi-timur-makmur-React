import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar';
import Ardya from '../assets/teams/8.png'
import Gracia from '../assets/teams/9.png'
import Stania from '../assets/teams/10.png'
import {FaWhatsapp, FaLinkedin} from 'react-icons/fa'


function Teams() {
    return (
        <div>
            <Navbar/>
            <Container className='mb-5'>
                <h2 className='fw-bold ps-4 pt-2'>Our Teams</h2>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <img className='w-50 rounded' src={Ardya} alt='ardya'/>
                        <h2>Ardya Adam</h2>
                        <h5>Director</h5>
                        <div>
                            <a href='https://wa.me/6285157776759'>
                                <FaWhatsapp size={38} className='mx-2'/>
                            </a>
                            <a href='https://www.linkedin.com/in/ardyaadam'>
                                <FaLinkedin size={38} className='mx-2'/>
                            </a>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <img className='w-50 rounded' src={Gracia} alt='gracia'/>
                        <h2>Gracia Karawisan</h2>
                        <h5>Product Development</h5>
                        <div>
                            <a href='https://wa.me/6281238728268'>
                                <FaWhatsapp size={38} className='mx-2'/>
                            </a>
                            <a href='https://www.linkedin.com/in/gracia-trifena-karawisan-34619123b'>
                                <FaLinkedin size={38} className='mx-2'/>
                            </a>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <img className='w-50 rounded' src={Stania} alt='stania'/>
                        <h2>Stania Teresa</h2>
                        <h5>Marketing & Finance</h5>
                        <div>
                            <a href='https://wa.me/6281293288893'>
                                <FaWhatsapp size={38} className='mx-2'/>
                            </a>
                            <a href='https://www.linkedin.com/in/stania-teresa-39371a199'>
                                <FaLinkedin size={38} className='mx-2'/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Bottombar/>
        </div>
    )
}

export default Teams