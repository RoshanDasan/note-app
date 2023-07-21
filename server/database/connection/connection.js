import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(
        process.env.CONNECTION_URI ||
          "mongodb+srv://roshan:r1o2s3h4a5n6@cluster0.zeylsb4.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Database connected");
      });
  } catch (error) {
    console.log(`error connecting mongodb: ${error}`);
  }
};
