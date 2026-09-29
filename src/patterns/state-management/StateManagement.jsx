import { Link } from "react-router-dom";

const StateManagement = () => {
  const patterns = [
    {
      title: "Zustand",
      description: "Manage global application state with Zustand.",
      path: "/state-management/zustand",
    },
    {
      title: "Redux & Slice",
      description: "Manage application state using Redux and Redux Toolkit slices.",
      path: "/state-management/redux",
    },
    {
      title: "Error Boundary",
      description: "Handle rendering errors with an Error Boundary function.",
      path: "/state-management/error-boundary",
    },
    {
      title: "Context and reducer",
      description: "Use react context together with React reducer to handle complex context management.",
      path: "/state-management/context-reducer",
    },
  ];

  return (
    <div>
      <h1>State Management</h1>

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

export default StateManagement;
