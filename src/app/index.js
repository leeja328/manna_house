import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../Login/index';
import Dashboard from '../dashboard';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';

// import Login from '../Login';
// import Dashboard from '../Dashboard';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
  
//   useEffect(() => {
//     setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
//   }, []);

//   return (
//     <>
//       {isAuthenticated ? (
//         <Dashboard setIsAuthenticated={setIsAuthenticated} />
//       ) : (
//         <Login setIsAuthenticated={setIsAuthenticated} />
//       )}
//     </>
//   );
// };

// export default App;
