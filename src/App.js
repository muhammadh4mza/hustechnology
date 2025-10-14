import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SecuritySolutions from './pages/SecuritySolutions';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import IPServices from './pages/IPServices';
import LeasingIPv4 from './pages/LeasingIPv4';
import ManagingIPv4 from './pages/ManagingIPv4';
import BuyingIPv4 from './pages/BuyingIPv4';
import SellingIPv4 from './pages/SellingIPv4';
import StormwallNetwork from './pages/StormwallNetwork';
import TelecomCommunicationHardware from './pages/TelecomCommunicationHardware';
import ContactUs from './pages/ContactUs';


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
          <Route path="/security-solutions" element={<SecuritySolutions />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/#" element={<Products />} />
          <Route path="/ip-services" element={<IPServices />} />
          <Route path="/ip-services/lease" element={<LeasingIPv4 />} />
          <Route path="/ip-services/manage" element={<ManagingIPv4 />} />
          <Route path="/ip-services/buy" element={<BuyingIPv4 />} />
          <Route path="/ip-services/sell" element={<SellingIPv4 />} />
          <Route path="/stormwallnetwork" element={<StormwallNetwork />} />
          <Route path="/telecom-communication-hardware" element={<TelecomCommunicationHardware />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;