import Parent from "./components/Parent";

const UseCallback_Impl = () => {
  return (
  
      <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>useCallback + React.memo</h1>

      <p>
        <code>React.memo</code> can prevent a component from re-rendering when
        its props have not changed. However, when a function is passed as a
        prop, a new function reference is normally created every time the
        parent component renders.
      </p>

      <p>
        <code>useCallback</code> solves this problem by memoizing a function and
        preserving the same function reference between renders as long as its
        dependencies remain unchanged. This allows <code>React.memo</code> to
        correctly determine that the child&apos;s props have not changed.
      </p>

      <p>
        In this example, the <code>Parent</code> component passes the
        <code> handleClick</code> function to a memoized <code>Child</code>.
        Because <code>handleClick</code> is wrapped with <code>useCallback</code>
        and has an empty dependency array, its reference remains stable when
        the parent&apos;s count changes.
      </p>

      <p>
        Try clicking <strong>Increment Parent</strong> and check the browser
        console. The parent will re-render, but the memoized child will not,
        because its <code>name</code> and <code>onClick</code> props remain the
        same.
      </p>

      <Parent />
    </div>

);
};

export default UseCallback_Impl;
