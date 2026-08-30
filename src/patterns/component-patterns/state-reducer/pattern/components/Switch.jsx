import { useState } from "react";

const Switch = ({
  onChange,
  // default: accept all changes
  stateReducer = (state, changes) => changes,
}) => {
  const [state, setState] = useState({ on: false, toggleCount: 0 });

  function internalSetState(changes) {
    // 1. Run reducer
    const reducedChanges = stateReducer(state, changes);

    // 2. If reducer blocked the change, exit
    if (!reducedChanges) return;

    // 3. Apply changes to internal state
    setState((prev) => ({ ...prev, ...reducedChanges }));

    // 4. Notify consumer
    onChange?.(reducedChanges, state);
  }

  const toggle = () => {
    internalSetState({
      on: !state.on,
      toggleCount: state.toggleCount + 1,
      type: "toggle",
    });
  };

  return (
    <button
      onClick={toggle}
      style={{
        padding: "10px 20px",
        borderRadius: "20px",
        border: "1px solid #ccc",
        background: state.on ? "limegreen" : "lightgray",
        color: "white",
        cursor: "pointer",
      }}
    >
      {state.on ? "ON" : "OFF"} ({state.toggleCount})
    </button>
  );
};

export default Switch;
