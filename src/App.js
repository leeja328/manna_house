import { Route, Routes } from 'react-router-dom';
import Home from './landing_page/home';
import About from './pages/About';
import Order from './pages/Order';

// use this to install react router dom --> npm i react-router-dom --legacy-peer-deps

function App () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<Order />} />
        </Routes>
    );
}

export default App; 