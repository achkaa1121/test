import { Router } from "express";
import { restaurant, detail } from "./controller";

export const router = () => {
  const router = Router();
  router.get("/", restaurant);
  router.get("/detail", detail);
};
