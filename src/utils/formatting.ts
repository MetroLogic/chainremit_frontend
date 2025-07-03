// formatting.ts

// formatting.ts

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  export function getStatusConfig(status: string) {
    switch (status) {
      case "pending":
        return {
          label: "Pending",
          className: "bg-yellow-600 text-white",
          type: "badge",
        };
      case "approved":
        return {
          label: "Approved",
          className: "bg-green-600 text-white",
          type: "badge",
        };
      case "active":
        return {
          label: "Active",
          className:
            "px-3 py-1 text-xs font-medium bg-[#D6E5FD] text-[#7588C2] border border-[#E3F0F5] rounded-xl",
          type: "custom",
        };
      case "completed":
        return {
          label: "Completed",
          className: "bg-green-600 text-white",
          type: "badge",
        };
      case "defaulted":
        return {
          label: "Defaulted",
          className: "bg-red-600 text-white",
          type: "badge",
        };
      default:
        return {
          label: status,
          className: "bg-gray-600 text-white",
          type: "badge",
        };
    }
  }
  