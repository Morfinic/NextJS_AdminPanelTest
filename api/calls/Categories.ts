"use server";
import {connToDb} from "@/api/db";
import Category from "@/api/db/models/category.model";
import {CreateCategoryParams} from "@/types";
import Product from "@/api/db/models/product.model";

export async function createCategory({name}: CreateCategoryParams) {
  try {
    await connToDb();

    const newCategory = await Category.create({
      name: name
    })

    return JSON.parse(JSON.stringify(newCategory));
  } catch (err) {
    console.log(err);
  }
}

export async function getCategories() {
  try {
    await connToDb();

    const categories = await Category.find()

    return JSON.parse(JSON.stringify(categories));
  } catch (err) {
    console.log(err);
  }
}

export async function getCategoryById(id: string) {
  try {
    await connToDb();

    const category = await Category.findOne({_id: id})

    return JSON.parse(JSON.stringify(category));
  } catch (err) {
    console.log(err);
  }
}

export async function updateCategory(id: string, category: CreateCategoryParams){
  try {
    await connToDb();

    const updatedCategory = await Category.updateOne({_id: id}, category)

    return JSON.parse(JSON.stringify(updatedCategory));
  } catch (err) {
    console.log(err);
  }
}
