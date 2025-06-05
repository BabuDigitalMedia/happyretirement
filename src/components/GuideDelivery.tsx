
import { Download, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GuideDelivery = () => {
  const handleDownloadGuide = () => {
    // Create a mock PDF download - in a real scenario, this would be a real PDF file
    const guideContent = `
RETIREMENT RESCUE GUIDE
======================

Table of Contents:
1. Protecting Your Savings from Market Crashes
2. Tax-Deferred Growth Strategies
3. Creating Guaranteed Lifetime Income Streams
4. Annuities vs. Traditional Retirement Accounts

Chapter 1: Protecting Your Savings from Market Crashes
------------------------------------------------------
Market volatility can devastate retirement savings. Learn how Fixed Indexed Annuities provide principal protection while offering growth potential.

Key Benefits:
- Zero market loss guarantee
- Participation in market gains
- No direct market exposure

Chapter 2: Tax-Deferred Growth Strategies
----------------------------------------
Maximize your retirement savings with tax-deferred growth opportunities that compound over time.

Chapter 3: Guaranteed Lifetime Income
------------------------------------
Discover how to create income streams that you can never outlive, providing peace of mind in retirement.

Chapter 4: Annuities vs. Traditional Accounts
---------------------------------------------
Compare the benefits and drawbacks of different retirement savings vehicles to make informed decisions.

Contact Information:
Grow-Shine Financial Group LLC
For personalized guidance, schedule your free consultation.
    `;

    const blob = new Blob([guideContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Retirement-Rescue-Guide.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-200">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Success! Your Guide is Ready
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you for requesting your FREE Retirement Rescue Guide. Your comprehensive guide is ready for download.
          </p>

          <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">
              What's Inside Your Guide:
            </h3>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Complete strategies to protect savings from market crashes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Tax-deferred growth techniques for maximum returns
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                How to create guaranteed lifetime income streams
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Detailed comparison: Annuities vs. traditional accounts
              </li>
            </ul>
          </div>

          <Button
            onClick={handleDownloadGuide}
            className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-6"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Your FREE Guide Now
          </Button>

          <div className="flex items-center justify-center text-sm text-gray-600 mb-6">
            <Mail className="w-4 h-4 mr-2" />
            A copy has also been sent to your email address
          </div>

          <div className="bg-navy-50 border border-navy-200 rounded-lg p-4">
            <h4 className="font-semibold text-navy-900 mb-2">
              Want Personalized Guidance?
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Schedule a free consultation to discuss your specific retirement goals
            </p>
            <Button 
              variant="outline"
              className="w-full border-navy-300 text-navy-700 hover:bg-navy-50"
              onClick={() => window.open('https://link.crmvo.com/widget/bookings/growshinefin-happyretire', '_blank')}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
