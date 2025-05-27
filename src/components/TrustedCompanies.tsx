
export const TrustedCompanies = () => {
  const companies = [
    { 
      name: "Nationwide", 
      logo: "https://www.nationwide.com/-/media/nationwide/images/logos/nationwide-logo.svg"
    },
    { 
      name: "AIG", 
      logo: "https://www.aig.com/content/dam/aig/america-canada/us/images/brand/aig-logo.svg"
    },
    { 
      name: "North American", 
      logo: "https://www.northamericancompany.com/content/dam/sammons/logos/nac-logo-horizontal.svg"
    },
    { 
      name: "Lincoln Financial", 
      logo: "https://www.lfg.com/static/images/lincoln-financial-group-logo.svg"
    },
    { 
      name: "Athene", 
      logo: "https://www.athene.com/content/dam/athene/global/images/logos/athene-logo-horizontal.svg"
    },
    { 
      name: "Allianz", 
      logo: "https://www.allianz.com/content/dam/onemarketing/azcom/Allianz_com/logos/allianz-logo.svg"
    },
    { 
      name: "F&G", 
      logo: "https://www.fglife.com/content/dam/fglife/logos/fg-logo-horizontal.svg"
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center min-h-[120px]"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="max-w-full max-h-12 object-contain mb-3 opacity-90 filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
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
