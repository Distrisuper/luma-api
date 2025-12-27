import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Order } from "./Order";

export type Area = "bar" | "kitchen";

export type OrderItemStatus = "pending" | "delivered";

@Entity("order_items")
export class OrderItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  product_id!: number;

  @Column()
  name!: string;

  @Column()
  quantity!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;

  @Column({
    type: "enum",
    enum: ["bar", "kitchen"],
  })
  area!: Area;

  @Column({
    type: "enum",
    enum: ["pending", "delivered"],
    default: "pending",
  })
  status!: OrderItemStatus;

  @ManyToOne(() => Order, (order) => order.items, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "order_id" })
  order!: Order;
}
