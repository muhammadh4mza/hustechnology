import React, { useState } from 'react';

const GlobalFilteringNetwork = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 'de',
      countryCode: 'DE',
      title: 'Germany (Frankfurt am Main)',
      details: ['fra.stormwall.network Equinix FR5', 'fra2.stormwall.network e-Shelter FR1'],
      status: null,
      isComing: false,
    },
    {
      id: 'kz',
      countryCode: 'KZ',
      title: 'Kazakhstan (Almaty)',
      status: 'Coming 2025',
      isComing: true,
    },
    {
      id: 'sg',
      countryCode: 'SG',
      title: 'Singapore',
      details: ['sg.stormwall.network', 'Equinix SG3 with [ID]CloudHost'],
    },
    {
      id: 'ae',
      countryCode: 'AE',
      title: 'UAE (Dubai)',
      details: ['ae.stormwall.network', 'SmartHub Fujairah'],
    },
    {
      id: 'us',
      countryCode: 'US',
      title: 'USA (Washington D.C.)',
      details: ['was.stormwall.network', 'Equinix DC3'],
    },
    {
      id: 'br',
      countryCode: 'BR',
      title: 'Brazil (São Paulo)',
      status: 'Coming 2025',
      isComing: true,
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-16 px-6 lg:px-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Global <span className="text-blue-400">Filtering Network</span>
        </h2>
        <p className="text-gray-400 text-lg">
          A worldwide network of scrubbing centers with over <span className="text-blue-400 font-medium">5,000 Gbit/s</span> filtering capacity.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Map */}
        <div className="relative overflow-hidden rounded-xl border border-gray-800">
          <img
            src="https://content2.stormwall.network/swssn-en/map-en.png"
            alt="World Map"
            className="w-full object-cover"
          />
        </div>

        {/* Right Side: Locations */}
        <div className="space-y-6 max-h-[550px] overflow-y-auto pr-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              onClick={() => setSelectedLocation(loc)}
              className="cursor-pointer p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-blue-400"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`https://content2.stormwall.network/swssn-en/country/${loc.countryCode}.svg`}
                  alt={loc.countryCode}
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="text-lg font-medium">{loc.title}</h3>
                  {loc.isComing ? (
                    <p className="text-blue-400 text-sm">{loc.status}</p>
                  ) : (
                    loc.details?.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-400">{detail}</p>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Location Details */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setSelectedLocation(null)}
            >
              ✕
            </button>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={`https://content2.stormwall.network/swssn-en/country/${selectedLocation.countryCode}.svg`}
                alt={selectedLocation.countryCode}
                className="w-10 h-10"
              />
              <h3 className="text-xl font-semibold">{selectedLocation.title}</h3>
            </div>
            <div>
              {selectedLocation.isComing ? (
                <p className="text-blue-400">{selectedLocation.status}</p>
              ) : (
                selectedLocation.details?.map((d, i) => (
                  <p key={i} className="text-sm text-gray-300">{d}</p>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GlobalFilteringNetwork;
