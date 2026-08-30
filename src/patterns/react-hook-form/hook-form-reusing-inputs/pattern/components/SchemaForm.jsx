import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form"; // import useForm

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

const SchemaForm = () => {
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
      <label style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
        Name:
        <input
          type="text"
          {...register("name")}
        />
        {errors.name && (
          <span style={{ color: "red" }}>
            {errors.name.message}
          </span>
        )}
      </label>

      <label style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
        Email:
        <input
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <span style={{ color: "red" }}>
            {errors.email.message}
          </span>
        )}
      </label>

      <label style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
        Age:
        <input
          type="text"
          {...register("age")}
        />
        {errors.age && (
          <span style={{ color: "red" }}>
            {errors.age.message}
          </span>
        )}
      </label>

      <button type="submit">Submit</button>

      {submittedMessage && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          {submittedMessage}
        </p>
      )}

    </form>
  );
}

export default SchemaForm;