import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EnquiryDetails from "./pages/EnquiryDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/enquiry"
          element={<Enquiry />}
        />

        <Route
          path="/login"
          element={<Login />}
        />


        {/* ================= PROTECTED ADMIN ROUTES ================= */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/enquiry/:id"
            element={<EnquiryDetails />}
          />

        </Route>

      </Routes>

      {/* Rule-Based Support Chatbot */}
      <Chatbot />

    </BrowserRouter>
  );
}

export default App;