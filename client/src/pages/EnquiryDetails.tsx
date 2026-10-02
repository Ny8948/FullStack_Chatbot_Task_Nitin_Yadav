import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../services/api";

import "./EnquiryDetails.css";

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  userType: string;
  category: string;
  company?: string;
  message: string;
  status: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

const EnquiryDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEnquiry = async () => {
      try {
        setLoading(true);
        setError("");

        if (!id) {
          setError("Enquiry ID is missing.");
          return;
        }

        const response = await api.get(`/enquiries/${id}`);

        setEnquiry(response.data.data);
      } catch (error: any) {
        console.error("Failed to load enquiry:", error);

        console.error(
          "Status:",
          error.response?.status
        );

        console.error(
          "Response:",
          error.response?.data
        );

        setError(
          error.response?.data?.message ||
            "Unable to load enquiry details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiry();
  }, [id]);

  if (loading) {
    return (
      <main className="enquiry-details-page">
        <div className="details-container">
          <p>Loading enquiry details...</p>
        </div>
      </main>
    );
  }

  if (error || !enquiry) {
    return (
      <main className="enquiry-details-page">
        <div className="details-container">
          <h2>
            {error || "Enquiry not found."}
          </h2>

          <Link to="/admin/dashboard">
            ← Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="enquiry-details-page">

      <div className="details-header">

        <div>
          <h1>Enquiry Details</h1>

          <p>
            ID: {enquiry._id}
          </p>
        </div>

        <Link
          to="/admin/dashboard"
          className="back-button"
        >
          ← Back to Dashboard
        </Link>

      </div>

      <div className="details-grid">

        {/* Contact Information */}

        <section className="details-card">

          <h2>Contact Information</h2>

          <div className="detail-item">
            <span>Name</span>
            <strong>{enquiry.name}</strong>
          </div>

          <div className="detail-item">
            <span>Email</span>
            <strong>{enquiry.email}</strong>
          </div>

          <div className="detail-item">
            <span>Phone</span>
            <strong>{enquiry.phone}</strong>
          </div>

          <div className="detail-item">
            <span>User Type</span>
            <strong>{enquiry.userType}</strong>
          </div>

          <div className="detail-item">
            <span>Company / Institute</span>
            <strong>
              {enquiry.company || "N/A"}
            </strong>
          </div>

        </section>


        {/* Enquiry Information */}

        <section className="details-card">

          <h2>Enquiry Information</h2>

          <div className="detail-item">
            <span>Category</span>
            <strong>{enquiry.category}</strong>
          </div>

          <div className="detail-item">
            <span>Status</span>
            <strong>{enquiry.status}</strong>
          </div>

          <div className="detail-item">
            <span>Source</span>
            <strong>{enquiry.source}</strong>
          </div>

          <div className="detail-item">
            <span>Created At</span>
            <strong>
              {new Date(
                enquiry.createdAt
              ).toLocaleString()}
            </strong>
          </div>

          <div className="detail-item">
            <span>Last Updated</span>
            <strong>
              {new Date(
                enquiry.updatedAt
              ).toLocaleString()}
            </strong>
          </div>

        </section>

      </div>


      {/* Message */}

      <section className="message-card">

        <h2>Message</h2>

        <p>{enquiry.message}</p>

      </section>

    </main>
  );
};

export default EnquiryDetails;