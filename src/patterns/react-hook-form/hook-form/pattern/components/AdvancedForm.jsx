import { useState } from "react";
import { useForm } from "react-hook-form"; // import useForm

const AdvancedForm = () => {
  // Destructure methods and properties from useForm hook
  const {
    register,          // Function to register input fields and connect them to validation
    handleSubmit,      // Function that wraps your submit handler to handle validation
    formState: { errors }, // Object that contains validation errors for each field
    reset              // Function to reset/clear the form fields
  } = useForm();

  const [submittedMessage, setSubmittedMessage] = useState("");

  const onSubmit = (data) => {
    setSubmittedMessage(
      `Form submitted! Name: ${data.name}, Email: ${data.email}`
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
          {...register("name", { required: "Name is required" })}
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
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Email is invalid"
            }
          })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>
            {errors.email.message}
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

export default AdvancedForm;