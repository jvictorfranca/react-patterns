import { List } from "react-virtualized";
import "react-virtualized/styles.css"; // default styles

// Generate 10,000 dummy users
const users = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

const VirtualizedList = () => {
  // Row renderer: renders only visible rows
  const rowRenderer = ({ key, index, style, isScrolling }) => {
    const user = users[index];
    return (
      <div
        key={key}
        style={{
          ...style,
          borderBottom: "1px solid #ccc",
          boxSizing: "border-box", // prevents overlapping
          backgroundColor: isScrolling ? "#f0f0f0" : "#fff",
        }}
      >
        {user.name}
      </div>
    );
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Virtualized List Demo</h2>
      <p>Scrolling remains smooth even with 1,000+ items.</p>

      <List
        width={250}          // container width
        height={400}         // viewport height
        rowHeight={40}       // height of each row
        rowCount={users.length} // total rows
        rowRenderer={rowRenderer} // function to render rows
        overscanRowCount={5}     // pre-render 5 extra rows above/below
      />
    </div>
  );
};

export default VirtualizedList;