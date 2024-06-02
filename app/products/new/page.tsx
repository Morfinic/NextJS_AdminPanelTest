import ProductForm from "@/components/ProductForm";
import {getCategories} from "@/api/calls/Categories";

export default async function New() {
  return <>
    <h1>New product</h1>
    <ProductForm />
  </>
}
