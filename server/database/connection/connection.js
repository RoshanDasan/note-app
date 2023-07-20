import mongoose from "mongoose";
const client_url =
  "mongodb+srv://roshan:r1o2s3h4a5n6@cluster0.zeylsb4.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    await mongoose.connect(client_url).then(() => {
      console.log("Database connected");
    });
  } catch (error) {
    console.log(`error connecting mongodb: ${error}`);
  }
};

