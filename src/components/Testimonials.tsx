
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "I was terrified of another market crash. My advisor helped me rollover into an indexed annuity. I now sleep easy knowing my money grows safely and my retirement income is guaranteed.",
      name: "Karen L.",
      age: 58,
      location: "Arizona"
    },
    {
      text: "They showed me how to avoid RMD taxes legally and give my kids a tax-free legacy. Life-changing.",
      name: "Mike T.",
      age: 65,
      location: "Texas"
    },
    {
      text: "After losing 40% in 2008, I never wanted to go through that again. These annuities give me the growth I need with the protection I want.",
      name: "Susan R.",
      age: 62,
      location: "Florida"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Real Results from Real People
          </h2>
          <p className="text-xl text-gray-600">See what our clients are saying about their retirement transformation</p>
        </div>
        
        <div className="relative bg-gradient-to-br from-navy-50 to-blue-50 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold-500 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-6 italic">
            "📣 {testimonials[currentTestimonial].text}"
          </blockquote>
          
          <div className="text-center">
            <p className="font-bold text-navy-900">
              — {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].age}, {testimonials[currentTestimonial].location}
            </p>
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-gold-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
