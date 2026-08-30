// A Higher-Order Component (HOC) 
// It logs props whenever the component renders.
const withLogger = (WrappedComponent) => {
  // Return a new component that wraps the original
  return function EnhancedComponent(props) {
    // Log the component name and props whenever it renders
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);

    // ✅ Render the original component, passing props through
    return <WrappedComponent {...props} />;
  };
}

export default withLogger;