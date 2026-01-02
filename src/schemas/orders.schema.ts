import { z } from "zod";

export const CreateOrderItemSchema = z.object({
  product_id: z.string().min(1),
  name: z.string().min(1),
  quantity: z.number().int().positive(),
  price: z.number().positive(),
  area: z.enum(["bar", "kitchen"]),
  status: z.string().min(1),
});

export const updateStatusOrderSchema = z.object({
  status: z.enum(["pending", "preparing", "ready", "delivered"]),
  area: z.enum(["bar", "kitchen"]),
});

export const CreateOrderSchema = z.object({
  location_type: z.enum(["mesa", "carpa", "camastro"]),
  location_id: z.string().min(1),
  status: z.enum(["pending", "preparing", "ready", "delivered"]),
  description: z.string().optional(),
  products: z.array(CreateOrderItemSchema).min(1),
});

export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;
export type CreateOrderItemInput = z.infer<typeof CreateOrderItemSchema>;
export type UpdateStatusOrderInput = z.infer<typeof updateStatusOrderSchema>;
