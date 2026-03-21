import mongoose from "mongoose";

let isConnectionListenerRegistered = false;

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URL;

  if (!mongoUri) {
    throw new Error("MONGODB_URL is missing in server/.env");
  }

  if (!isConnectionListenerRegistered) {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error.message);
    });

    isConnectionListenerRegistered = true;
  }

  await mongoose.connect(mongoUri, {
    dbName: "imagify",
  });
};

export default connectDB;
