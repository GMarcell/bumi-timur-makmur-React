import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Ardya from '../assets/teams/8.png'
import Gracia from '../assets/teams/9.png'
import Stania from '../assets/teams/10.png'
import { GrMailOption } from "react-icons/gr";
import {FaWhatsapp, FaLinkedin} from 'react-icons/fa'

function Teams() {
    return (
        <div>
            <Container className='mb-5'>
                <h2 className='fw-bold ps-4 pt-2'>What We Do</h2>
                <Row>
                    <Col>
                        <img className='w-50 rounded-circle' src={Ardya} alt='ardya'/>
                        <h2>Ardya Adam</h2>
                        <h5>Director</h5>
                        <div>
                            <FaWhatsapp size={28}/>
                            <GrMailOption size={28}/>
                            <FaLinkedin size={28}/>
                        </div>
                    </Col>
                    <Col>
                        <img className='w-50 rounded-circle' src={Gracia} alt='gracia'/>
                        <h2>Gracia Karawisan</h2>
                        <h5>Product Development</h5>
                        <div>
                            <FaWhatsapp size={28}/>
                            <GrMailOption size={28}/>
                            <FaLinkedin size={28}/>
                        </div>
                    </Col>
                    <Col>
                        <img className='w-50 rounded-circle' src={Stania} alt='stania'/>
                        <h2>Stania Teresa</h2>
                        <h5>Marketing & Finance</h5>
                        <div>
                            <FaWhatsapp size={28}/>
                            <GrMailOption size={28}/>
                            <FaLinkedin size={28}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Teams