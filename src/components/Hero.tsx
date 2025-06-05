
import { Download } from "lucide-react";
import { HeroContent } from "@/components/HeroContent";
import { ContactForm } from "@/components/ContactForm";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            <HeroContent />
          </div>

          {/* Lead Magnet Form - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gold-200 sticky top-8">
              <div className="text-center mb-6">
                <Download className="w-12 h-12 text-gold-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  Get Your FREE Retirement Rescue Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the secrets to bulletproof retirement planning
                </p>
                
                <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-semibold text-navy-900 mb-2">
                    Inside this guide:
                  </h4>
                  <ul className="text-left space-y-1 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                      Protect savings from market crashes
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                      Tax-deferred growth strategies
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                      Guaranteed lifetime income
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                      Annuities vs. traditional accounts
                    </li>
                  </ul>
                </div>
              </div>

              <ContactForm source="Hero Form - Retirement Guide" size="compact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
