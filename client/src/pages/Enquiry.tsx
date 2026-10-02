import { FormEvent, useState } from "react";
import api from "../services/api";
import "./Enquiry.css";

interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  userType: string;
  category: string;
  company: string;
  message: string;
}

const initialForm: EnquiryForm = {
  name: "",
  email: "",
  phone: "",
  userType: "student",
  category: "general",
  company: "",
  message: "",
};

const Enquiry = () => {
  const [form, setForm] = useState<EnquiryForm>(initialForm);

  const [errors, setErrors] = useState<
    Partial<Record<keyof EnquiryForm, string>>
  >({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSuccess("");
    setServerError("");
  };

  const validate = () => {
    const newErrors: Partial<
      Record<keyof EnquiryForm, string>
    > = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.category) {
      newErrors.category = "Please select a category";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccess("");
    setServerError("");

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/enquiries", {
        ...form,
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        message: form.message.trim(),
        source: "website-form",
      });

      if (response.data.success) {
        setSuccess(
          "Your enquiry has been submitted successfully. Our team will contact you soon."
        );

        setForm(initialForm);
      }
    } catch (error: any) {
      console.error("Enquiry submission error:", error);

      setServerError(
        error.response?.data?.message ||
          "Unable to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="enquiry-page">

      <section className="enquiry-header">
        <h1>Submit an Enquiry</h1>

        <p>
          Tell us about your requirement and our team
          will get back to you.
        </p>
      </section>

      <section className="enquiry-card">

        {success && (
          <div className="success-message">
            ✓ {success}
          </div>
        )}

        {serverError && (
          <div className="error-message">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="form-group">
            <label htmlFor="name">
              Full Name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            {errors.name && (
              <small className="field-error">
                {errors.name}
              </small>
            )}
          </div>


          {/* Email */}

          <div className="form-group">
            <label htmlFor="email">
              Email *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            {errors.email && (
              <small className="field-error">
                {errors.email}
              </small>
            )}
          </div>


          {/* Phone */}

          <div className="form-group">
            <label htmlFor="phone">
              Phone *
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
            />

            {errors.phone && (
              <small className="field-error">
                {errors.phone}
              </small>
            )}
          </div>


          {/* User Type */}

          <div className="form-group">
            <label htmlFor="userType">
              I am a *
            </label>

            <select
              id="userType"
              name="userType"
              value={form.userType}
              onChange={handleChange}
            >
              <option value="student">
                Student
              </option>

              <option value="customer">
                Customer
              </option>

              <option value="professional">
                Professional
              </option>

              <option value="business">
                Business / Organization
              </option>
            </select>
          </div>


          {/* Category */}

          <div className="form-group">
            <label htmlFor="category">
              Enquiry Category *
            </label>

            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="general">
                General
              </option>

              <option value="training">
                Training
              </option>

              <option value="drone-services">
                Drone Services
              </option>

              <option value="gis-mapping">
                GIS & Mapping
              </option>

              <option value="ai-technology">
                AI & Technology
              </option>

              <option value="career">
                Career
              </option>

              <option value="business">
                Business
              </option>
            </select>

            {errors.category && (
              <small className="field-error">
                {errors.category}
              </small>
            )}
          </div>


          {/* Company */}

          <div className="form-group">
            <label htmlFor="company">
              Company / Institute
            </label>

            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Optional"
            />
          </div>


          {/* Message */}

          <div className="form-group">
            <label htmlFor="message">
              Your Requirement *
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your requirement..."
              rows={5}
            />

            {errors.message && (
              <small className="field-error">
                {errors.message}
              </small>
            )}
          </div>


          <button
            type="submit"
            disabled={loading}
            className="submit-enquiry"
          >
            {loading
              ? "Submitting..."
              : "Submit Enquiry"}
          </button>

        </form>

      </section>

    </main>
  );
};

export default Enquiry;