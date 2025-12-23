import "reflect-metadata";
import express from "express";
import cors from "cors";
import 'dotenv/config';
import ordersRoutes from "./routes/orders.routes";
import { AppDataSource } from "./db/data-source";
import articlesRoutes from "./routes/articles.routes";

const app = express();

app.use(cors({ origin: ["https://distribar-app.vercel.app", "http://localhost:3000"] }));
app.use(express.json());

app.use("/v1/orders", ordersRoutes);
app.use("/v1/articles", articlesRoutes);
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("DB conectada");

    app.listen(PORT, () => {
      console.log(`API corriendo en puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar DB", err);
  });
export default app;
