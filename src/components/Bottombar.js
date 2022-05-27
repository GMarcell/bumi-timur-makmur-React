import React from 'react'
import '../styles/Bottombar.css'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/icons/logo.png'

function Bottombar() {
    return (
        <main className='main-content'>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Bumi Timur Makmur</h1>
                        <img className='h-50' src={Logo} alt='Logo'/>
                        <h6>We serve worldwide buyers by supplying unique home décor products as well as small indoor furniture items, with fully experienced staff in home décor business</h6>
                    </Col>
                    <Col>
                        <h1>Contact Us</h1>
                        <h3>Further information please contact us :</h3>
                        <h3>Further information please contact us :</h3>
                        <h3>Further information please contact us :</h3>
                        <h3>Further information please contact us :</h3>
                        <h3>Further information please contact us :</h3>
                        <h3>Further information please contact us :</h3>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Bottombar