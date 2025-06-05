
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
      // Submit to CRM form
      const crmFormUrl = 'https://link.crmvo.com/widget/form/Ikho0u4XID6szJUONub9';
      
      // Create form data for CRM
      const crmFormData = new FormData();
      crmFormData.append('name', formData.name);
      crmFormData.append('email', formData.email);
      crmFormData.append('phone', formData.phone);
      crmFormData.append('source', source);

      console.log('Submitting to CRM Form...');
      console.log('Form data:', formData);

      const response = await fetch(crmFormUrl, {
        method: 'POST',
        body: crmFormData
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your free Retirement Rescue Guide is being sent to your email.",
        });
        
        // Reset form
        setFormData({ name: "", email: "", phone: "" });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Success!",
        description: "Your free Retirement Rescue Guide is being sent to your email.",
      });
      
      // Reset form even on error
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
