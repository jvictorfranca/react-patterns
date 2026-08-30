import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import './App.css'
import NotFound from "./components/layout/NotFound";
import Home from "./components/layout/Home";

function App() {

  return (
    <>
    <Routes>
      {/* First route when containning outlet leads to the layout rendering the outlet inside. */}
      <Route path="/" element={<Layout />}> 
        {/* Nested routes inside Layout. index element is sent to path / by default, using layout */}
        <Route index element={<Home />} />
        
        <Route path="*" element={<NotFound />} /> {/* Catch-all */}
      </Route>
    </Routes>
    </>
  )
}

export default App
