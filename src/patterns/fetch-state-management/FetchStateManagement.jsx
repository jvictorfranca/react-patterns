import { Link } from "react-router-dom";

const FetchStateManagement = () => {
  const patterns = [
    {
      title: "TanStack Query",
      description: "Use React Query (TanStack Query) with useQuery for API calls.",
      path: "/fetch-state-management/tanstack-query",
    },
    {
      title: "Zustand",
      description: "Manage global application state with Zustand.",
      path: "/fetch-state-management/zustand",
    },
    {
      title: "Redux & Slice",
      description: "Manage application state using Redux and Redux Toolkit slices.",
      path: "/fetch-state-management/redux",
    },
    {
      title: "Error Boundary",
      description: "Handle rendering errors with an Error Boundary function.",
      path: "/fetch-state-management/error-boundary",
    },
  ];

  return (
    <div>
      <h1>Fetch State Management</h1>

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

export default FetchStateManagement;
