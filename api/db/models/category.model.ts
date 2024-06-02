import {Document, model, models, Schema} from "mongoose";
import {unique} from "next/dist/build/utils";

export interface ICategory extends Document {
  _id: string;
  name: string;
  properties: { key: string; vals: string[] }[];
}

const CategorySchema = new Schema({
  name: {type: String, required: true, unique: true},
  properties: [
    {
      key: { type: String },
      vals: [{ type: String }],
    },
  ],
})

const Category = models.Category || model("Category", CategorySchema);

export default Category;
