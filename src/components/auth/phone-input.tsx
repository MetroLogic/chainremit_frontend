"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Country } from "@/utils/auth";
import { Phone } from "lucide-react";

const countries: Country[] = [
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryChange: (code: string) => void;
  error?: string;
  disabled?: boolean;
}

export function PhoneInput({
  value,
  onChange,
  countryCode,
  onCountryChange,
  error,
  disabled,
}: PhoneInputProps) {
  const selectedCountry =
    countries.find((c) => c.code === countryCode) || countries[0];

  return (
    <div className="space-y-2">
      <Label htmlFor="phone" className="text-gray-900 dark:text-gray-100">
        Phone Number
      </Label>
      <div className="flex space-x-2">
        <Select
          value={countryCode}
          onValueChange={onCountryChange}
          disabled={disabled}
        >
          <SelectTrigger className="w-32 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <SelectValue>
              <div className="flex items-center space-x-2">
                <span>{selectedCountry.flag}</span>
                <span className="text-sm">{selectedCountry.dialCode}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            {countries.map((country) => (
              <SelectItem
                key={country.code}
                value={country.code}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                  <span className="text-muted-foreground">
                    {country.dialCode}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative flex-1">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 ${
              error ? "border-red-500 dark:border-red-400" : ""
            }`}
            disabled={disabled}
          />
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
