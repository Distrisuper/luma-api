import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller";
import { validate } from "../middlewares/validation.middleware";
import { CreateOrderSchema, updateStatusOrderSchema } from "../schemas/orders.schema";

const router = Router();
const controller = new OrdersController();

router.post("/", validate(CreateOrderSchema), controller.create);
router.get("/", controller.getAll);
router.put("/:id", validate(updateStatusOrderSchema), controller.updateStatus);


export default router;
