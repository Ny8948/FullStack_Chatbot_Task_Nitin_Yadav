import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";

import "./AdminDashboard.css";

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
}

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");

  const [loading, setLoading] = useState(false);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);

      const response = await api.get("/enquiries", {
        params: {
          search,
          status,
          category,
        },
      });

      setEnquiries(response.data.data);
    } catch (error) {
      console.error("Failed to fetch enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [search, status, category]);

  const deleteEnquiry = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/enquiries/${id}`);

      await fetchEnquiries();
    } catch (error) {
      console.error("Failed to delete enquiry:", error);
    }
  };

  const updateStatus = async (
    id: string,
    newStatus: string
  ) => {
    try {
      await api.put(`/enquiries/${id}`, {
        status: newStatus,
      });

      await fetchEnquiries();
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const total = enquiries.length;

  const newCount = enquiries.filter(
    (item) => item.status === "new"
  ).length;

  const inProgressCount = enquiries.filter(
    (item) => item.status === "in-progress"
  ).length;

  const resolvedCount = enquiries.filter(
    (item) => item.status === "resolved"
  ).length;

  return (
    <div className="admin-page">

      {/* Header */}

      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>

          <p>
            Manage customer and student enquiries
          </p>
        </div>
      </div>


      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">
          <span>Total Enquiries</span>
          <strong>{total}</strong>
        </div>

        <div className="stat-card">
          <span>New</span>
          <strong>{newCount}</strong>
        </div>

        <div className="stat-card">
          <span>In Progress</span>
          <strong>{inProgressCount}</strong>
        </div>

        <div className="stat-card">
          <span>Resolved</span>
          <strong>{resolvedCount}</strong>
        </div>

      </div>


      {/* Filters */}

      <div className="filter-section">

        <input
          type="text"
          placeholder="Search name, email or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">
            All Status
          </option>

          <option value="new">
            New
          </option>

          <option value="in-progress">
            In Progress
          </option>

          <option value="resolved">
            Resolved
          </option>

          <option value="closed">
            Closed
          </option>
        </select>


        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">
            All Categories
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

          <option value="general">
            General
          </option>
        </select>

      </div>


      {/* Enquiry Table */}

      <div className="table-container">

        {loading ? (
          <p>Loading enquiries...</p>
        ) : enquiries.length === 0 ? (
          <p>No enquiries found.</p>
        ) : (
          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {enquiries.map((enquiry) => (
                <tr key={enquiry._id}>

                  <td>
                    {enquiry.name}
                  </td>

                  <td>
                    {enquiry.email}
                  </td>

                  <td>
                    {enquiry.phone}
                  </td>

                  <td>
                    {enquiry.category}
                  </td>

                  <td>

                    <select
                      value={enquiry.status}
                      onChange={(e) =>
                        updateStatus(
                          enquiry._id,
                          e.target.value
                        )
                      }
                    >
                      <option value="new">
                        New
                      </option>

                      <option value="in-progress">
                        In Progress
                      </option>

                      <option value="resolved">
                        Resolved
                      </option>

                      <option value="closed">
                        Closed
                      </option>
                    </select>

                  </td>

                  <td>
                    {new Date(
                      enquiry.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="action-buttons">

                    <Link
                      to={`/admin/enquiry/${enquiry._id}`}
                      className="view-button"
                    >
                      View
                    </Link>

                    <button
                      onClick={() =>
                        deleteEnquiry(enquiry._id)
                      }
                      className="delete-button"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
};

export default AdminDashboard;