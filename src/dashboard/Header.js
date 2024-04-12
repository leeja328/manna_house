import React from 'react';
import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated, setIsDash }) => {
  return (
    <header>
      <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
        <h1 id='dashboard-header'>Manna Rice Cake House Order Dashboard</h1>
        <Logout setIsAuthenticated={setIsAuthenticated}></Logout>
      </div>
      <div style={{ marginTop: '30px', marginBottom: '18px', width: '100px'}}>
        <button id='table-button-adding' onClick={() => setIsAdding(true)}>Add Order</button>
      </div>
    </header>
  );
};

export default Header;
