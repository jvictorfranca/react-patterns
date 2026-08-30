import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
  // State to hold the fetched data (null until we fetch)
  const [data, setData] = useState(null);

  // Loading flag (true while fetching)
  const [loading, setLoading] = useState(true);

  // Error string or null
  const [error, setError] = useState(null);

  // useEffect: fetch data when the component mounts or URL changes
  useEffect(() => {
    let isMounted = true;

    // Start fetching
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    // Cleanup function: mark as unmounted
    return () => {
      isMounted = false;
    };
  }, [url]);

  // Expose the state to the children render function so callers
  // can render a loading state immediately.
  return children({ data, loading, error });
}

export default DataFetcher;
