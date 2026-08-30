import Parent from "./components/Parent";

const ReactMemo_Impl = () => {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>React.memo</h1>

      <p>
        <code>React.memo</code> is a performance optimization that allows a
        component to skip re-rendering when its props have not changed.
        By default, React performs a shallow comparison of the component&apos;s
        props to determine whether a re-render is necessary.
      </p>

      <p>
        In this example, the <code>Parent</code> component controls two
        different pieces of state. Updating the parent count causes the
        <code> Parent</code> to re-render, but the child components can avoid
        re-rendering because their props remain unchanged.
      </p>

      <p>
        The <code>Child</code> component uses a custom comparison function with
        <code> React.memo</code>. This function gives us more control over when
        each child should re-render. In this example, Alice is intentionally
        forced to re-render, while Bob and Charlie only re-render when their
        props actually change.
      </p>

      <p>
        Open the browser console and click the buttons to see which components
        are rendered after each state update.
      </p>

      <Parent />
    </div>
  );
};

export default ReactMemo_Impl;
