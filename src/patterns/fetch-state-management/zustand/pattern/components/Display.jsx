import { useStore } from "../store/useStore";

const Display = () => {
  const { count } = useStore();

  return (
    <div
      style={{
        margin: "1rem 0",
        border: "1px dashed #888",
        padding: "1rem"
      }}
    >
      <h2>Display Component</h2>
      <p>The global count is: <strong>{count}</strong></p>
    </div>
  );
};

export default Display;