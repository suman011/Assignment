import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB.URI, {
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo");
  } catch (error) {
    console.log("Error connecting");
  }
};

export default Connection;
