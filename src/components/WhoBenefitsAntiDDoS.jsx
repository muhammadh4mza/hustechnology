
import { ShoppingCart, Wifi, Banknote, Factory } from 'lucide-react';

const benefitCards = [
  {
    title: "Retail/E-Commerce",
    description:
      "DDoS attacks disrupt business continuity leading to massive financial and reputational losses. Our protection ensures flawless performance of all your web resources, regardless of the strength of the attacks.",
    Icon: ShoppingCart,
  },
  {
    title: "ISP/Telecom",
    description:
      "Huscomintl protection acts like a strong shield to keep telecom systems safe. It goes beyond basic security to ensure ISP networks stay fast and fully operational.",
    Icon: Wifi,
  },
  {
    title: "Banking/Finance",
    description:
      "Banks are frequent targets of complex DDoS attacks. Our multi-layer protection is tailored to the financial sector, prioritizing data security with or without SSL decryption.",
    Icon: Banknote,
  },
  {
    title: "Manufacturing",
    description:
      "Manufacturing businesses face serious disruption from DDoS attacks. Huscomintl detects and stops them in real-time, ensuring uninterrupted business processes.",
    Icon: Factory,
  },
];

const WhoBenefitsAntiDDoS = () => {
  return (
    <section className="relative z-10 py-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-gray-950">
      {/* HALOGEN GLOW EFFECT */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Blue glow top left */}
        <div className="absolute top-[-6%] left-[-8%] w-[420px] h-[420px] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-300 rounded-full opacity-30 blur-[120px] animate-pulse-slow" />
        {/* Purple glow bottom right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[520px] h-[520px] bg-gradient-to-tr from-purple-500 via-blue-400 to-cyan-400 rounded-full opacity-25 blur-[140px] animate-pulse-slower" />
        {/* Cyan ring center */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border-[12px] border-cyan-400/30 rounded-full blur-[80px] opacity-20 animate-spin-slow" />
        {/* Subtle blue overlay */}
        <div className="absolute top-[30%] left-[60%] w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-[100px] opacity-10 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight">
          Who Benefits From <span className="text-blue-400">Anti-DDoS?</span>
        </h2>

        {/* Benefit Cards as grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefitCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 flex-1 min-w-[320px] max-w-lg mx-auto items-center gap-6 hover:shadow-blue-500/10 transition text-center"
            >
              <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-blue-500/10 mb-2">
                <card.Icon className="w-14 h-14 text-blue-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-2">{card.title}</h3>
              <p className="text-gray-200 text-lg leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => window.open('https://Huscomintl.network/activate-protection', '_blank')}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-md transition-transform hover:scale-105"
          >
            Protect Your Business
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoBenefitsAntiDDoS;
