import { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Simple validation
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Email is invalid";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedMessage(
        `Form submitted! Name: ${name}, Email: ${email}`
      );
      setName("");
      setEmail("");
    } else {
      // Clear message if there are errors
      setSubmittedMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <span style={{ color: "red" }}>
            {errors.name}
          </span>
        )}
      </label>

      <label style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <span style={{ color: "red" }}>
            {errors.email}
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
};

export default BasicForm;