import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { StyledLink } from "../Link/Link.styled";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push(
        "/"
      ); /*push mich auf die Hauptseite, nachdem das Produkt gelöscht wurde*/
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <ProductCard>
        <button
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          <span role="img" aria-label="pencil">
            🖊️
          </span>
        </button>
        <button
          onClick={() => {
            handleDeleteProduct(id);
          }}
        >
          <span role="img" aria-label="trash">
            🗑️
          </span>
        </button>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
        {isEditMode ? (
          <ProductForm
            onSubmit={handleEditProduct}
            value={data}
            isEditMode={isEditMode}
          />
        ) : null}
        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
    </>
  );
}
