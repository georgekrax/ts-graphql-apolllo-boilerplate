import { Request, Response } from "express";

export interface MyContext {
  req: Request;
  res: Response;
  payload?: { userId: bigint };
  redis?: Redis;
}
