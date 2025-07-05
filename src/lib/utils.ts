import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadImage(name: string, dataUrl: string) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = name;
  a.click();
}

interface TruncateOptions {
  maxLength?: number;      // max allowed string length (default: 10)
  minLength?: number;      // minimum to allow truncation (default: 6)
  truncateLen?: number;      // minimum to allow truncation (default: 6)
  ellipsis?: string;       // optional custom ellipsis (default: "…")
  keepEnd?: boolean;       // if true, keep end instead of middle (e.g., for hashes)
}

export function truncate(
  value: string | number,
  options: TruncateOptions = {}
): string {
  const {
    maxLength = 10,
    minLength = 6,
    ellipsis = '…',
    truncateLen = 6,
    keepEnd = false,
  } = options;

  const str = String(value);

  if (str.length <= maxLength || str.length < minLength) {
    return str;
  }

  const charsToShow = truncateLen;

  if (keepEnd) {
    return str.slice(0, charsToShow) + ellipsis;
  }

  const front = truncateLen;
  const back = truncateLen;

  return str.slice(0, front) + ellipsis + str.slice(-back);
}
