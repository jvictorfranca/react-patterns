import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchPokemon = async () => {
  console.log("Fetching Pokémon ...");

  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

  if (!res.ok) throw new Error("Failed to fetch Pokémon");

  return res.json();
};

const Courses = () => {
  // useQuery automatically handles loading, error, caching, and refetching
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
    staleTime: 1000 * 60, // Time that the data is still fresh
    cacheTime: 1000*60*10, // Time that the data is cached. If data is cached but not stale, cached data will be shown, but refetch will be triggered
    refetchInterval: 1000 * 30, // Times to refetch data within that interval
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <p>⏳ Loading Pokémon...</p>;

  if (isError) {
    return <p style={{ color: "red" }}>❌ {error.message}</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "2rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Link
          to="/fetch-state-management/tanstack-query"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            background: "#f4f4ff",
            color: "#646cff",
            textDecoration: "none",
            fontWeight: "600",
            transition: "all 0.2s ease",
          }}
        >
          ← Back to Initial page
        </Link>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 style={{ margin: "0 0 0.4rem" }}>⚡ Pokémon</h2>
          <p style={{ margin: 0, color: "#666" }}>
            Data fetched using TanStack Query
          </p>
        </div>

        <button
          onClick={() => refetch()}
          style={{
            padding: "0.65rem 1rem",
            border: "none",
            borderRadius: "8px",
            background: "#646cff",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          🔄 Refresh
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1rem",
        }}
      >
        {data.results.map((pokemon) => (
          <div
            key={pokemon.name}
            style={{
              padding: "1.25rem",
              background: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.75rem",
                textTransform: "capitalize",
                color: "#222",
              }}
            >
              {pokemon.name}
            </h3>

            <a
              href={pokemon.url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#646cff",
                fontSize: "0.9rem",
                textDecoration: "none",
                wordBreak: "break-all",
              }}
            >
              View API data →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;