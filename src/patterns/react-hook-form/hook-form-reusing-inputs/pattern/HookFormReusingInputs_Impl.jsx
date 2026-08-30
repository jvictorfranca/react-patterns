import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import SchemaForm from "./components/SchemaForm";
import CustomForm from "./components/CustomForm";

const HookFormReusingInputs_Impl = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📝 React Basic Form</h2>
      <p>Fill out the form below and try submitting:</p>
      <BasicForm />
      <h2>⚡ Advanced Form</h2>
      <p>The form below uses react-hook-form</p>
      <AdvancedForm />
      <h2>⚡ Advanced Form 2</h2>
      <p>The form below uses Schema Validation (Yup)</p>
      <SchemaForm />
      <h2>🎨 Custom Form</h2>
      <p>The form below uses reusable custom input components</p>
      <CustomForm />
    </div>
  );
};

export default HookFormReusingInputs_Impl;
