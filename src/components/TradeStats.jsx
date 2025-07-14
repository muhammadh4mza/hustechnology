
const stats = [
  { value: '9', label: 'Business Years' },
  { value: '65+', label: 'Countries Worldwide' },
  { value: '1K+', label: 'Existing Customers' },
  { value: '1K+', label: 'Business Partners' },
  { value: '10M+', label: 'IP Addresses Leased' },
];

const TradeStats = () => (
  <section className="bg-gradient-to-r from-white to-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">{stat.value}</span>
            <span className="text-blue-500 text-sm md:text-base">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TradeStats;