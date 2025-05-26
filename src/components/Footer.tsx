
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/4611f71d-68ba-4fdc-a4cb-69e709cf78f0.png" 
                alt="Grow-Shine Financial Group LLC Logo" 
                className="w-10 h-10 mr-3"
              />
              <h3 className="text-xl font-bold">Grow-Shine Financial Group LLC</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Licensed financial professionals helping secure your retirement future with personalized annuity solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold-400" />
                <span>info@growshinefin.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-gold-400" />
                <span>Financial District, USA</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-gold-400" />
                <a 
                  href="https://growshinefin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  growshinefin.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Fixed Indexed Annuities</li>
              <li>Retirement Income Planning</li>
              <li>401(k) & IRA Rollovers</li>
              <li>Tax-Deferred Growth Strategies</li>
              <li>Principal Protection Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Grow-Shine Financial Group LLC. All rights reserved. | 
            Licensed financial professionals | Securities offered through licensed representatives.
          </p>
        </div>
      </div>
    </footer>
  );
};
