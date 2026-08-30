import {memo} from "react";

const Child = ({ name, onClick }) => {
  console.log(`Rendering Child: ${name}`);
  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "2px solid red",
      }}
      onClick={onClick} // now uses the function prop
    >
      <h3>{name}</h3>
    </div>
  );
};

export default memo(Child);
