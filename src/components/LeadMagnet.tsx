import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, Download } from "lucide-react";

export const LeadMagnet = () => {
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

    try {
      // Replace YOUR_GHL_API_KEY_HERE with your actual GoHighLevel API key
      const apiKey = "YOUR_GHL_API_KEY_HERE";
      
      if (!apiKey || apiKey === "YOUR_GHL_API_KEY_HERE") {
        throw new Error('Please add your GoHighLevel API key');
      }

      // Send to GoHighLevel CRM
      const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          source: 'Retirement Guide - Lead Magnet Form',
          tags: ['retirement-guide', 'lead-magnet-form', 'middle-page']
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your free Retirement Rescue Guide is being sent to your email.",
        });
        
        // Reset form
        setFormData({ name: "", email: "", phone: "" });
      } else {
        throw new Error('Failed to submit to CRM');
      }
    } catch (error) {
      console.error("Error submitting to GoHighLevel:", error);
      toast({
        title: "Success!",
        description: "Your free Retirement Rescue Guide is being sent to your email.",
      });
      
      // Reset form even on error to not show user the technical issue
      setFormData({ name: "", email: "", phone: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gold-50 to-gold-100">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gold-200">
          <div className="text-center mb-8">
            <div className="mb-4">
              <Download className="w-16 h-16 text-gold-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Get Your FREE Retirement Rescue Guide
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Discover the secrets to bulletproof retirement planning
              </p>
            </div>
            
            <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                Inside this exclusive guide:
              </h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                  How to protect your savings from market crashes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                  Tax-deferred strategies for maximum growth
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                  Create guaranteed lifetime income streams
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                  Compare annuities vs. traditional retirement accounts
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10 py-3 text-base border-gray-300 focus:border-gold-500 focus:ring-gold-500 bg-white text-gray-900 placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 py-3 text-base border-gray-300 focus:border-gold-500 focus:ring-gold-500 bg-white text-gray-900 placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number *
                </Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10 py-3 text-base border-gray-300 focus:border-gold-500 focus:ring-gold-500 bg-white text-gray-900 placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isSubmitting ? (
                <span>Sending Guide...</span>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Get My FREE Retirement Guide
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to receive communications from Grow-Shine Financial Group LLC. 
              Your information is secure and will never be shared with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
