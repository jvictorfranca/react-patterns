import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import BuggyCounter from "./components/BuggyCounter";

const ErrorBoundary_Impl = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛡️ Error Boundaries in React</h2>
      <p>
        Click the button to increment the counter. At <strong>5</strong>,
        it will crash — but notice how only this part fails while the rest
        of the app still works!
      </p>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // optional: reset global state or retry logic
          console.log("Error boundary reset");
        }}
      >
        <BuggyCounter />
      </ErrorBoundary>

      <hr />
      <p>✅ This part of the app is still alive!</p>
    </div>
  );
};

export default ErrorBoundary_Impl;
