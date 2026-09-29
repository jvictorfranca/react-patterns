import Redux_Impl from "./pattern/Redux_Impl";

const Redux = () => {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Redux & Slice</h1>

      <p style={{ lineHeight: "1.6", color: "#555" }}>
        Redux is a predictable state management library used to manage global
        application state. With Redux Toolkit, we can create slices that group
        related state, reducers, and actions together, making Redux easier to
        configure and maintain.
      </p>

      <p style={{ lineHeight: "1.6", color: "#555" }}>
        <strong>Observation:</strong> The <code>Provider</code> must wrap the
        components that need access to the Redux store. It can be added
        globally in <code>main.jsx</code>, which is usually the recommended
        approach when Redux is used throughout the application.
      </p>

      <p style={{ lineHeight: "1.6", color: "#555" }}>
        In this example, the <code>Provider</code> was added directly inside{" "}
        <code>Redux_Impl.jsx</code>. This keeps the Redux configuration isolated
        to this specific example without affecting the rest of the application.
      </p>

      <Redux_Impl />
    </div>
  );
};

export default Redux;