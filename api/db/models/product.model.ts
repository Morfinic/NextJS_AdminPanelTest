import mongoose, {Document, model, models, Schema} from "mongoose";

export interface IProduct extends Document {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
}

const ProductSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  price: {type: Number},
  category: {type: mongoose.Types.ObjectId, ref: "Category"},
})

const Product = models.Product || model("Product", ProductSchema);

export default Product;
