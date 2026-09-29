import { Link } from "react-router-dom";

const AsyncPatterns = () => {
  const patterns = [
    {
      title: "TanStack Query",
      description: "Use React Query (TanStack Query) with useQuery for API calls.",
      path: "/async-patterns/tanstack-query",
    },
    {
      title: "Server Event Emitter (SEE)",
      description: "Emit one sided messages from the server to the frotend.",
      path: "/async-patterns/see",
    }
  ];

  return (
    <div>
      <h1>Asynchronous Patterns</h1>

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

export default AsyncPatterns;
