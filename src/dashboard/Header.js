import React from 'react';
import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated, setIsDash }) => {
  return (
    <header>
      <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
        <h1>Manna Rice Cake House Order Dashboard</h1>
        
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
      <div style={{ marginTop: '30px', marginBottom: '18px', width: '100px'}}>
        <button onClick={() => setIsAdding(true)}>Add Order</button>
        
      </div>
    </header>
  );
};

export default Header;
