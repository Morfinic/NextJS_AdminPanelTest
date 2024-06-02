"use client";
import {useRouter} from "next/navigation";
import {createProduct, updateProduct} from "@/api/calls/Products";
import {CreateProductParams, ProductId} from "@/types";
import {getCategories} from "@/api/calls/Categories";
import {useEffect, useState} from "react";
import {FileUploader} from "@/components/FileUploader";
import {useUploadThing} from "@/api/uploadthing";

export default function ProductForm(product: ProductId) {
  const router = useRouter()

  const [name, setName] = useState(product.name || "");
  const [category, setCategory] = useState(product.category || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(product.price || "");
  const [image, setImage] = useState(product.imageUrl || "")

  const [files, setFiles] = useState<File[]>([]);
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([])

  const { startUpload } = useUploadThing("imageUploader")

  const handleSubmit = async () => {
    const rawData: CreateProductParams = {
      name: name,
      description: description,
      imageUrl: "",
      price: +price,
      category: category,
      properties: properties
    }

    if(files.length > 0){
      const uploadImages = await startUpload(files)
      if(!uploadImages) return;

      rawData.imageUrl = uploadImages[0].url
    }

    console.log(rawData)

    if (product._id) {
      await updateProduct(product._id, rawData)
    } else {
      await createProduct(rawData)
    }

    return router.push("/products")
  }

  useEffect(() => {
    (async () => {
      const data = await getCategories()
      setCategories(data)
    })()
  }, [])

  const propertiesToFill = [];
  if(categories.length > 0 && category){
    const selectedCat = categories.find(({_id}) => _id === category)
    propertiesToFill.push(...selectedCat.properties)
  }

  function setProductProp(propKey, selVal){
    setProperties(prev => {
      const propsToAdd = {key: propKey, vals: selVal};

      const ret = [...prev, propsToAdd]
      console.log(ret)

      return ret;
    })
  }

  return <>
    <form action={handleSubmit}>
      <label>Product name</label>
      <input type="text" placeholder="product name" value={name} onChange={ev => setName(ev.target.value)} />

      <label>Image</label>

      <FileUploader
        onFieldChange={setImage}
        imageUrl={image}
        setFiles={setFiles} />

      <label>Category</label>
      <select name="category" value={category} onChange={ev => setCategory(ev.target.value)}>
        <option value="">Uncategorized</option>
          {categories.map((c: any) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
      </select>
      {categories.length > 0 && category && (
        <div>
          {propertiesToFill.length > 0 && propertiesToFill.map(p => (
            <div className="flex gap-1">
              <div>{p.key}</div>
              <select
                value={properties[p._id]}
                onChange={ev => setProductProp(p.key, ev.target.value)}
              >
                <option value="None">None</option>
                {p.vals.map(v => (
                  <option value={v}>{v}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      <label>Description</label>
      <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>

      <label>Price</label>
      <input type="number" step="0.01" placeholder="price" value={price} onChange={ev => setPrice(+ev.target.value)} />

      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  </>
}
