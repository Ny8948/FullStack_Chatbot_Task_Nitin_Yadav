import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Support Assistant</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <Link to="/enquiry">Enquiry</Link>

        {!token && (
          <Link to="/login">Admin Login</Link>
        )}

        {token && user && (
          <>
            <Link to="/admin/dashboard">
              Dashboard
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="logout-button"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;