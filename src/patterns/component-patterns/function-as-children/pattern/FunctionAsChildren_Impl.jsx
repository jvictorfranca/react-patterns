import DataFetcherExamples from "./components/DataFetcherExamples";

const FunctionAsChildren_Impl = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Function as Children Pattern</h1>
      <p>
        Instead of passing JSX as children, we pass a function. The component
        calls that function with data or state, and we decide what to render.
      </p>

      <DataFetcherExamples />

      <p>
        <strong>Key Concept:</strong> This pattern is very similar to Render
        Props, but instead of using a dedicated prop like <code>render</code>,
        we use the <code>children</code> prop itself.
      </p>
    </div>
  );
};

export default FunctionAsChildren_Impl;
