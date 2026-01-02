// sse/sseController.ts
import { Request, Response } from "express";
import sseManager from "./sseManager";

export class SseController {

  connect = (req: Request, res: Response) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders();

    const client = sseManager.addClient(res);

    console.log("Cliente SSE conectado:", client.id);

    req.on("close", () => {
      console.log("Cliente SSE desconectado:", client.id);
      sseManager.removeClient(client.id);
    });
  };
}
