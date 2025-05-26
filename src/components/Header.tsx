
export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-4">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/4611f71d-68ba-4fdc-a4cb-69e709cf78f0.png" 
            alt="Grow-Shine Financial Group LLC Logo" 
            className="w-12 h-12 mr-3"
          />
          <div>
            <h1 className="text-xl font-bold text-navy-900">Grow-Shine Financial Group LLC</h1>
            <p className="text-sm text-gray-600">Licensed Financial Professionals</p>
          </div>
        </div>
      </div>
    </header>
  );
};
