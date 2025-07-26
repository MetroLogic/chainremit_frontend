"use client";

import { useState } from "react";

interface ContactFormData {
  fullName: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitForm = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Simulate form submission since backend was removed
      // TODO: add real backend integration when needed
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

      setSuccess(true);
      // Hide success after a bit - not perfect, but good enough
      setTimeout(() => setSuccess(false), 5000);
      return { success: true };
    } catch (err) {
      // Not logging to Sentry yet, just show error
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    submitForm,
    loading,
    success,
    error,
  };
};
