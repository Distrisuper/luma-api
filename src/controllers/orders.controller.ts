import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";
import { CreateOrderInput, UpdateStatusOrderInput } from "../schemas/orders.schema";

export class OrdersController {
  private service = new OrdersService();

  create = async (req: Request, res: Response) => {
    try {
      const validatedData = req.body as CreateOrderInput;
      const order = await this.service.create(validatedData);
      res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error creating order",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const orders = await this.service.getAll();
      res.status(200).json({
        success: true,
        data: orders,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error getting orders",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
  updateStatus = async (req: Request, res: Response) => {
    try {
      const validatedData = req.body as UpdateStatusOrderInput;
      console.log(req.params.id);
      const order_id = parseInt(req.params.id);
      const order = await this.service.updateStatus(validatedData, order_id);
      res.status(200).json({
        success: true,
        data: order,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating status",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
}
