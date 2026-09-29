import { useStore } from "../store/useStore";

const Counter = () => {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div
      style={{
        margin: "1rem 0",
        border: "1px solid #ccc",
        padding: "1rem"
      }}
    >
      <h2>Counter Component</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment} style={{ marginRight: "0.5rem" }}>
        ➕ Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "0.5rem" }}>
        ➖ Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;