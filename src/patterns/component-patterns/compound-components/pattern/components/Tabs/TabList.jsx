//This component is a container for the individual Tab buttons.
export default function TabList({ children }) {
  return (
    <div
      style={{
        display: "flex",      // Arrange tabs in a row
        gap: "1rem",          // Add space between each tab
      }}
    >
      {children}              {/* Render the Tab components */}
    </div>
  );
}