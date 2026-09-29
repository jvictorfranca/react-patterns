import CountextReducer_Impl from "./pattern/ContextReducer_Impl";


const ContextReducer = () => {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <p style={{ lineHeight: "1.6", color: "#555" }}>
        The Context + Reducer pattern combines React's Context API with the
        useReducer hook to manage and share state across multiple components.
        The reducer centralizes state updates through explicit actions, while
        Context makes the state and dispatch function available to components
        without having to pass them through props. In this example, a counter
        state is managed by a reducer with ADD and SUB actions, and the state
        and dispatch function are exposed through a custom useCounter hook.
        Try to change the State clicking on the buttons bellow and checking the count.
      </p>

      <CountextReducer_Impl/>

    </div>
  );
};

export default ContextReducer;
