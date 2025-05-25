
import { Hero } from "@/components/Hero";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Benefits } from "@/components/Benefits";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { Testimonials } from "@/components/Testimonials";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ComparisonTable />
      <Benefits />
      <TrustedCompanies />
      <Testimonials />
      <WhoThisIsFor />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
