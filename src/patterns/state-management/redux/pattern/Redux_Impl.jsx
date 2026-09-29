import { Provider } from "react-redux";
import Counter from "./components/Counter";
import Display from "./components/Display";
import {store} from "./store"

const Redux_Impl = () => {
  return (
        <Provider store={store}>
          <div style={{ padding: "2rem" }}>
            <h2>⚡ Redux Toolkit Counter</h2>
            <Counter />
            <Display />
          </div>
        </Provider>
  );
};

export default Redux_Impl;
