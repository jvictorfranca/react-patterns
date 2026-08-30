const TextInput = ({ label, register, name, errors, type = "text", ...rest }) => {
  return (
    <label style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
      {label}:
      <input
        type={type}
        {...register(name)} {...rest}
      />
      {errors[name] && (
        <span style={{ color: "red" }}>
          {errors[name].message}
        </span>
      )}
    </label>
  );
};

export default TextInput;