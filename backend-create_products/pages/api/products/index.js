import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const productData = await Product.create(request.body);
      return response.status(201).json(productData);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }
}
