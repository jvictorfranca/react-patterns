import { Link } from "react-router-dom";
import Courses from "./components/TanstackQuery_Impl_Pokemons";

const Home = () => (
  <div
    style={{
      padding: "1.5rem",
      textAlign: "center",
    }}
  >
    <h2 style={{ marginBottom: "0.5rem" }}>🏠 Home</h2>

    <p style={{ color: "#666" }}>
      Welcome to the TanStack Query Pokémon demo!
    </p>

    <Link
      to="/fetch-state-management/tanstack-query/pokemons"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        marginTop: "1.5rem",
        padding: "0.9rem 1.5rem",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #ef5350, #d32f2f)",
        color: "#fff",
        textDecoration: "none",
        fontSize: "1.05rem",
        fontWeight: "700",
        boxShadow: "0 6px 16px rgba(211, 47, 47, 0.25)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <img
        src="/pokeball_icon.webp"
        alt="Pokéball"
        style={{
          width: "32px",
          height: "32px",
          objectFit: "contain",
        }}
      />

      Fetch Pokémons

      <span style={{ fontSize: "1.2rem" }}>→</span>
    </Link>
  </div>
);

const TanstackQuery_Impl = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default TanstackQuery_Impl;