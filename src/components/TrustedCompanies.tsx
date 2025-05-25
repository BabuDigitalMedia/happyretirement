
export const TrustedCompanies = () => {
  const companies = [
    { name: "Nationwide", logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=200&h=100&fit=crop&auto=format" },
    { name: "AIG", logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=100&fit=crop&auto=format" },
    { name: "North American", logo: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=200&h=100&fit=crop&auto=format" },
    { name: "Lincoln", logo: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=200&h=100&fit=crop&auto=format" },
    { name: "Athene", logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=200&h=100&fit=crop&auto=format" },
    { name: "Allianz", logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=100&fit=crop&auto=format" },
    { name: "Fidelity & Guaranty", logo: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=200&h=100&fit=crop&auto=format" }
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
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="w-16 h-8 object-contain mb-3 opacity-80"
              />
              <span className="text-sm font-bold text-navy-900 text-center">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
