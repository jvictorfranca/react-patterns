import { NavLink } from "react-router-dom";

// Shared style function for NavLink
const navLinkStyle = ({ isActive }) => ({
  margin: "0 1rem",
  textDecoration: "none",
  color: isActive ? "tomato" : "black",
  fontWeight: isActive ? "bold" : "normal",
});

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" style={navLinkStyle}>Home</NavLink> |{" "}
      <NavLink to="/component-patterns" style={navLinkStyle}>Component Patterns</NavLink> |{" "}
      <NavLink to="/custom-hooks" style={navLinkStyle}>Custom Hooks</NavLink> |{" "}
      <NavLink to="/performance-patterns" style={navLinkStyle}>Performance Patterns</NavLink> |{" "}
      <NavLink to="/react-hook-form" style={navLinkStyle}>React Hook Form</NavLink> |{" "}
      <NavLink to="/react-router-dom" style={navLinkStyle}>React Router DOM</NavLink> |{" "}
      
    </nav>
  );
};

export default Navbar;