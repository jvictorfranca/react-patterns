// Import the custom hook to access Tabs context
import { useTabs } from "./Tabs";

// TabPanel Component
// Represents the content area for a single tab.
// Only renders its children if its index matches the currently selected tab.
export default function TabPanel({ index, children }) {
  // 1️⃣ Access the selectedIndex from the Tabs context
  const { selectedIndex } = useTabs();

  // 2️⃣ If this panel's index does not match the selected tab, render nothing
  if (selectedIndex !== index) return null;

  // 3️⃣ Render the panel content
  return (
    <div
      style={{
        padding: "1rem",          // Space inside the panel
        border: "1px solid #ccc", // Simple border around content
      }}
    >
      {children}  {/* Render the content for this tab */}
    </div>
  );
}