import mongoose from "mongoose";

const conection = async () => {
  

  //MongoDB database running on the local machine
  const local_URL = `{paste the mongo db cluster url}`;

  try {
    await mongoose.connect(local_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected successfully");
  } catch (error) {
    console.log(error, "connection failed");
  }
};

export default conection;
