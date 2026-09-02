import { useSelector } from "react-redux";

const Display = () => {
  const count = useSelector((state) => state.counter.value); // Access counter state
  return <h2>Current Count: {count}</h2>;
};

export default Display;