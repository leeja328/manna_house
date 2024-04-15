import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../config/firebase';


const Edit = ({ orders, selectedOrder, setOrders, setIsEditing, getOrders }) => {
  const id = selectedOrder.id;

  const [fullName, setFullName] = useState(selectedOrder.fullName);
  const [phone, setPhone] = useState(selectedOrder.phone);
  const [email, setEmail] = useState(selectedOrder.email);
  const [orderTotal, setOrderTotal] = useState(selectedOrder.orderTotal);
  const [orderSummary, setOrderSummary] = useState(selectedOrder.orderSummary);
  const [date, setDate] = useState(selectedOrder.date);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !orderTotal || !orderSummary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const order = {
        fullName,
        email,
        phone,
        orderTotal,
        orderSummary,
        date,
    };

    await setDoc(doc(db, "orders", id), {
      ...order
    });

    setOrders(orders);
    setIsEditing(false);
    getOrders();

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${order.fullName} data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Order</h1>
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
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="email">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;