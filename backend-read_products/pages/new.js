import { useRouter } from "next/router";
import { mutate } from "swr";

export default function NewProductPage() {
  const router = useRouter();
  async function onSubmit(event) {
    event.preventDefault();

    const product = event.target.product.value;

    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product }),
    });

    const data = await response.json();
    mutate("/api/products");
    //router.push(`/${data._id}`);
    router.push(`/`);
  }
  return (
    <>
      <h1>Add New Product</h1>
      <form onSubmit={onSubmit}>
        <label>
          Product text:
          <textarea name="product" required></textarea>
        </label>
        <button>Send</button>
      </form>
    </>
  );
}
