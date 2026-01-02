import { Response } from "express";
import { randomUUID } from "crypto";
import { SseClient } from "./sseClient";

export class SseManager {
  private clients = new Map<string, SseClient>();

  addClient(res: Response): SseClient {
    const id = randomUUID();

    console.log("Cliente SSE conectado:", id);
    const client = new SseClient(id, res);
    this.clients.set(id, client);

    return client;
  }

  removeClient(id: string) {
    this.clients.get(id)?.close();
    this.clients.delete(id);
  }

  broadcast(event: string, articleCode: string, quantity: number) {
    console.log(event)
    console.log(articleCode)
    console.log(quantity)
    for (const client of this.clients.values()) {
      client.send(event, articleCode,quantity);
    }
  }

  getClientsCount() {
    return this.clients.size;
  }
}

export default new SseManager();