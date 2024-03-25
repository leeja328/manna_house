import './Order_success.css';
import React, { Fragment } from 'react'
import Header from '../landing_page/header';
import Footer from '../landing_page/footer';


function Order_success() {
  return (
    <><Header />
    <div className='order-success-body'>
        <h1>주문해주셔서 감사합니다! 주문 확인 이메일을 확인하세요.</h1>
        <h1>Thank you for your order! Check your email for the order confirmation.</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Order_success