
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Benefits } from "@/components/Benefits";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { Testimonials } from "@/components/Testimonials";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ComparisonTable />
      <Benefits />
      <TrustedCompanies />
      <Testimonials />
      <WhoThisIsFor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
