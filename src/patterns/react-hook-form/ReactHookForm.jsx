import { Link } from "react-router-dom";

const ReactHookForm = () => {
  const examples = [
    {
      title: "Hook Form",
      description: "A basic example using React Hook Form.",
      path: "/react-hook-form/hook-form",
    },
    {
      title: "Hook Form - Reusing Inputs",
      description: "Reuse input components while working with React Hook Form.",
      path: "/react-hook-form/hook-form-reusing-inputs",
    },
  ];

  return (
    <div>
      <h1>React Hook Form</h1>

      <div className="cards">
        {examples.map((example) => (
          <Link to={example.path} key={example.path} className="card">
            <h2>{example.title}</h2>
            <p>{example.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReactHookForm;