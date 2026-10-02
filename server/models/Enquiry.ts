import mongoose, { Document, Schema } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;

  userType:
    | "student"
    | "professional"
    | "business"
    | "other";

  category:
    | "general"
    | "training"
    | "drone-services"
    | "gis-mapping"
    | "ai-technology"
    | "career"
    | "business";

  company?: string;

  message: string;

  status:
    | "new"
    | "in-progress"
    | "resolved"
    | "closed";

  source:
    | "website-form"
    | "chatbot";

  createdAt: Date;
  updatedAt: Date;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    userType: {
      type: String,
      enum: [
        "student",
        "professional",
        "business",
        "other",
      ],
      required: true,
    },

    category: {
      type: String,
      enum: [
        "general",
        "training",
        "drone-services",
        "gis-mapping",
        "ai-technology",
        "career",
        "business",
      ],
      required: true,
    },

    company: {
      type: String,
      trim: true,
      maxlength: 150,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },

    status: {
      type: String,
      enum: [
        "new",
        "in-progress",
        "resolved",
        "closed",
      ],
      default: "new",
    },

    source: {
      type: String,
      enum: [
        "website-form",
        "chatbot",
      ],
      default: "website-form",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IEnquiry>(
  "Enquiry",
  enquirySchema
);