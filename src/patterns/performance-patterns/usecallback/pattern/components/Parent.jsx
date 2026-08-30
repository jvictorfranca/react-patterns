import { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  // useCallback returns a stable function reference across renders
  // as long as the dependency array doesn't change.
  const handleClick = useCallback(() => {
    console.log("Child clicked!");
  }, []);

  return (
    <div style={{ border: "2px solid blue", padding: "1rem" }}>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Parent
      </button>

      <Child name="Memoized Child" onClick={handleClick} />
    </div>
  );
};

export default Parent;
