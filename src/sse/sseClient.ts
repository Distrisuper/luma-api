import { Response } from "express";

export class SseClient {
  constructor(
    public readonly id: string,
    private readonly res: Response
  ) {}

  send(event: string, articleCode: string, quantity: number) {
    this.res.write(`event: ${event}\n`);
    this.res.write(`data: ${articleCode}-${quantity}\n\n`);
  }

  close() {
    this.res.end();
  }
}
