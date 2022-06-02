import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import '../styles/TermsandConditions.css'

function TermsandCondition() {
    const paymentRef = useRef()
    const ordersRef = useRef()
    const sampleRef = useRef()
    const priceRef = useRef()

    const showpayment = () => {
        paymentRef.current.classList.toggle("show")
    }
    const showorder = () => {
        ordersRef.current.classList.toggle("show")
    }
    const showsample = () => {
        sampleRef.current.classList.toggle("show")
    }
    const showprice = () => {
        priceRef.current.classList.toggle("show")
    }

    return (
        <div>
            <Container className='mentok-bawah'>
                <h2 className='fw-bold pt-4'>Terms & Conditions</h2>
                <Row>
                    <Col>
                        <div onClick={showpayment}>
                            <div className='px-3 dropbtn'>
                                <h4>
                                    Payment Methods
                                </h4>
                                <FaPlus size={24}/>
                            </div>
                        </div>
                        <div className='dropdownitem' ref={paymentRef}>
                            <ol>
                                <li>
                                    <h5>
                                        Irrevocable Letter of Credit (L/C) payment (for US$ 50,000 above)
                                    </h5>
                                </li>
                                <li>
                                    <h5>
                                        Telegraphic/ Swift Wire Transfer (T/T)
                                    </h5>
                                </li>
                            </ol>
                            <h5 className='px-3'>50% down payment in advance is required to start the production. The rest of the payment has to be done upon invoice after container loaded. Original documents will be sent to the consignee upon receipt the transfer.</h5>
                        </div>
                        <div onClick={showorder}>
                            <div className='px-3 dropbtn'>
                                <h4>
                                    Orders Terms
                                </h4>
                                <FaPlus size={24}/>
                            </div>
                        </div>
                        <div className='dropdownitem' ref={ordersRef}>
                            <h5 className='px-3'>FCL (Full Container Load)<br/>
                            Minimum order is 1 x 20 container</h5>
                        </div>
                        <div onClick={showsample}>
                            <div className='px-3 dropbtn'>
                                <h4>
                                    Sample Order
                                </h4>
                                <FaPlus size={24}/>
                            </div>
                        </div>
                        <div className='dropdownitem' ref={sampleRef}>
                            <h5 className='px-3'>All samples are charged 1.5 times normal production price without minimum quantity. We do not give free samples in order to avoid unfair business practices</h5>
                        </div>
                        <div onClick={showprice}>
                            <div className='px-3 dropbtn'>
                                <h4>
                                    Price Terms
                                </h4>
                                <FaPlus size={24}/>
                            </div>
                        </div>
                        <div className='dropdownitem' ref={priceRef}>
                            <h5 className='px-3'>Available price term is FOB (Free On Board) only and Ex-Factory for selective customer</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TermsandCondition