// Import React hooks
import { createContext, useState, use } from "react";

// 1️⃣ Create a Context for the Tabs
// This context will hold the currently selected tab index
// and a function to update it. 
// Child components will consume this context.
const TabsContext = createContext();

// 2️⃣ Tabs component
// This is the top-level provider 
// It wraps TabList, Tab, and TabPanel components.
export function Tabs({ children, defaultIndex = 0 }) {
  // 2a️⃣ Create state for the currently selected tab
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  return (
    // 2b️⃣ Provide state and setter function to all nested components
    <TabsContext value={{ selectedIndex, setSelectedIndex }}>
      {/* Render all children (TabList, Tab, TabPanel) */}
      <div>{children}</div>
    </TabsContext>
  );
}

// This hook allows any child component to access the Tabs context.
export function useTabs() {
  const context = use(TabsContext);

  // Ensure that the hook is used within a Tabs component
  if (!context) {
    throw new Error("useTabs must be used within a Tabs component");
  }

  // Return the context object: { selectedIndex, setSelectedIndex }
  return context;
}