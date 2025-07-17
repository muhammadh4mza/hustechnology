import React, { useState } from 'react';
import leasingImg from '../assets/Services/IpServices/leasing_img.jpg';
import managementImg from '../assets/Services/IpServices/management_img.jpg';
import buyImg from '../assets/Services/IpServices/buy_img.jpg';
import sellingImg from '../assets/Services/IpServices/selling_img.jpg';

const IPv4OrderPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    num: '1',
    months: '12',
    data_center_country: 'US',
    city_code: '',
    code: '',
    ip_type: '1'
  });

  const [showRcInstructions, setShowRcInstructions] = useState(false);
  const [showMonthPrompt, setShowMonthPrompt] = useState(false);
  const [showCityBox, setShowCityBox] = useState(false);

  // Pricing data (simplified for example)
  const pricing = {
    unitPrice: 0.38,
    rcPrice: 0.0190,
    monthlyBase: 1167.36
  };

  // Calculate totals
  const calculateTotals = () => {
    const num = parseInt(formData.num);
    const months = parseInt(formData.months);
    
    const subtotal = (pricing.monthlyBase * num * months) / 12;
    const rcTotal = (pricing.rcPrice * 256 * num * months);
    const total = subtotal + rcTotal;
    
    return {
      subtotal: subtotal.toFixed(2),
      rcTotal: rcTotal.toFixed(2),
      total: total.toFixed(2)
    };
  };

  const totals = calculateTotals();

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Toggle month prompt when billing cycle > 12 months
  // useEffect(() => {
  //   setShowMonthPrompt(parseInt(formData.months) > 12);
  // }, [formData.months]);

  // // Toggle city box when US is selected
  // useEffect(() => {
  //   setShowCityBox(formData.data_center_country === 'US');
  // }, [formData.data_center_country]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto pb-10">
        {/* Header */}
        <div className="sticky top-0 bg-blue-600 p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-100">IPv4 Address Order</h2>
          <button 
            onClick={onClose}
            className="text-gray-100 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Steps */}
        <div className="mt-6 mb-6 flex items-center justify-between text-center px-6">
          <div className="w-1/5">
            <div className="w-full h-1 border-b border-gray-300"></div>
          </div>
          <div className="sm:text-base text-xs" style={{width: '23%'}}>
            <div className="sm:flex items-center justify-center">
              <img className="mr-4" src="https://ipv4.larus.net/images/new_order_01.png" alt="icon_01fill_sel" width="24" height="24" />
              <span className="font-bold text-blue-600">Fill in the requirements</span>
            </div>
          </div>
          <div style={{width: '5%'}}>
            <div className="w-full h-1 border-b border-gray-300"></div>
          </div>
          <div className="sm:text-base text-xs" style={{width: '15%'}}>
            <div className="sm:flex items-center justify-center">
              <img className="mr-4" src="https://ipv4.larus.net/images/new_order_02.png" alt="pay_the_bills" width="24" height="24" />
              <span className="font-bold text-gray-500">Pay the bills</span>
            </div>
          </div>
          <div className="w-1/5">
            <div className="w-full h-1 border-b border-gray-300"></div>
          </div>
        </div>

        {/* Tip Box */}
        <div className="flex p-2 items-center text-xs mb-6 bg-gray-100 rounded-lg mx-6">
          <img src="https://ipv4.larus.net/images/icon_tips.png" alt="icon_tips" className="w-6 h-6 mr-4 ml-3" />
          <span>The order accepts a maximum of 512x/24 IP addresses. For higher quantity, please contact our online Account Manager.</span>
        </div>

        {/* Month Prompt */}
        {showMonthPrompt && (
          <div className="flex p-2 items-center text-xs mb-6 bg-red-50 border border-red-100 rounded-lg mx-6">
            <img src="https://ipv4.larus.net/images/icon_red_gantanhao.png" alt="icon_tips" className="w-4 h-4 mr-4 ml-2" />
            <span>Please be aware that the service will not be auto-renewed for service with payment term longer than one year. Please pay attention to the expiration of the service and make payment on time in order to avoid service interruption</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Left Column */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h1 className="font-bold text-lg mb-4">IP Requirement Information</h1>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Amount of /24 */}
                <div>
                  <label className="text-gray-500 text-sm">
                    Amount of /24<span className="text-red-500">*</span>
                  </label>
                  <div className="pt-2">
                    <select
                      name="num"
                      value={formData.num}
                      onChange={handleChange}
                      className="form-select rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full"
                    >
                      {Array.from({length: 512}, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>
                          {num} / 24 ({num * 256})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Billing Cycle */}
                <div>
                  <label className="text-gray-500 text-sm">
                    Billing Cycle<span className="text-red-500">*</span>
                  </label>
                  <div className="pt-2">
                    <select
                      name="months"
                      value={formData.months}
                      onChange={handleChange}
                      className="form-select rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full"
                    >
                      <option value="1">Monthly</option>
                      <option value="3">Quarterly</option>
                      <option value="6">Semi-Annual</option>
                      <option value="12">Annual</option>
                      <option value="24">Every 2 Years</option>
                      <option value="36">Every 3 Years</option>
                      <option value="48">Every 4 Years</option>
                      <option value="60">Every 5 Years</option>
                      <option value="72">Every 6 Years</option>
                      <option value="84">Every 7 Years</option>
                      <option value="96">Every 8 Years</option>
                    </select>
                  </div>
                </div>

                {/* Data Center Location */}
                <div className="lg:col-span-2 sm:col-span-2">
                  <label className="text-gray-500 text-sm">
                    Countries or territories for announcing IP (data center location)
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="pt-2 pb-6">
                    <select
                      name="data_center_country"
                      value={formData.data_center_country}
                      onChange={handleChange}
                      className="form-select rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full"
                    >
                      <optgroup label="Instant Delivery">
                        <option value="HK">Hong Kong China</option>
                        <option value="PH">Philippines</option>
                        <option value="RU">Russian Federation</option>
                        <option value="MY">Malaysia</option>
                        <option value="SG">Singapore</option>
                        <option value="MX">Mexico</option>
                        <option value="PE">Peru</option>
                        <option value="BR">Brazil</option>
                        <option value="ZA">South Africa</option>
                        <option value="ID">Indonesia</option>
                        <option value="GB">United kingdom</option>
                        <option value="TH">Thailand</option>
                        <option value="NL">Netherlands</option>
                        <option value="DE">Germany</option>
                        <option value="VN">Viet Nam</option>
                        <option value="TW">Taiwan, China</option>
                        <option value="US">United States of America</option>
                        <option value="JP">Japan</option>
                        <option value="KR">Korea</option>
                      </optgroup>
                      <optgroup label="Countries or Territories">
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="FR">France</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* City (shown only when US is selected) */}
                {showCityBox && (
                  <div className="city-box">
                    <label className="text-gray-500 text-sm">
                      City
                    </label>
                    <div className="pt-2 pb-6">
                      <select
                        id="city"
                        name="city_code"
                        value={formData.city_code}
                        onChange={handleChange}
                        className="form-select rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full"
                      >
                        <option value="">Please Select</option>
                        <option value="CHI">Chicago</option>
                        <option value="LAX">Los Angeles</option>
                        <option value="SJC">San Jose</option>
                        <option value="DFW">Dallas</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Promo Code */}
            <div className="shadow-sm bg-white rounded-2xl p-6 mt-6">
              <h2 className="font-bold mb-3">Promo Code</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Code"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="form-input rounded rounded-r-none border-gray-400 focus:border-blue-500 focus:ring-blue-500 w-1/2 mr-3"
                />
                <button
                  className="rounded-3xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-1/5 h-11"
                  style={{minWidth: '80px', maxWidth: '120px'}}
                >
                  Verify
                </button>
              </div>
              <p className="text-xs text-red-500 mt-2 hidden code-error">
                {/* Error message would appear here */}
              </p>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-bold pb-4">Total cost</h2>
                <dl className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <dd className="text-gray-500">
                    <span>{formData.num}</span> <span className="text-xs">x/24</span> X <span>{formData.months}</span> months
                  </dd>
                  <dt className="text-right font-medium">$ {totals.subtotal}</dt>
                  
                  <dd className="text-gray-500">IP monthly price</dd>
                  <dt className="text-right font-medium">$ {pricing.unitPrice}/IP</dt>
                  
                  <dd className="text-gray-500 flex items-center">
                    RC monthly price
                    <button 
                      onClick={() => setShowRcInstructions(!showRcInstructions)}
                      className="ml-1"
                    >
                      <img 
                        src="https://ipv4.larus.net/images/icon_question-mark.png" 
                        alt="question-mark" 
                        className="w-4 h-4 cursor-pointer" 
                      />
                    </button>
                  </dd>
                  <dt className="text-right font-medium">$ {pricing.rcPrice}/IP</dt>
                </dl>
                
                <dl className="grid grid-cols-3 gap-4 mt-4">
                  <dd className="text-xl font-normal col-span-1">Total:</dd>
                  <dt className="text-right text-2xl font-normal text-red-500 col-span-2">$ {totals.total}</dt>
                </dl>
              </div>
              <div className="p-6 pt-0">
                <button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white w-full py-3">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RC Instructions Modal */}
      {showRcInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">RC Monthly Price</h3>
              <button 
                onClick={() => setShowRcInstructions(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700">
              RC (Route Collector) is a service that collects and maintains routing information. 
              The RC monthly price is a fixed cost per IP address for this service.
            </p>
            <div className="mt-4 text-right">
              <button 
                onClick={() => setShowRcInstructions(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const IpListServicesSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const services = [
    {
      id: 1,
      title: "IP Leasing Service",
      category: "IP Solutions",
      description: [
        "On-demand IP addresses",
        "Riskless IP resources",
        "Get IP addresses within 24 hours",
        "From /24 to multiple /16s"
      ],
      image: leasingImg,
      cta: "Load Now",
      link: "https://huscomintl.net/ipv4/new"
    },
    {
      id: 2,
      title: "IP Management Service",
      category: "IP Solutions",
      description: [
        "Generate profit in zero effort",
        "1000+ partners globally",
        "Ongoing support",
        "Multilingual team support"
      ],
      image: managementImg,
      cta: "Load Now",
      link: "https://huscomintl.net/ipv4/new"
    },
    {
      id: 3,
      title: "Buying IP Addresses",
      category: "IP Brokerage",
      description: [
        "Abundant Resources",
        "Worry-Free Transaction",
        "Ongoing Support 24/7"
      ],
      image: buyImg,
      cta: "Load Now",
      link: "https://huscomintl.net/ipv4/new"
    },
    {
      id: 4,
      title: "Selling IP Addresses",
      category: "IP Brokerage",
      description: [
        "Monetize your IPs",
        "Save time and costs in maintaining IP",
        "Hassle-free and fast process"
      ],
      image: sellingImg,
      cta: "Load Now",
      link: "https://huscomintl.net/ipv4/new"
    }
  ];

  const handleCtaClick = (e, link) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl shadow-lg overflow-hidden transition-all hover:shadow-2xl duration-500"
          >
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-8 flex-grow text-white">
                <div>
                  <span className="text-sm uppercase font-medium tracking-wide text-blue-400">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.description.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 mt-1 text-blue-500 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base text-white/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={(e) => handleCtaClick(e, service.link)}
                  className="relative overflow-hidden inline-flex items-center px-6 py-3 mt-auto text-base font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 group/button"
                >
                  {/* Glare effect */}
                  <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
                    <span className="block w-1/3 h-full bg-white/40 blur-lg opacity-0 group-hover/button:opacity-80 group-hover/button:translate-x-full transition-all duration-700 ease-out rounded-lg" style={{transform: 'skewX(-20deg)'}}></span>
                  </span>
                  <span className="mr-2 tracking-wide z-10">{service.cta}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1 z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* IPv4 Order Popup */}
      {showPopup && <IPv4OrderPopup onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default IpListServicesSection;