
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-navy-700 shadow-lg border-b border-navy-600 py-4">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4611f71d-68ba-4fdc-a4cb-69e709cf78f0.png" 
              alt="Grow-Shine Financial Group LLC Logo" 
              className="w-12 h-12 mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Grow-Shine Financial Group LLC</h1>
              <p className="text-sm text-gold-400">Licensed Financial Professionals</p>
            </div>
          </div>
          
          <Button 
            className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2"
            onClick={() => window.open('tel:+16096747817', '_self')}
          >
            Call Now
          </Button>
        </div>
      </div>
    </header>
  );
};
