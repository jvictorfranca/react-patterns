import TanstackQuery_Impl from "./pattern/TanstackQuery_Impl";

const TanstackQuery = () => {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1>TanStack Query</h1>

      <p style={{ lineHeight: "1.6", color: "#555" }}>
        TanStack Query, formerly known as React Query, is a library for
        managing asynchronous server state in React applications. It handles
        data fetching, loading states, errors, caching, background updates,
        and refetching without requiring us to manually manage all of this
        logic with React state.
      </p>

      <p style={{ lineHeight: "1.6", color: "#555" }}>
        In this example, the <code>QueryClientProvider</code> is configured
        inside <code>TanstackQuery_Impl_Pokemons</code>. Normally, the provider
        can be placed higher in the application tree, such as in{" "}
        <code>main.jsx</code>, allowing multiple components to share the same
        Query Client. Here, it is intentionally kept inside the example so
        that the TanStack Query implementation remains isolated.
      </p>

      <p style={{ lineHeight: "1.6", color: "#555" }}>
        The example uses the <code>useQuery</code> hook to fetch Pokémon from
        the PokéAPI. To see the example running, click the{" "}
        <strong>Fetch Pokemons</strong> link in the example below.
      </p>

    <TanstackQuery_Impl />

      <h2>useQuery Configuration</h2>

      <p style={{ lineHeight: "1.6", color: "#555" }}>
        The <code>useQuery</code> hook receives a configuration object with
        several important properties:
      </p>

      <ul style={{ lineHeight: "1.8", color: "#555" }}>
        <li>
          <strong>queryKey:</strong> Identifies the query and its cached data.
          Here, <code>["pokemon"]</code> uniquely identifies the Pokémon query.
        </li>

        <li>
          <strong>queryFn:</strong> The function responsible for fetching the
          data. In this example, <code>fetchPokemon</code> makes the request to
          the PokéAPI.
        </li>

        <li>
          <strong>staleTime:</strong> Defines how long the fetched data is
          considered fresh. During this period, TanStack Query can use the
          existing data without considering it stale.
        </li>

        <li>
          <strong>cacheTime:</strong> Defines how long unused query data stays
          in the cache before being removed. Cached data can be reused when the
          query becomes active again.
        </li>

        <li>
          <strong>refetchInterval:</strong> Automatically refetches the data at
          the specified interval. In this example, the query is refetched every
          30 seconds.
        </li>

        <li>
          <strong>refetchOnWindowFocus:</strong> When enabled, TanStack Query
          can refetch the query when the user returns to the browser window.
        </li>
      </ul>

      <p style={{ lineHeight: "1.6", color: "#777", fontSize: "0.9rem" }}>
        <strong>Note:</strong> The exact cache behavior depends on whether the
        query is active, stale, or unused. The important idea is that TanStack
        Query separates the server state lifecycle from the component's local
        state.
      </p>
    </div>
  );
};

export default TanstackQuery;