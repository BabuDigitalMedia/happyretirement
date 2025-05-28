
export const TrustedCompanies = () => {
  const companies = [
    { 
      name: "Nationwide", 
      logo: "/lovable-uploads/470eb895-9b57-4169-bf1c-d3a5e60ef9e6.png",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    { 
      name: "F&G", 
      logo: "/lovable-uploads/0f973015-a1a2-4702-84ec-355c34242468.png",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100"
    },
    { 
      name: "Ameritas", 
      logo: "/lovable-uploads/af0a8459-8dfe-4380-bc75-f22ceeb894ef.png",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    { 
      name: "Athene", 
      logo: "/lovable-uploads/2c904cd0-6711-47e8-848c-25311823c083.png",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    { 
      name: "Corebridge Financial", 
      logo: "/lovable-uploads/d7c8471e-0e04-4137-85fe-42e7795dccc0.png",
      bgColor: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    { 
      name: "Mutual of Omaha", 
      logo: "/lovable-uploads/a94e20d4-fd12-47a4-ad4f-8f347aa0115c.png",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100"
    },
    { 
      name: "Lincoln Financial", 
      logo: "/lovable-uploads/e182f348-1e70-4920-9772-ea09c8658655.png",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    { 
      name: "North American", 
      logo: "/lovable-uploads/94230d2c-7a9c-4990-abf5-015fe99f952e.png",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Trusted Companies You Know
          </h2>
          <p className="text-xl text-gray-600">
            Partnered with America's Most Respected Annuity Providers
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {companies.map((company, index) => (
            <div 
              key={index}
              className={`${company.bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[120px] border border-white/50`}
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="max-w-full max-h-12 object-contain mb-3 opacity-90 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const nextElement = target.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'block';
                  }
                }}
              />
              <span className="text-sm font-bold text-navy-900 text-center hidden">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
