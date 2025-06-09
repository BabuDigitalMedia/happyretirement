
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const useCRMForm = (source: string, onSuccess?: () => void) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

      // Create form data with proper field names for GHL
      const crmData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: source,
        lead_source: source,
        form_name: "Retirement Guide Lead Magnet"
      };

      console.log('CRM payload:', crmData);

      // Try direct POST with JSON first
      const response = await fetch('https://link.crmvo.com/widget/form/Ikho0u4XID6szJUONub9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(crmData)
      });

      console.log('Response status:', response.status);
      
      if (response.ok || response.status === 0) {
        toast({
          title: "Success!",
          description: "Your free guide is ready for download!",
        });
        
        // Reset form and show success state
        setFormData({ name: "", email: "", phone: "" });
        setIsSuccess(true);

        // Call the success callback if provided
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    } catch (error) {
      console.error("JSON submission failed, trying form data:", error);
      
      try {
        // Fallback to FormData approach
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('source', source);
        formDataToSend.append('lead_source', source);
        formDataToSend.append('form_name', 'Retirement Guide Lead Magnet');

        console.log('Trying FormData submission...');

        await fetch('https://link.crmvo.com/widget/form/Ikho0u4XID6szJUONub9', {
          method: 'POST',
          mode: 'no-cors',
          body: formDataToSend
        });

        toast({
          title: "Form Submitted!",
          description: "Your information has been received. We'll be in touch soon!",
        });
        
        // Reset form and show success state
        setFormData({ name: "", email: "", phone: "" });
        setIsSuccess(true);

        // Call success callback
        if (onSuccess) {
          onSuccess();
        }

      } catch (fallbackError) {
        console.error("Both submission methods failed:", fallbackError);
        
        toast({
          title: "Submission Error",
          description: "There was an issue submitting your form. Please try again or contact us directly.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetSuccess = () => {
    setIsSuccess(false);
  };

  return {
    formData,
    isSubmitting,
    isSuccess,
    handleSubmit,
    handleInputChange,
    resetSuccess
  };
};
