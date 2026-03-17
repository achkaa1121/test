import { Router } from "express";
import { restaurant, detail } from "./controller";

const router = Router();

router.get("/list", restaurant);
router.get("/detail/:id", detail);

export default router;
