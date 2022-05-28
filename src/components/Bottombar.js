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
                    <Col>
                        <h2 className='fw-bold text-center pt-3'>BUMI TIMUR MAKMUR</h2>
                        <div className='d-flex mb-3'>
                            <img className='w-50 m-auto' src={Logo1} alt='Logo'/>
                        </div>
                        <h6>We serve worldwide buyers by supplying unique home décor products as well as small indoor furniture items, with fully experienced staff in home décor business</h6>
                    </Col>
                    <Col>
                        <h2 className='fw-bold text-center pt-3'>Contact Us</h2>
                        <h6>Office: Jalan Marga Jaya 1, No. 28, Cengkareng, Jakarta Barat, DKI Jakarta 11740</h6>
                        <h6>Factory: Jalan Timor Raya (Pasar Oesao), Oesao,. Kupang Timur, Kupang, Nusa Tenggara Timur 85362</h6>
                        <h6>Telp: +62-851-5777-6759</h6>
                        <h6>Email: marketing@bumimakmur@marketing.com</h6>
                        <FaFacebookSquare size={28}/>
                        <FaInstagram size={28}/>
                        <FaLinkedin size={28}/>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Bottombar