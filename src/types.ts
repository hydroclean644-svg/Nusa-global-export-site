export interface ProductItem {
  id: string;
  name: string;
  category: string;
  groupFilter: 'Renewable & Charcoal' | 'Coconut & Agri' | 'Spices, Coffee & Tea' | 'Agriculture & Fishery' | 'Apparel & Handicrafts';
  seoKeyword: string;
  shortDesc: string;
  fullDesc: string;
  optionsText?: string;
  varieties: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  packaging: string;
  moq: string;
  origin: string;
  exportAvailability: string;
  documentation: string;
  mainImage: string;
  badge: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  product: string;
  quantity: string;
  port: string;
  spec: string;
  packaging: string;
  message: string;
}
