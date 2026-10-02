export interface Enquiry {
  _id?: string;

  name: string;
  email: string;
  phone: string;

  userType:
    | "student"
    | "professional"
    | "business"
    | "customer"
    | "other";

  category:
    | "drone"
    | "gis"
    | "ai"
    | "training"
    | "business"
    | "event"
    | "career"
    | "general";

  company?: string;

  message: string;

  status:
    | "new"
    | "contacted"
    | "in-progress"
    | "resolved"
    | "closed";

  source: "chatbot" | "website-form";

  createdAt?: string;
  updatedAt?: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  data: Enquiry;
}