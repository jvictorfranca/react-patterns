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
import FunctionAsChildren from "./patterns/component-patterns/function-as-children/FunctionAsChildren";
import HighOrderComponents from "./patterns/component-patterns/high-order-components/HighOrderComponents";
import PropCollections from "./patterns/component-patterns/prop-collections/PropCollections";
import StateReducer from "./patterns/component-patterns/state-reducer/StateReducer";
import CustomHookExample from "./patterns/custom-hooks/custom-hook-example/CustomHookExample";
import UseForm from "./patterns/custom-hooks/use-form/UseForm";
import LazyLoading from "./patterns/performance-patterns/lazy-loading/LazyLoading";
import ReactMemo from "./patterns/performance-patterns/react-memo/ReactMemo";
import UseCallback from "./patterns/performance-patterns/usecallback/UseCallback";
import UseMemo from "./patterns/performance-patterns/usememo/UseMemo";
import Virtualization from "./patterns/performance-patterns/virtualization/Virtualization";
import HookForm from "./patterns/react-hook-form/hook-form/HookForm";
import HookFormReusingInputs from "./patterns/react-hook-form/hook-form-reusing-inputs/HookFormReusingInputs";
import SearchParams from "./patterns/react-router-dom/search-params/SearchParams";
import CompoundComponent from "./patterns/component-patterns/compound-components/CompoundComponent";
import ProductDetail from "./patterns/react-router-dom/search-params/pattern/ProductDetail";

function App() {

  return (
    <>
    <Routes>
      {/* First route when containning outlet leads to the layout rendering the outlet inside. */}
      <Route path="/" element={<Layout />}> 
        {/* Nested routes inside Layout. index element is sent to path / by default, using layout */}
        <Route index element={<Home />} />

        <Route path="/component-patterns" element={<ComponentPatterns />}/>
          {/* Component Pattern Routes */}
          <Route path="/component-patterns/compound-components" element={<CompoundComponent/>}/>
          <Route path="/component-patterns/function-as-children" element={<FunctionAsChildren />}/>
          <Route path="/component-patterns/high-order-components" element={<HighOrderComponents />}/>
          <Route path="/component-patterns/prop-collections" element={<PropCollections />}/>
          <Route path="/component-patterns/state-reducer" element={<StateReducer />}/>

        <Route path="/custom-hooks" element={<CustomHooks />}/>
          {/* Routes for custom hooks */}
          <Route path="/custom-hooks/custom-hook-example" element={<CustomHookExample />}/>
          <Route path="/custom-hooks/use-form" element={<UseForm />}/>

        <Route path="/performance-patterns" element={<PerformancePatterns />}/>
          {/* Routes for performance patterns */}
          <Route path="/performance-patterns/lazy-loading" element={<LazyLoading />}/>
          <Route path="/performance-patterns/react-memo" element={<ReactMemo />}/>
          <Route path="/performance-patterns/usecallback" element={<UseCallback />}/>
          <Route path="/performance-patterns/usememo" element={<UseMemo />}/>
          <Route path="/performance-patterns/virtualization" element={<Virtualization />}/>

        <Route path="/react-hook-form" element={<ReactHookForm />}/>
          {/* Routes for react use form */}
          <Route path="/react-hook-form/hook-form" element={<HookForm />}/>
          <Route path="/react-hook-form/hook-form-reusing-inputs" element={<HookFormReusingInputs />}/>

        <Route path="/react-router-dom" element={ <ReactRouterDom />}/>
          {/* Routes for react router dom */}
          <Route path="/react-router-dom/search-params" element={ <SearchParams />}/>
            {/* Route to test for query params and search params  */}
            <Route path="/react-router-dom/search-params/products/:id" element={ <ProductDetail />}/>

        
        <Route path="*" element={<NotFound />} /> {/* Catch-all */}
      </Route>
    </Routes>
    </>
  )
}

export default App
