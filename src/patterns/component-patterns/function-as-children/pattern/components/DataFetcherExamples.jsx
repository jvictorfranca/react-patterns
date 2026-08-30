import DataFetcher from "./DataFetcher";

// DataFetcherExamples
// Demonstrates how to use the DataFetcher component.
// Uses the function-as-children pattern to render data.
const DataFetcherExamples = () => {
  return (
    <div>
      <h3>Function as Children Example</h3>
      
      <h1>Example 1</h1>
      {/* Example 1: Render a list of users */}
      <DataFetcher url="https://jsonplaceholder.typicode.com/users">
        {({ data, loading, error }) => {
          // loading state
          if (loading) return <p>Loading users...</p>;

          // error state
          if (error) return <p style={{ color: "red" }}>{error}</p>;

          // In case `data` is not an array, fail gracefully
          if (!Array.isArray(data)) return <p>Unexpected data format</p>;

          // render fetched data
          return (
            <ul>
              {data.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      </DataFetcher>

      
      <h1>Example 2</h1>

      {/* Example 2: Render post count */}
      <DataFetcher url="https://jsonplaceholder.typicode.com/posts">
        {({ data, loading, error }) => {
          if (loading) return <p>Loading posts...</p>;
          if (error) return <p style={{ color: "red" }}>{error}</p>;

          return <p>Total posts: {data.length}</p>;
        }}
      </DataFetcher>

      <h1>Example 3</h1>

      {/* Example 3: Render list of todos */}
      <DataFetcher url="https://jsonplaceholder.typicode.com/todos">
        {({ data, loading, error }) => {
          if (loading) return <p>Loading todos...</p>;
          if (error) return <p style={{ color: "red" }}>{error}</p>;

          return (
            <ul>
              {data.slice(0, 10).map((todo) => (
                <li key={todo.id}>
                  {todo.title} {todo.completed ? "✅" : "❌"}
                </li>
              ))}
            </ul>
          );
        }}
      </DataFetcher>
    </div>
  );
}

export default DataFetcherExamples;
