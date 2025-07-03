export interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  countryCode: string;
  acceptTerms: boolean;
  acceptMarketing?: boolean;
}

export interface SignUpResponse {
  message: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    isVerified: boolean;
  };
  verificationEmailSent: boolean;
}

export interface ApiError {
  error: string;
  code: number;
  field?: string;
}

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export interface PasswordStrength {
  score: number;
  label: string;
  color: string;
  requirements: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
  };
}
