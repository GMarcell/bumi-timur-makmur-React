import React from 'react'
import '../styles/Bottombar.css'
import { Container, Row, Col } from 'react-bootstrap';
import Logo1 from '../assets/icons/logo1.png'
import {FaLinkedin, FaFacebookSquare, FaInstagram} from 'react-icons/fa'

function Bottombar() {
    return (
        <main className='main-content'>
            <Container fluid>
                <Row>
                    <Col className='pt-3'>
                        <div className='d-flex mb-3'>
                            <img className='w-50 m-auto' src={Logo1} alt='Logo'/>
                        </div>
                        <h6>CV Bumi Timur Makmur is a manufacturer and exporter of Indonesian agricultural and fisheries products with the highest quality to be shipped both locally and globally.</h6>
                    </Col>
                    <Col>
                        <h2 className='fw-bold text-center pt-3'>Contact Us</h2>
                        <h6>Office: Jalan Marga Jaya 1, No. 28, Cengkareng, Jakarta Barat, DKI Jakarta 11740</h6>
                        <h6>Factory: Jalan Timor Raya (Pasar Oesao), Oesao,. Kupang Timur, Kupang, Nusa Tenggara Timur 85362</h6>
                        <h6>Telp: +62-851-5777-6759</h6>
                        <h6>Email: marketing@bumimakmur@marketing.com</h6>
                        <a href='https://www.facebook.com/profile.php?id=100082209031247'>
                            <FaFacebookSquare size={28}/>
                        </a>
                        <a href='instagram.com/bumitimurmakmur'>
                            <FaInstagram size={28}/>
                        </a>
                        <a href='https://www.linkedin.com/in/bumi-timur-makmur-1681aa241'>
                            <FaLinkedin size={28}/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Bottombar