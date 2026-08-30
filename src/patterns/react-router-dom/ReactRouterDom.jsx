import { Link } from "react-router-dom";

const ReactRouterDom = () => {
  const examples = [
    {
      title: "Search Params",
      description: "Work with search parameters and query strings in the URL.",
      path: "/react-router-dom/search-params",
    },
  ];

  return (
    <div>
      <h1>React Router DOM</h1>

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

export default ReactRouterDom;