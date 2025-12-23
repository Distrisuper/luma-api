import { CreateOrderInput, UpdateStatusOrderInput } from "../schemas/orders.schema";
import { AppDataSource } from "../db/data-source";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";

export class OrdersService {
  async create(data: CreateOrderInput) {
    const orderRepository = AppDataSource.getRepository(Order);

    const order = new Order();
    order.location_type = data.location_type;
    order.location_id = data.location_id;
    order.status = data.status;

    order.items = data.products.map((product) => {
      const item = new OrderItem();
      item.product_id = typeof product.product_id === "string" 
        ? parseInt(product.product_id, 10) 
        : product.product_id;
      item.name = product.name;
      item.quantity = product.quantity;
      item.price = product.price;
      item.area = product.area; // mapear area -> target
      return item;
    });

    const savedOrder = await orderRepository.save(order);

    const orderWithItems = await orderRepository.findOne({
      where: { id: savedOrder.id },
      relations: ["items"],
    });

    return orderWithItems;
  }

  async getAll() {
    const orderRepository = AppDataSource.getRepository(Order);
    return await orderRepository.find({ relations: ["items"] });
  }

  async updateStatus(data: UpdateStatusOrderInput, order_id: number) {
    const orderRepository = AppDataSource.getRepository(Order);
    const order = await orderRepository.findOne({ where: { id: order_id } });
    if (!order) {
      throw new Error("Order not found");
    }
    order.status = data.status;
    return await orderRepository.save(order);
  }
}
