import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const newProduct = await Product.create(request.body);
      return response.status(200).json(newProduct);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "error creating new product" });
    }
  }

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }
}
