
import { Check } from "lucide-react";

export const WhoThisIsFor = () => {
  const criteria = [
    "You're 50–70 and worried about outliving your savings",
    "You have an old 401(k), IRA, Roth, or cash reserves doing nothing",
    "You want safe, predictable retirement income",
    "You want to protect your assets from market crashes and taxes"
  ];
  
  return (
    <section className="py-16 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who This is For
          </h2>
          <p className="text-xl text-gray-300">
            This is perfect for you if:
          </p>
        </div>
        
        <div className="space-y-6">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-lg text-gray-100">{criterion}</p>
            </div>
          ))}
        </div>
        
        {/* Urgency Section */}
        <div className="mt-12 bg-red-600/20 border border-red-400 rounded-2xl p-8 text-center">
          <div className="mb-6">
            <span className="text-3xl mb-4 block">⏳</span>
            <h3 className="text-2xl font-bold text-red-300 mb-4">Limited Availability</h3>
            <p className="text-lg text-gray-300 mb-4">
              Due to high demand, we only accept 15 new clients per month.
            </p>
          </div>
          
          <div className="bg-gold-500/20 border border-gold-400 rounded-xl p-6">
            <span className="text-2xl mb-2 block">🎁</span>
            <h4 className="text-xl font-bold text-gold-300 mb-2">BONUS</h4>
            <p className="text-gray-300">
              Get our <strong>"Retirement Rescue Guide"</strong> instantly when you book your call today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
