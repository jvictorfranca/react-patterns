import { Link } from "react-router-dom";

const ComponentPatterns = () => {
  const patterns = [
    {
      title: "Compound Components",
      description: "Share state and behavior between related components.",
      path: "/component-patterns/compound-components",
    },
    {
      title: "Function as Children",
      description: "Use a function as children to create flexible components.",
      path: "/component-patterns/function-as-children",
    },
    {
      title: "Higher-Order Components",
      description: "Reuse component logic through higher-order components.",
      path: "/component-patterns/high-order-components",
    },
    {
      title: "Prop Collections",
      description: "Organize and reuse groups of props across components.",
      path: "/component-patterns/prop-collections",
    },
    {
      title: "State Reducer",
      description: "Customize and control a component's internal behavior.",
      path: "/component-patterns/state-reducer",
    },
  ];

  return (
    <div>
      <h1>Component Patterns</h1>

      <div className="cards">
        {patterns.map((pattern) => (
          <Link to={pattern.path} key={pattern.path} className="card">
            <h2>{pattern.title}</h2>
            <p>{pattern.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentPatterns;