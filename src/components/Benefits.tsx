
import { Button } from "@/components/ui/button";
import { Calendar, Heart, TrendingUp, Shield } from "lucide-react";

export const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Imagine retiring without worrying about stock crashes, running out of money, or excessive taxes.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our clients have <span className="font-bold text-gold-600">rolled over their 401(k), IRA, or Roth accounts</span> into structured annuities that:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">Grow even when the market dips</h3>
            <p className="text-gray-600">Protected growth with market upside potential</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">Protect their nest egg</h3>
            <p className="text-gray-600">Principal protection from market volatility</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl">
            <Heart className="w-12 h-12 text-gold-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">Create lifetime retirement paychecks</h3>
            <p className="text-gray-600">Guaranteed income you can never outlive</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-900 mb-2">Leave a legacy tax-efficiently</h3>
            <p className="text-gray-600">Pass wealth to heirs with tax advantages</p>
          </div>
        </div>
        
        {/* Mid-Page CTA */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-700 rounded-2xl p-8 text-white text-center">
          <div className="mb-6">
            <span className="text-3xl mb-4 block">🧠</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't Let Market Volatility or Taxes Wipe Out Your Retirement
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Claim Your FREE Retirement Blueprint Call — 100% Confidential & No Obligation
            </p>
          </div>
          
          <Button 
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open('https://growshinefin.com/', '_blank')}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Strategy Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};
