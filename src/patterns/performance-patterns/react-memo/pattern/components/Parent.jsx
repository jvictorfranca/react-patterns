import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <div style={{ padding: "1rem", border: "2px solid blue" }}>
      <h2>Parent Component</h2>
      <p>Parent Count: {parentCount}</p>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Increment Parent
      </button>

      <p style={{ marginTop: "1rem" }}>Child Count: {childCount}</p>
      <button onClick={() => setChildCount(childCount + 1)}>
        Increment Child
      </button>

      {/* Render multiple children */}
      <Child name="Alice" count={childCount} />
      <Child name="Bob" count={childCount} />
      <Child name="Charlie" count={childCount} />
    </div>
  );
}

export default Parent;
