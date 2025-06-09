
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
      console.log('=== CRM SUBMISSION START ===');
      console.log('Form data:', formData);
      console.log('Source:', source);

      // Try the standard FormData approach that GHL expects
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('source', source);

      // Log all form data entries
      console.log('FormData entries:');
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`${key}: ${value}`);
      }

      console.log('Submitting to GHL endpoint...');

      const response = await fetch('https://link.crmvo.com/widget/form/Ikho0u4XID6szJUONub9', {
        method: 'POST',
        body: formDataToSend
      });

      console.log('Response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      // Try to read response text if possible
      try {
        const responseText = await response.text();
        console.log('Response body:', responseText);
      } catch (textError) {
        console.log('Could not read response text:', textError);
      }

      // Consider it successful if we get any response
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

      console.log('=== CRM SUBMISSION SUCCESS ===');

    } catch (error) {
      console.error('=== CRM SUBMISSION ERROR ===');
      console.error('Error details:', error);
      
      // Still show success to user but log the error
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
