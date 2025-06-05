
import { ContactForm } from "@/components/ContactForm";

export const LeadMagnet = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gold-50 to-gold-100">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gold-200">
          <ContactForm 
            source="Lead Magnet Form - Retirement Guide" 
            size="default" 
            showGuideInfo={true} 
          />
        </div>
      </div>
    </section>
  );
};
