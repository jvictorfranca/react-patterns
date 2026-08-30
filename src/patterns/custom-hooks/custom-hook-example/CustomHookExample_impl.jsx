import HelpStatus from "./components/HelpStatus";
import HelpForm from "./components/HelpForm";

const CustomHookExample_impl = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Custom Hook Example</h2>

      <p>
        Custom hooks allow us to extract reusable logic from components while
        keeping each component focused on its main responsibility. In this
        example, the <code>useNetworkStatus</code> hook monitors the browser's
        network connection and updates the UI whenever the connection status
        changes.
      </p>
      <h2>Need Help?</h2>
      <HelpStatus />
      <HelpForm />
    </div>
  );
};

export default CustomHookExample_impl;
