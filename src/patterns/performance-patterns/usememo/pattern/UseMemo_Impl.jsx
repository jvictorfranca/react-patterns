import { useState, useMemo } from "react";

// heavy calculation
function expensiveCalculation(num) {
  console.log("Running expensive calculation...");
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    result += i % num;
  }
  return result;
}

const UseMemo_Impl = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(5);

  // ✅ useMemo: recompute ONLY when "input" changes
  const result = useMemo(() => expensiveCalculation(input), [input]);

  return (
    <div style={{ border: "2px solid blue", padding: "1rem" }}>
      <h2>Expensive Calculation Demo</h2>
      <p>Input: {input}</p>
      <p>Result: {result}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
      <br />
      <button onClick={() => setInput(input + 1)}>
        Change Input ({input})
      </button>
    </div>
  );
};

export default UseMemo_Impl;
