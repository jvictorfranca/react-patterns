import { useState } from "react";

const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  if (count === 5) {
    // Simulate a JS error
    throw new Error("💥 Counter crashed at 5!");
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>➕ Increment</button>
    </div>
  );
};

export default BuggyCounter;