
import { Button } from "@/components/ui/button";
import { Calendar, Shield, TrendingUp, DollarSign, Users, Award } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="text-center lg:text-left mb-12">
      {/* Attention-Grabbing Headline */}
      <div className="flex items-center justify-center lg:justify-start mb-4">
        <span className="text-2xl mr-3">💣</span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Your 401(k) & IRA May Be a <span className="text-red-400">Time Bomb</span>
        </h1>
      </div>
      
      <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6 text-gold-300">
        Protect, Grow, and GUARANTEE Your Retirement Income — TAX-DEFERRED & MARKET-PROTECTED
      </h2>
      
      <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
        Backend Solutions from Nationwide, AIG, North American, Lincoln, Athene & More
      </p>
      
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gold-300">
          Discover why top financial experts are recommending Growth Fixed Indexed Annuities over outdated retirement accounts.
        </h3>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto lg:mx-0 mb-8">
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <Shield className="w-8 h-8 text-green-400 mb-2" />
            <span className="text-sm font-medium">Zero Market Loss</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <DollarSign className="w-8 h-8 text-green-400 mb-2" />
            <span className="text-sm font-medium">Guaranteed Income for Life</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
            <span className="text-sm font-medium">Tax-Deferred Growth</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <Award className="w-8 h-8 text-green-400 mb-2" />
            <span className="text-sm font-medium">Principal Protection</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <Users className="w-8 h-8 text-green-400 mb-2" />
            <span className="text-sm font-medium">A+ Rated Carriers</span>
          </div>
        </div>
      </div>
      
      {/* Main CTA */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto lg:mx-0">
        <div className="text-center mb-6">
          <span className="text-3xl mb-4 block">🎯</span>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Schedule Your Free Retirement Strategy Call</h3>
          <p className="text-gray-300">Secure your money, create predictable income, and eliminate the guesswork.</p>
        </div>
        <Button 
          className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={() => window.open('https://link.crmvo.com/widget/bookings/growshinefin-happyretire', '_blank')}
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule My Free Strategy Call
        </Button>
      </div>
    </div>
  );
};
