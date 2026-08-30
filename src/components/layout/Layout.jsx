import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <h1>🌐 React Advanced patterns</h1>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        {/* Nested pages render here */}
         <Outlet /> {/* Outlet makes the layout possible, so everything in layout instead of the path / will be displayed here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;