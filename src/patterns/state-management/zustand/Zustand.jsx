import Zustand_Impl from "./pattern/Zustand_Impl";

const Zustand = () => {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Zustand</h1>

      <p style={{ lineHeight: "1.6", color: "#555" }}>
        Zustand is a lightweight state management library for React that makes
        it simple to create and manage global state. It provides a minimal API
        based on hooks, allowing components to access and update shared state
        without the need for providers or complex boilerplate.
      </p>

      <Zustand_Impl />
    </div>
  );
};

export default Zustand;
