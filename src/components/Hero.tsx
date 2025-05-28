
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Shield, TrendingUp, DollarSign, Users, Award, User, Mail, Phone, Download } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to download your free guide.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      console.log("Lead captured:", formData);
      toast({
        title: "Success!",
        description: "Your free Retirement Rescue Guide is being sent to your email.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", phone: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="hero-name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="hero-name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="pl-9 py-2 text-sm border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="hero-email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="hero-email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-9 py-2 text-sm border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="hero-phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="hero-phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-9 py-2 text-sm border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold py-3 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? (
                    <span>Sending Guide...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Get My FREE Guide
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  By submitting, you agree to receive communications from Grow-Shine Financial Group LLC. 
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
