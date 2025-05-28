
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Lock, Clock, Shield } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <div className="mb-8">
            <Phone className="w-16 h-16 text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Make Your Retirement Bulletproof
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Book your Free 1-on-1 Annuity Strategy Call
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <Button 
              className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg mb-6"
              onClick={() => window.open('https://link.crmvo.com/widget/bookings/growshinefin-happyretire', '_blank')}
            >
              <Lock className="w-6 h-6 mr-3" />
              Schedule My Free Call
            </Button>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-300">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gold-400" />
                <span>100% Private</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-gold-400" />
                <span>No Cost</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gold-400" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
          
          {/* Company Info */}
          <div className="text-center text-gray-400">
            <p className="text-lg font-semibold mb-2">Grow-Shine Financial Group LLC</p>
            <p className="text-sm">
              Licensed financial professionals helping secure your retirement future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
