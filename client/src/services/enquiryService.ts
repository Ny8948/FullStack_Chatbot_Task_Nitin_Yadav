import api from "./api";

import type {
  Enquiry,
  EnquiryResponse,
} from "../types/enquiry";

export const createEnquiry = async (
  enquiry: Omit<
    Enquiry,
    "_id" | "status" | "createdAt" | "updatedAt"
  >
): Promise<EnquiryResponse> => {
  const response = await api.post<EnquiryResponse>(
    "/enquiries",
    enquiry
  );

  return response.data;
};

export const getEnquiries = async () => {
  const response = await api.get("/enquiries");

  return response.data;
};

export const updateEnquiry = async (
  id: string,
  data: Partial<Enquiry>
) => {
  const response = await api.put(
    `/enquiries/${id}`,
    data
  );

  return response.data;
};

export const deleteEnquiry = async (
  id: string
) => {
  const response = await api.delete(
    `/enquiries/${id}`
  );

  return response.data;
};