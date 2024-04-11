import { Route, Routes } from 'react-router-dom';
import Home from './landing_page/home';
import About from './pages/About';
import Order from './pages/Order';
import Order_success from './pages/Order_success.js';
import Dashboard from './app/index.js'

// use this to install react router dom --> npm i react-router-dom --legacy-peer-deps

function App () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order_confirmation" element={<Order_success/>} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App; 