
export const TrustedCompanies = () => {
  const companies = [
    "Nationwide", "AIG", "North American", "Lincoln", "Athene", "Allianz", "Fidelity & Guaranty"
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
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <span className="text-lg font-bold text-navy-900 text-center">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
