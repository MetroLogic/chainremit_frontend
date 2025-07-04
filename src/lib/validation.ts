import { PasswordStrength } from "@/utils/auth";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
};

export const validateFullName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 50;
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

export const calculatePasswordStrength = (
  password: string
): PasswordStrength => {
  const requirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[@$!%*?&]/.test(password),
  };

  const score = Object.values(requirements).filter(Boolean).length;

  let label = "Very Weak";
  let color = "bg-red-500";

  if (score >= 5) {
    label = "Very Strong";
    color = "bg-green-500";
  } else if (score >= 4) {
    label = "Strong";
    color = "bg-green-400";
  } else if (score >= 3) {
    label = "Medium";
    color = "bg-yellow-500";
  } else if (score >= 2) {
    label = "Weak";
    color = "bg-orange-500";
  }

  return { score: (score / 5) * 100, label, color, requirements };
};

export const getValidationErrors = (data: any): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.fullName?.trim()) {
    errors.fullName = "Full name is required";
  } else if (!validateFullName(data.fullName)) {
    errors.fullName =
      "Please enter a valid full name (2-50 characters, letters only)";
  }

  if (!data.email?.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else {
    const strength = calculatePasswordStrength(data.password);
    if (strength.score < 80) {
      errors.password = "Password must meet all security requirements";
    }
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!data.phoneNumber?.trim()) {
    errors.phoneNumber = "Phone number is required";
  } else if (!validatePhoneNumber(data.phoneNumber)) {
    errors.phoneNumber = "Please enter a valid phone number";
  }

  if (!data.acceptTerms) {
    errors.acceptTerms = "You must accept the terms and conditions";
  }

  return errors;
};
