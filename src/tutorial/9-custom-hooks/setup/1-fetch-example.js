import React from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      {!loading &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

const Product = ({ product }) => {
  console.log(product);
  return <img src={product.fields.image[0].url} alt="no image" />;
};

export default Example;
