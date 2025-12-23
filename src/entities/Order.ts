import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { OrderItem } from "./OrderItem";

export type OrderStatus = "pending" | "preparing" | "ready" | "delivered";
export type LocationType = "mesa" | "carpa" | "llevar";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ name: "created_at" })
  created_at!: Date;

  @Column({
    type: "enum",
    enum: ["mesa", "carpa", "llevar"],
  })
  location_type!: LocationType;

  @Column()
  location_id!: string;

  @Column({
    type: "enum",
    enum: ["pending", "preparing", "ready", "delivered"],
    default: "pending",
  })
  status!: OrderStatus;

  @OneToMany(() => OrderItem, (item) => item.order, {
    cascade: true,
  })
  items!: OrderItem[];
}
