import { FormEvent, useState } from "react";
import { createEnquiry } from "../services/enquiryService";

const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "student",
    category: "general",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (form.name.trim().length < 2) {
      return "Name must contain at least 2 characters.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      return "Phone number must contain 10 digits.";
    }

    if (form.message.trim().length < 10) {
      return "Message must contain at least 10 characters.";
    }

    return "";
  };

  const handleSubmit = async (
    event: FormEvent
  ) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await createEnquiry({
        ...form,
        userType: form.userType as
          | "student"
          | "professional"
          | "business"
          | "customer"
          | "other",

        category: form.category as
          | "drone"
          | "gis"
          | "ai"
          | "training"
          | "business"
          | "event"
          | "career"
          | "general",

        source: "website-form",
      });

      setSuccess(
        "Your enquiry has been submitted successfully! Our team will contact you soon."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        userType: "student",
        category: "general",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setError(
        "Unable to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="enquiry-form"
      onSubmit={handleSubmit}
    >
      <h2>Send Us an Enquiry</h2>

      <p>
        Tell us about your requirement and our team
        will get back to you.
      </p>

      {success && (
        <div className="success-message">
          {success}
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label>Name *</label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email *</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Phone *</label>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10 digit phone number"
            maxLength={10}
          />
        </div>

        <div className="form-group">
          <label>You are a *</label>

          <select
            name="userType"
            value={form.userType}
            onChange={handleChange}
          >
            <option value="student">
              Student
            </option>

            <option value="professional">
              Professional
            </option>

            <option value="business">
              Business
            </option>

            <option value="customer">
              Customer
            </option>

            <option value="other">
              Other
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Enquiry Category *</label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="general">
              General
            </option>

            <option value="drone">
              Drone Services
            </option>

            <option value="gis">
              GIS & Mapping
            </option>

            <option value="ai">
              AI Solutions
            </option>

            <option value="training">
              Training
            </option>

            <option value="business">
              Business
            </option>

            <option value="event">
              Event
            </option>

            <option value="career">
              Career
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Company</label>

          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name (optional)"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Message *</label>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your requirement..."
          rows={5}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Submitting..."
          : "Submit Enquiry"}
      </button>
    </form>
  );
};

export default EnquiryForm;