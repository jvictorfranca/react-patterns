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
      <NavLink to="/about" style={navLinkStyle}>About</NavLink> |{" "}
      
    </nav>
  );
};

export default Navbar;