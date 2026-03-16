import { Schema, model } from "mongoose";

const addressSchema = new Schema(
  {
    building: { type: String, required: true },
    coord: { type: [String], required: true },
    street: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  {
    _id: false,
  },
);
const gradesSchema = new Schema(
  {
    date: { type: Date, required: true },
    grade: { type: String, required: true },
    score: { type: Number, required: true },
  },
  { _id: false },
);
const restaurantSchema = new Schema(
  {
    address: addressSchema,
    borough: { type: String, required: true },
    cuisine: { type: String, required: true },
    grades: { type: [gradesSchema], required: true },
    name: { type: String, required: true },
    restaurant_id: { type: String, required: true },
  },
  {
    collection: "restaurants",
  },
);
const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
