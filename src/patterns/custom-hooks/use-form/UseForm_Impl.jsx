import useFormInput from "./hooks/useFormInput";

const UseForm_Impl = () => {
  const name = useFormInput("");
  const email = useFormInput("");

  return (
    <form>
      <h2>useFormInput</h2>

      <p>
        Custom hooks allow us to extract and reuse stateful logic across components.
        This example uses a <code>useFormInput</code> hook to encapsulate the state
        and change handler of form inputs, making the form components simpler and
        more reusable.
      </p>
      <div>
        <label>Name:</label>
        <input
          type="text" {...name}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email" {...email}
        />
      </div>
    </form>
  );
};

export default UseForm_Impl;
