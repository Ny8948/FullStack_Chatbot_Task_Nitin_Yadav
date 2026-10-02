import { Request, Response, NextFunction } from "express";
import Enquiry from "../models/Enquiry";

/**
 * CREATE ENQUIRY
 * POST /api/enquiries
 */
export const createEnquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      email,
      phone,
      userType,
      category,
      company,
      message,
      source,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !userType ||
      !category ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      userType,
      category,
      company,
      message,
      source: source || "Website",
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: enquiry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET ALL ENQUIRIES
 * GET /api/enquiries
 */
export const getEnquiries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      search,
      status,
      category,
      userType,
    } = req.query;

    const filter: any = {};

    // Search by name/email/phone
    if (search) {
      filter.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
        {
          phone: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // Status filter
    if (status && status !== "all") {
      filter.status = status;
    }

    // Category filter
    if (category && category !== "all") {
      filter.category = category;
    }

    // User type filter
    if (userType && userType !== "all") {
      filter.userType = userType;
    }

    const enquiries = await Enquiry.find(filter)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    next(error);
  }
};
/**
 * GET SINGLE ENQUIRY
 * GET /api/enquiries/:id
 */
export const getEnquiryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * UPDATE ENQUIRY
 * PUT /api/enquiries/:id
 */
export const updateEnquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry updated successfully.",
      data: enquiry,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE ENQUIRY
 * DELETE /api/enquiries/:id
 */
export const deleteEnquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(
      req.params.id
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};