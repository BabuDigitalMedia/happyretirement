
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, Download } from "lucide-react";
import { useCRMForm } from "@/hooks/useCRMForm";
import { useNavigate } from "react-router-dom";

interface ContactFormProps {
  source: string;
  size?: "default" | "compact";
  showGuideInfo?: boolean;
}

export const ContactForm = ({ source, size = "default", showGuideInfo = false }: ContactFormProps) => {
  const navigate = useNavigate();
  
  const handleSuccess = () => {
    navigate('/guide-success');
  };
  
  const { formData, isSubmitting, handleSubmit, handleInputChange } = useCRMForm(source, handleSuccess);
  
  const isCompact = size === "compact";
  const iconSize = isCompact ? "w-4 h-4" : "w-5 h-5";
  const inputPadding = isCompact ? "pl-9 py-2" : "pl-10 py-3";
  const textSize = isCompact ? "text-sm" : "text-base";
  const buttonPadding = isCompact ? "py-3 px-6" : "py-4 px-8";
  const buttonTextSize = isCompact ? "text-sm" : "text-lg";

  return (
    <div>
      {showGuideInfo && (
        <div className="text-center mb-6">
          <Download className={`${isCompact ? 'w-12 h-12' : 'w-16 h-16'} text-gold-600 mx-auto mb-4`} />
          <h3 className={`${isCompact ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-navy-900 mb-4`}>
            Get Your FREE Retirement Rescue Guide
          </h3>
          <p className={`${isCompact ? 'text-lg' : 'text-xl'} text-gray-600 mb-6`}>
            Discover the secrets to bulletproof retirement planning
          </p>
          
          <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 mb-8">
            <h4 className={`${isCompact ? 'text-sm' : 'text-lg'} font-semibold text-navy-900 mb-3`}>
              Inside this exclusive guide:
            </h4>
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
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor={`${source}-name`} className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <div className="relative mt-1">
              <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${iconSize}`} />
              <Input
                id={`${source}-name`}
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`${inputPadding} ${textSize} border-gray-300 focus:border-gold-500 focus:ring-gold-500 bg-white text-gray-900 placeholder:text-gray-500`}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor={`${source}-email`} className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <div className="relative mt-1">
              <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${iconSize}`} />
              <Input
                id={`${source}-email`}
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`${inputPadding} ${textSize} border-gray-300 focus:border-gold-500 focus:ring-gold-500 bg-white text-gray-900 placeholder:text-gray-500`}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor={`${source}-phone`} className="text-sm font-medium text-gray-700">
              Phone Number *
            </Label>
            <div className="relative mt-1">
              <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${iconSize}`} />
              <Input
                id={`${source}-phone`}
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`${inputPadding} ${textSize} border-gray-300 focus:border-gold-500 focus:ring-gold-500 bg-white text-gray-900 placeholder:text-gray-500`}
                required
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold ${buttonPadding} rounded-full ${buttonTextSize} transition-all duration-300 transform hover:scale-105 shadow-lg`}
        >
          {isSubmitting ? (
            <span>Processing...</span>
          ) : (
            <>
              <Download className={`${iconSize} mr-2`} />
              {isCompact ? "Get My FREE Guide" : "Get My FREE Retirement Guide"}
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to receive communications from Grow-Shine Financial Group LLC. 
          Your information is secure and will never be shared with third parties.
        </p>
      </form>
    </div>
  );
};
