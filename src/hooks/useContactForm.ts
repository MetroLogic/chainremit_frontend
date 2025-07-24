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
      if (!data.email.includes("@")) {
        throw new Error("Please enter a valid email address");
      }
      if (data.message.length < 10) {
        throw new Error("Message must be at least 10 characters");
      }
      const resp = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!resp.ok) {
        throw new Error("Failed to send message. Please try again.");
      }
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      return { success: true };
    } catch (err) {
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
