import { Link } from "react-router-dom";

const CustomHooks = () => {
  const hooks = [
    {
      title: "Custom Hook Example",
      description: "A practical example of creating and using a custom hook.",
      path: "/custom-hooks/custom-hook-example",
    },
    {
      title: "useForm",
      description: "A custom hook for managing form state and behavior.",
      path: "/custom-hooks/use-form",
    },
  ];

  return (
    <div>
      <h1>Custom Hooks</h1>

      <div className="cards">
        {hooks.map((hook) => (
          <Link to={hook.path} key={hook.path} className="card">
            <h2>{hook.title}</h2>
            <p>{hook.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomHooks;