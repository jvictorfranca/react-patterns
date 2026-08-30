import UseMemo_Impl from "./pattern/UseMemo_Impl"

const UseMemo = () => {
    return (
        <div style={{ border: "2px solid blue", padding: "1rem" }}>
      <h2>useMemo</h2>

      <p>
        <code>useMemo</code> is used to memoize the result of an expensive
        calculation. Instead of running the calculation on every render, React
        can reuse the previously calculated value until one of its dependencies
        changes.
      </p>

      <p>
        In this example, <code>expensiveCalculation</code> simulates a costly
        operation. The calculation is memoized with <code>useMemo</code> and
        depends on the <code>input</code> value.
      </p>

      <p>
        Try clicking <strong>Increment Count</strong>. The component will
        re-render, but the expensive calculation will not run again because
        <code> input</code> has not changed.
      </p>

      <p>
        When you click <strong>Change Input</strong>, the dependency changes,
        so <code>useMemo</code> runs the calculation again and stores the new
        result.
      </p>

      <p>
        Open the browser console and look for{" "}
        <code>Running expensive calculation...</code> to observe when the
        calculation actually executes.
      </p>

        <UseMemo_Impl />

      </div >
    )
}

export default UseMemo