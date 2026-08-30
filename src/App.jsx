import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import './App.css'
import NotFound from "./components/layout/NotFound";
import Home from "./components/layout/Home";
import ComponentPatterns from "./patterns/component-patterns/ComponentPatterns";
import CustomHooks from "./patterns/custom-hooks/CustomHooks";
import PerformancePatterns from "./patterns/performance-patterns/PerformancePatterns";
import ReactHookForm from "./patterns/react-hook-form/ReactHookForm";
import ReactRouterDom from "./patterns/react-router-dom/ReactRouterDom";

function App() {

  return (
    <>
    <Routes>
      {/* First route when containning outlet leads to the layout rendering the outlet inside. */}
      <Route path="/" element={<Layout />}> 
        {/* Nested routes inside Layout. index element is sent to path / by default, using layout */}
        <Route index element={<Home />} />

        <Route path="/component-patterns" element={<ComponentPatterns />}/>

        <Route path="/custom-hooks" element={<CustomHooks />}/>

        <Route path="/performance-patterns" element={<PerformancePatterns />}/>

        <Route path="/react-hook-form" element={<ReactHookForm />}/>

        <Route path="/react-router-dom" element={ <ReactRouterDom />}/>
        
        <Route path="*" element={<NotFound />} /> {/* Catch-all */}
      </Route>
    </Routes>
    </>
  )
}

export default App
