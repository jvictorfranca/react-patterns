import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount
} from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>{" "}
        <button onClick={() => dispatch(increment())}>➕ Increment</button>{" "}
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
};

export default Counter;