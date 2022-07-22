import express from "express";
import cardRoutes from "./routes/cardRoute";
import fileUpload from "express-fileupload";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true
  })
);

app.use(cardRoutes);

export default app;
