
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Is this like a variable annuity?",
      answer: "No. These are fixed indexed annuities, meaning your principal is protected from loss. Unlike variable annuities, you won't lose money when the market goes down."
    },
    {
      question: "What if I already have an IRA or Roth?",
      answer: "Great! You can potentially roll over or transfer into annuities without tax penalties. We'll help you understand the best strategy for your specific situation."
    },
    {
      question: "What fees are involved?",
      answer: "Many of the annuity options we offer have zero management fees and only optional rider fees. We'll provide full transparency on all costs before you make any decisions."
    },
    {
      question: "How is this different from my 401(k)?",
      answer: "Unlike 401(k)s that are subject to market volatility, fixed indexed annuities provide principal protection with growth potential. You get the upside of market gains without the downside risk."
    },
    {
      question: "What happens if I need to access my money?",
      answer: "Most annuities offer withdrawal options, though terms vary. We'll explain the liquidity features and help you choose options that match your needs for flexibility."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about retirement annuities
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-navy-900 pr-4">
                  Q: {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gold-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    A: {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
