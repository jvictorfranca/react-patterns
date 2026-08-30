import { Link, useSearchParams } from "react-router-dom";
import { products } from "./data/products";
import { useState, useEffect } from "react";

const SearchParams_Impl = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  // Unique categories for dropdown
  const categories = [...new Set(products.map((p) => p.category))];

  // Update URL search params when query or category changes
  useEffect(() => {
    const params = {};
    if (query) params.q = query;
    if (category) params.category = category;
    setSearchParams(params);
  }, [query, category, setSearchParams]);

  // Filter products based on search and category
  const filteredProducts = products.filter((p) => {
    const matchesQuery =
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>

      <p>
      Search params allow us to store and read filter values directly from the
      URL. In this example, <code>useSearchParams</code> keeps the search query
      and category synchronized with the URL, making the filters shareable and
      preserving their state when the page is refreshed.
    </p>

    <p>
      Try searching for a product or selecting a category to see the URL update
      automatically.
    </p>

      <h2>🛍️ Products {` - category: ${category || "all"} - query: ${query || "none"}`}</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name or description..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px", marginRight: "1rem" }}
      />

      {/* Category dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <ul>
        {
          filteredProducts.length > 0 ? (filteredProducts.map((product) => (
            <li key={product.id}>
              {/* Each product links to a dynamic route /products/:id */}
              <Link to={`/react-router-dom/search-params/products/${product.id}`}>{product.name}</Link> |{" "}<span>{product.category}</span>
            </li>
          ))) : (
            <li>No products found.</li>
          )
        }
      </ul>
    </div>
  );
};

export default SearchParams_Impl;