import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../config/firebase';

const Add = ({ orders, setOrders, setIsAdding }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [orderTotal, setOrderTotal] = useState('');
  const [orderSummary, setOrderSummary] = useState('');
  const [date, setDate] = useState();

  const handleAdd = async (e) => {
    e.preventDefault();

    // if (!fullName || !email || !phone || !address || !orderTotal || !orderSummary || !date) {
    //   return Swal.fire({
    //     icon: 'error',
    //     title: 'Error!',
    //     text: 'All fields are required.',
    //     showConfirmButton: true,
    //   });
    // }

    const newOrder = {
      fullName,
      email,
      phone,
      address,
      orderTotal,
      orderSummary,
      date,
    };

    console.log(newOrder);
    console.log(orders)
    orders.push(newOrder);

    try {
      await addDoc(collection(db, "orders"), {
        ...newOrder
      });
    } catch (error) {
      console.log(error)
    }
  
    setOrders(orders);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${fullName} data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Order</h1>
        <label htmlFor="firstName">Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <label htmlFor="lastName">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="email">Phone</label>
        <input
          id="phone"
          type="phone"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <label htmlFor="address">address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <label htmlFor="salary">Order Total ($)</label>
        <input
          id="orderTotal"
          type="number"
          name="orderTotal"
          value={orderTotal}
          onChange={e => setOrderTotal(e.target.value)}
        />
        <label htmlFor="date">Order Summary</label>
        <input
          id="orderSummary"
          type="text"
          name="orderSummary"
          value={orderSummary}
          onChange={e => setOrderSummary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;