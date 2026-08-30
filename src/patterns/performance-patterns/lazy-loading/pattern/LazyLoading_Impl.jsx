import { useState, lazy, Suspense } from 'react';
// Lazy load HeavyComponent
const HeavyComponent = lazy(
  () => import('./components/HeavyComponent')
);

const LazyLoading_Impl = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Welcome to my LazyLoading</h1>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'Hide' : 'Show'} Heavy Component
      </button>

      {show && (
        // Suspense is to load the Heavy component in lazy mode, and fallback is what is going to be shown when component hasnt been load yet
        <Suspense fallback={<div>Loading component...</div>}> 
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoading_Impl;
