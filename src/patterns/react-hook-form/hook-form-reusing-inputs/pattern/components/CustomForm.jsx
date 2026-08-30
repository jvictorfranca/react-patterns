import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form"; // import useForm
import TextInput from "./TextInput";

// Define schema with Yup
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  age: Yup.number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(13, "You must be at least 13 years old"),
});

const CustomForm = () => {
  // Destructure methods and properties from useForm hook
  const {
    register,          // Function to register input fields and connect them to validation
    handleSubmit,      // Function that wraps your submit handler to handle validation
    formState: { errors }, // Object that contains validation errors for each field
    reset              // Function to reset/clear the form fields
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submittedMessage, setSubmittedMessage] = useState("");

  const onSubmit = (data) => {
    setSubmittedMessage(
      `Form submitted! Name: ${data.name}, Email: ${data.email}, Age: ${data.age}`
    );
    // Reset the form fields after submission
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Using our reusable TextInput */}
      <TextInput label="Name" name="name" register={register} errors={errors} />

      <TextInput label="Email" name="email" type="email" register={register} errors={errors} />

      <TextInput label="Age" name="age" register={register} errors={errors} />

      <button type="submit">Submit</button>

      {submittedMessage && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          {submittedMessage}
        </p>
      )}

    </form>
  );
}

export default CustomForm;