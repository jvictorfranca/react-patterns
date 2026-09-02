import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  const sections = [
    {
      title: "Component Patterns",
      description: "Explore reusable patterns for building flexible React components.",
      path: "/component-patterns",
      icon: "🧩",
    },
    {
      title: "Custom Hooks",
      description: "Learn how to extract and reuse stateful logic with custom hooks.",
      path: "/custom-hooks",
      icon: "🪝",
    },
    {
      title: "Performance Patterns",
      description: "Discover techniques to improve rendering and application performance.",
      path: "/performance-patterns",
      icon: "⚡",
    },
    {
      title: "React Hook Form",
      description: "Build performant and scalable forms with React Hook Form.",
      path: "/react-hook-form",
      icon: "📝",
    },
    {
      title: "React Router DOM",
      description: "Learn routing, navigation, URL parameters, and more.",
      path: "/react-router-dom",
      icon: "🧭",
    },

        {
      title: "Fetch & State management",
      description: "Learn async data fetch, & state management with Zustand, Redux, and react query.",
      path: "/fetch-state-management",
      icon: "🗃️",
    },
  ];

  return (
    <main className="home">
      <section className="home-header">
        <h1>React Patterns</h1>
        <p>
          A collection of React patterns, techniques, and practical examples.
        </p>
      </section>

      <section className="home-grid">
        {sections.map((section) => (
          <Link
            to={section.path}
            key={section.path}
            className="home-card"
          >
            <span className="home-card-icon">{section.icon}</span>

            <div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>

            <span className="home-card-arrow">→</span>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;