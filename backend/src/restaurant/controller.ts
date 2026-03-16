import Restaurant from "./models";
import { Request, Response } from "express";
export const restaurant = async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.max(1, parseInt(req.query.limit as string) || 30);
    const skip = (page - 1) * limit;
    const filter: Record<string, unknown> = {};
    if (req.query.name) {
      filter.name = { $regex: req.query.name as string, $options: "i" };
    }
    if (req.query.cuisine) {
      filter.name = { $regex: req.query.cuisine as string, $options: "i" };
    }
    const [restaurants, total] = await Promise.all([
      Restaurant.find(filter)
        .skip(skip)
        .limit(limit)
        .select("name cuisine borough address"),
      Restaurant.countDocuments(filter),
    ]);
    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      restaurants,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server Error" });
  }
};
export const detail = () => {};
