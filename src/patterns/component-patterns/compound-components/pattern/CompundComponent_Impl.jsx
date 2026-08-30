import { Tabs } from "./components/Tabs/Tabs";
import TabList from "./components/Tabs/TabList";
import Tab from "./components/Tabs/Tab";
import TabPanel from "./components/Tabs/TabPanel";

//Example usage of the compound Tabs components.
const CompoundComponentImpl = () => {
  return (
    <div
      style={{
        padding: "2rem",         // Outer spacing
        fontFamily: "sans-serif" // Clean, readable font
      }}
    >
      <h1>Compound Components Example: Tabs</h1>

      {/* 1️⃣ Tabs container with defaultIndex */}
      <Tabs defaultIndex={0}>
        {/* 2️⃣ TabList: layout container for tab buttons */}
        <TabList>
          <Tab index={0}>Home</Tab>
          <Tab index={1}>Profile</Tab>
          <Tab index={2}>Settings</Tab>
        </TabList>

        {/* 3️⃣ TabPanel: content for each tab */}
        <TabPanel index={0}>
          <p>Welcome to the Home tab!</p>
        </TabPanel>
        <TabPanel index={1}>
          <p>Here is your Profile information.</p>
        </TabPanel>
        <TabPanel index={2}>
          <p>Adjust your Settings here.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CompoundComponentImpl;
