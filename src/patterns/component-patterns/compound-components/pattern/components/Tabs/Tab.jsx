// Import the custom hook to access Tabs context
import { useTabs } from "./Tabs";

// Tab Component: Represents a single clickable tab button.
// index: the numeric index of this tab (0, 1, 2, etc.)
// children: the label or content displayed inside the tab
export default function Tab({ index, children }) {
  // 1️⃣ Access the Tabs context
  const { selectedIndex, setSelectedIndex } = useTabs();

  // 2️⃣ Determine if this tab is currently selected
  const isSelected = selectedIndex === index;

  return (
    <button
      // 3️⃣ When the tab is clicked, update the selectedIndex in context
      onClick={() => setSelectedIndex(index)}
      style={{
        padding: "0.5rem 1rem",        // Space inside the button
        border: "1px solid #ccc",      // Simple border
        backgroundColor: isSelected
          ? "#007bff"                  // Blue if selected
          : "#fff",                    // White otherwise
        color: isSelected
          ? "#fff"                     // White text if selected
          : "#000",                    // Black otherwise
        cursor: "pointer",             // Pointer cursor on hover
      }}
    >
      {children}  {/* Display the tab label/content */}
    </button>
  );
}