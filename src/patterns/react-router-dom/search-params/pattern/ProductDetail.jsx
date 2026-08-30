import { useParams, Link } from "react-router-dom";
import { products } from "./data/products";

const ProductDetail = () => {
  // useParams gives us access to the dynamic part of the URL
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
        <h3>❌ Product not found</h3>
        <p>
          Sorry, the product with ID <strong>{id}</strong> does not exist.
        </p>
        {/* Back to products link */}
        <Link to="/products">⬅️ Back to Products</Link>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid gray", marginBottom: "3rem" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>ID:</strong> {product.id}</p>

      {/* Product reviews link */}
      <Link to={`/products/${product.id}/reviews`}>
        📝 View Reviews for {product.name}
      </Link>
    </div>
  );
};

export default ProductDetail;