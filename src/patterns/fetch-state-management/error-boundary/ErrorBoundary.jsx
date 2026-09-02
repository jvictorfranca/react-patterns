import ErrorBoundary_Impl from "./pattern/ErrorBoundary_Impl";

const ErrorBoundary = () => {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <p style={{ lineHeight: "1.6", color: "#555" }}>
        Error Boundaries allow React applications to gracefully handle
        rendering errors in a specific part of the component tree. Instead of
        crashing the entire application, an Error Boundary can display a
        fallback UI while the rest of the application continues working.
        In this example, we use <code>react-error-boundary</code> to catch
        errors, display a fallback component, and provide a way to reset the
        error state.
      </p>

      <ErrorBoundary_Impl />
    </div>
  );
};

export default ErrorBoundary;
