import React from "react";

const Child = ({ name, count }) => {
  console.log(`Rendering Child: ${name}`);

  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "2px solid red", // visual aid to see re-renders
      }}
    >
      <h3>{name}</h3>
      <p>Count: {count}</p>
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  if (nextProps.name === "Alice") {
    return false; // force re-render for Alice
  }

  // Default shallow comparison for other children
  return (
    prevProps.name === nextProps.name &&
    prevProps.count === nextProps.count
  );
}

// Memoize Child to prevent unnecessary re-renders
// Apply custom comparator
export default React.memo(Child, areEqual);