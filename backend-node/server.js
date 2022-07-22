import app from "./app";
import { PORT } from "./config/appConfig";
import { initCloudinary } from "./config/cloudinary";
import ConnectMongoose from "./config/MongoDB";

app.listen(PORT, () => {
  console.log(`Listening To Port:${PORT}`);
});
initCloudinary();
ConnectMongoose();
