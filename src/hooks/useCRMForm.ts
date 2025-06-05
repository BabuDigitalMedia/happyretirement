
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const useCRMForm = (source: string) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to download your free guide.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Submitting to CRM Form...');
      console.log('Form data:', formData);

      // Create a hidden form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://link.crmvo.com/widget/form/Ikho0u4XID6szJUONub9';
      form.style.display = 'none';

      // Map and add form fields
      const fields = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: source
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Append form to body, submit, and clean up
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      toast({
        title: "Success!",
        description: "Your free Retirement Rescue Guide is being sent to your email.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", phone: "" });

    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Form Submitted!",
        description: "Your information has been received. We'll be in touch soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", phone: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    isSubmitting,
    handleSubmit,
    handleInputChange
  };
};
