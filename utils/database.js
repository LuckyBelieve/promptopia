import mongoose from "mongoose";
let isCOnnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isCOnnected) {
    console.log("mongodb is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connection established");
  } catch (error) {
    console.log(error);
  }
};
