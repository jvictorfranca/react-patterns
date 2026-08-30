
import { useState } from "react";
import useNetworkStatus from "../hooks/useNetworkStatus";

const HelpForm = () => {
  const isOnline = useNetworkStatus();
  const [message, setMessage] = useState("");

  return (
    <form>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        rows={4}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <button
        type="submit"
        disabled={!isOnline}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: isOnline ? "#4CAF50" : "#ccc",
          color: isOnline ? "#fff" : "#666",
          border: "none",
          cursor: isOnline ? "pointer" : "not-allowed",
        }}
      >
        {isOnline ? "Send Message" : "You must be online to send"}
      </button>
    </form>
  );

};

export default HelpForm;