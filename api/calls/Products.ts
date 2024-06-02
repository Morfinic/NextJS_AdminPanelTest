"use server";
import {connToDb} from "../db"
import Product from "../db/models/product.model";
import {CreateProductParams} from "@/types";


export async function createProduct(product: CreateProductParams) {
  try {
    await connToDb();

    const newProduct = await Product.create(product)

    return JSON.parse(JSON.stringify(newProduct));
  } catch (err) {
    console.log(err);
  }
}

export async function getProducts() {
  try {
    await connToDb();

    const products = await Product.find().populate("category", "_id name")

    return JSON.parse(JSON.stringify(products));
  } catch (err) {
    console.log(err);
  }
}

export async function getProductById(id: string) {
  try {
    await connToDb();

    const products = await Product.findOne({_id: id})

    return JSON.parse(JSON.stringify(products));
  } catch (err) {
    console.log(err);
  }
}

export async function updateProduct(id: string, product: CreateProductParams) {
  try {
    await connToDb();

    const updatedProduct = await Product.updateOne({_id: id}, product)

    return JSON.parse(JSON.stringify(updatedProduct));
  } catch (err) {
    console.log(err);
  }
}

export async function deleteProduct(id: string) {
  try {
    await connToDb();

    const delProduct = await Product.deleteOne({_id: id})

    return;
  } catch (err) {
    console.log(err);
  }
}
