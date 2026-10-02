import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("accessToken");
  const userData = localStorage.getItem("user");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!userData) {
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" replace />;
  }

  try {
    const user = JSON.parse(userData);

    if (user.role !== "admin") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;