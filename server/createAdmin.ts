import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./config/db";
import User from "./models/User";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({
      email: "admin@example.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(
      "Admin@123",
      10
    );

    await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin created successfully ✅");
    console.log("Email: admin@example.com");
    console.log("Password: Admin@123");

    process.exit(0);
  } catch (error) {
    console.error("Failed to create admin:", error);
    process.exit(1);
  }
};

createAdmin();