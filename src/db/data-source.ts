import "reflect-metadata";
import { DataSource } from "typeorm";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: [Order, OrderItem],
  synchronize: false,

  extra: {
    connectionLimit: 10,
  },
});
