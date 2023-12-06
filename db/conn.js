import mongoose from "mongoose";

const connectDB = async function () {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("connection successful")
  } catch (error) {
      console.log(error)
  }
};

export default connectDB;