import mongoose from "mongoose";

const conection = async () => {
  const URL = `{paste the mongo db cluster url}`;

  //MongoDB database running on the local machine
  const local_URL = `mongodb+srv://wildlyelite:k6y6LGPbOu6kONt8@crud-app.7ifnyi6.mongodb.net/?retryWrites=true&w=majority`;

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
