import { Router } from "express";

import {
  createEnquiry,
  getEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
} from "../controllers/enquiryController";

import authMiddleware, {
  adminOnly,
} from "../middleware/authMiddleware";

const router = Router();

// Public API
// Customer/student enquiry submit kar sakta hai
router.post("/", createEnquiry);


// Protected Admin APIs

router.get(
  "/",
  authMiddleware,
  adminOnly,
  getEnquiries
);

router.get(
  "/:id",
  authMiddleware,
  adminOnly,
  getEnquiryById
);

router.put(
  "/:id",
  authMiddleware,
  adminOnly,
  updateEnquiry
);

router.delete(
  "/:id",
  authMiddleware,
  adminOnly,
  deleteEnquiry
);

export default router;