import ServerEventEmitter_Impl from "./pattern/ServerEventEmitter_Impl";

const ServerEventEmitter = () => {
    return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>Server Event Emitter Pattern</h1>

            <p>
                This example demonstrates how a React application can receive
                real-time updates from a server using Server-Sent Events (SSE).
                The browser keeps an open connection with the server, allowing
                the server to broadcast events whenever something happens.
            </p>

            <h2>How it works</h2>

            <p>
                First, the React application establishes an SSE connection with
                the server. The connection status below shows whether the client
                is still connecting, successfully connected, or has encountered
                an error.
            </p>

            <ServerEventEmitter_Impl />

            <h2>Starting the server</h2>

            <p>
                This example uses a small Node.js HTTP server instead of a
                framework such as Express. The server is started separately
                using the script defined in <code>package.json</code>.
            </p>

            <pre
                style={{
                    padding: "1rem",
                    background: "#f4f4f4",
                    borderRadius: "8px",
                    overflowX: "auto",
                }}
            >
                <code>npm run event-emitter-server</code>
            </pre>

            <p>
                Once started, the server listens on{" "}
                <code>http://localhost:3001</code> and handles the HTTP
                requests used by this example.
            </p>

            <h2>HTTP endpoints</h2>

            <p>
                The server exposes three endpoints. One establishes the SSE
                connection, while the other two receive events that should be
                broadcast to connected clients.
            </p>

            <ul>
                <li>
                    <strong>GET /events</strong> — establishes and keeps the
                    Server-Sent Events connection open.
                </li>
                <li>
                    <strong>POST /message</strong> — broadcasts a message to
                    all connected clients.
                </li>
                <li>
                    <strong>POST /warning</strong> — broadcasts a warning to
                    all connected clients.
                </li>
            </ul>

            <h2>Event types</h2>

            <p>
                Every event sent through the SSE connection contains a
                <code>type</code>. The React application uses this value to
                determine what should happen with the received event.
            </p>

            <ul>
                <li>
                    <strong>connected</strong> — sent when a client successfully
                    establishes the SSE connection.
                </li>
                <li>
                    <strong>message</strong> — represents a regular message
                    broadcast by the server.
                </li>
                <li>
                    <strong>warning</strong> — represents a warning broadcast
                    by the server.
                </li>
            </ul>

            <div
                style={{
                    marginTop: "2rem",
                    padding: "1.25rem",
                    borderRadius: "10px",
                    border: "2px solid #2563eb",
                    background: "#eff6ff",
                }}
            >
                <h2
                    style={{
                        marginTop: 0,
                        color: "#1d4ed8",
                    }}
                >
                    Try it with multiple clients
                </h2>

                <p style={{ marginBottom: 0 }}>
                    Open this page in another browser tab, another browser
                    window, or an incognito/private window. Make sure the
                    server is running and both clients are connected. Then
                    send a message or warning from one client and observe how
                    the event is automatically received and displayed by the
                    other connected clients.
                </p>
            </div>

            <p>
                <strong>Key Concept:</strong> The Node.js server uses an{" "}
                <code>EventEmitter</code> to broadcast events, while the React
                application uses the browser's <code>EventSource</code> API to
                maintain the SSE connection. The server does not need to know
                which UI component should update; it simply broadcasts the
                event, and each connected client decides how to handle it.
            </p>
        </div>
    );
};

export default ServerEventEmitter;
