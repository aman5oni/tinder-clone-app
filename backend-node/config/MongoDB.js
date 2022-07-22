import mongoose from "mongoose";
import { MONGO_DB_URL } from "./appConfig";

const ConnectMongoose = async () => {
  const { connection } = await mongoose.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log(`Database connected for ${connection.name} : ${connection.host}`);
};

export default ConnectMongoose;
