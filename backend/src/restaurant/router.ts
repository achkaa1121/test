import { Router } from "express";
import { restaurant, detail } from "./controller";

const router = Router();

router.get("/list", restaurant);
router.get("/detail", detail);

export default router;
