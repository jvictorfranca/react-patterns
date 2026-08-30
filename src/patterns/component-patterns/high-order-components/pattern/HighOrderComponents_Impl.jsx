import withLogger from "./components/withLogger";
import Hello from "./components/Hello";
import Goodbye from "./components/Goodbye";

// Wrap Hello and Goodbye with the HOC
const HelloWithLogger = withLogger(Hello);
const GoodbyeWithLogger = withLogger(Goodbye);

const HighOrderComponents_Impl = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Higher-Order Components (HOCs)</h1>
      <p>
        A Higher-Order Component is a function that takes a component and returns
        a new component with added behavior.
      </p>

      {/* These components now log props to the console when rendered */}
      <HelloWithLogger name="Alice" />
      <GoodbyeWithLogger name="Bob" />

      <p>
        <strong>Check the console:</strong> you’ll see 
        the props being logged whenever these components render.
      </p>
    </div>
  );
};

export default HighOrderComponents_Impl;
