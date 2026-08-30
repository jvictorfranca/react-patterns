import { Link } from "react-router-dom";

const PerformancePatterns = () => {
  const patterns = [
    {
      title: "Lazy Loading",
      description: "Load components and resources only when they are needed.",
      path: "/performance-patterns/lazy-loading",
    },
    {
      title: "React Memo",
      description: "Prevent unnecessary re-renders using React.memo.",
      path: "/performance-patterns/react-memo",
    },
    {
      title: "useCallback",
      description: "Memoize functions to optimize component re-renders.",
      path: "/performance-patterns/usecallback",
    },
    {
      title: "useMemo",
      description: "Memoize values and expensive calculations.",
      path: "/performance-patterns/usememo",
    },
    {
      title: "Virtualization",
      description: "Efficiently render large lists by rendering only visible items.",
      path: "/performance-patterns/virtualization",
    },
  ];

  return (
    <div>
      <h1>Performance Patterns</h1>

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

export default PerformancePatterns;