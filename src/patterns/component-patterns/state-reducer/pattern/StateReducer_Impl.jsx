import Switch from "./components/Switch";

const StateReducer_Impl = () => {
  return (
    <div>

    <p>
        The State Reducer Pattern allows consumers to control or customize a
        component&apos;s internal state changes. The component manages its own
        state, while the reducer provides a way to modify, allow, or block
        specific state updates.
      </p>

      <p>
        The examples below demonstrate different ways to customize the
        behavior of the same Switch component.
      </p>

      {/* 1. Limit toggling to 3 times */}
      <h3>🔢 Limited to 3 toggles</h3>
      <Switch
        stateReducer={(state, changes) => {
          if (changes.type === "toggle" && state.toggleCount >= 3) {
            console.log("🚫 Toggle limit reached");
            return null; // block update
          }
          return changes;
        }}
        onChange={(changes, prevState) => {
          console.log("onChange →", { changes, prevState });
        }}
      />

      {/* 2. Never allow turning OFF */}
      <h3>🚫 Can&apos;t turn OFF</h3>
      <Switch
        stateReducer={(state, changes) => {
          if (changes.type === "toggle" && state.on && !changes.on) {
            console.log("🚫 You cannot turn it OFF");
            return null;
          }
          return changes;
        }}
      />
      {/* 3. Force ON after 5 toggles */}
      <h3>⚡ Forced ON after 5 toggles</h3>
      <Switch
        stateReducer={(state, changes) => {
          if (changes.type === "toggle" && state.toggleCount >= 5) {
            return { ...changes, on: true }; // force ON
          }
          return changes;
        }}
      />
    </div>
  );
};

export default StateReducer_Impl;
