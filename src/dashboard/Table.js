import React, { useState } from 'react';
import './Table.css';

const Table = ({ orders, handleEdit, handleDelete }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  const sortedOrders = () => {
    if (sortBy === 'date') {
      return [...orders].sort((a, b) =>
        sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
      );
    } else if (sortBy === 'orderTotal') {
      return [...orders].sort((a, b) =>
        sortOrder === 'asc' ? a.orderTotal - b.orderTotal : b.orderTotal - a.orderTotal
      );
    } else {
      return orders;
    }
  };

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th colSpan={2} className="text-center">
              Actions
            </th>
            <th style={{ minWidth: '110px' }} onClick={() => handleSort('date')}>
              Date {sortBy === 'date' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th style={{ minWidth: '170px' }}>Full Name</th>
            <th style={{ minWidth: '180px' }}>Email</th>
            <th style={{ minWidth: '130px' }}>Phone</th>
            <th style={{ minWidth: '210px' }}>Address</th>
            <th style={{ minWidth: '130px' }} onClick={() => handleSort('orderTotal')}>
              Order Total {sortBy === 'orderTotal' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th style={{ minWidth: '210px' }}>Order Summary</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders().map((order, i) => (
            <tr key={order.id}>
              <td className="text-right">
                <button id='table-button' onClick={() => handleEdit(order.id)} className="button muted-button">
                  Edit
                </button>
              </td>
              <td className="text-left">
                <button id='table-button' onClick={() => handleDelete(order.id)} className="button muted-button">
                  Delete
                </button>
              </td>
              <td>{order.date}</td>
              <td>{order.fullName}</td>
              <td>{order.email}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{formatter.format(order.orderTotal)}</td>
              <td>{order.orderSummary}</td>
              <td>{order.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
