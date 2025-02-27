// src/services/serviceService.ts
export interface ServiceType {
  id: number;
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  icon: string;
}

export const servicesData: ServiceType[] = [
  {
    id: 1,
    title: "Service Package 1",
    description:
      "Description of service package 1. Perfect for businesses looking for basic services. Without Modification",
    monthlyPrice: "$99",
    yearlyPrice: "$999",
    // Use a local asset path or a valid URL
    icon: "public/assets/icons/package-1.svg",
  },
  {
    id: 2,
    title: "Service Package 2",
    description:
      "Description of service package 2. Perfect for businesses looking for extended services.",
    monthlyPrice: "$199",
    yearlyPrice: "$1999",
    icon: "public/assets/icons/package-1.svg",
  },
  {
    id: 3,
    title: "Service Package 3",
    description:
      "Description of service package 3. Perfect for businesses looking for premium services.",
    monthlyPrice: "$599",
    yearlyPrice: "$5999",
    icon: "public/assets/icons/package-1.svg",
  },
  // Add more services as needed...
];
