import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';


// // Import Poppins font weights
// import '@fontsource/poppins/400.css';  // font-normal
// import '@fontsource/poppins/500.css';  // font-medium
// import '@fontsource/poppins/600.css';  // font-semibold
// import '@fontsource/poppins/700.css';  // font-bold

function App() {
  return (
    <div className=" min-h-screen bg-gray-50">
      <Router>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;