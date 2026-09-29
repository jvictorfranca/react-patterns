import http from "node:http";
import { EventEmitter } from "node:events";

const PORT = 3001;

const eventEmitter = new EventEmitter();

const clients = [];

const corsHeaders = {
    "Access-Control-Allow-Origin": "http://localhost:5173",
};

const encode = (data) => {
    return new TextEncoder().encode(
        `data: ${JSON.stringify(data)}\n\n`
    );
};

// Broadcast every event to all connected clients
eventEmitter.on("broadcast", (payload) => {
    const encoded = encode(payload);

    for (const client of clients) {
        try {
            client.write(encoded);
        } catch {
            // Ignore disconnected clients
        }
    }
});

const server = http.createServer((req, res) => {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
        res.writeHead(204, {
            ...corsHeaders,
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        });

        res.end();
        return;
    }

    // Establish SSE connection
    if (req.method === "GET" && req.url === "/events") {
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
            ...corsHeaders,
        });

        clients.push(res);

        // Confirm connection
        res.write(
            encode({
                type: "connected",
                text: "Connected successfully!",
            })
        );

        req.on("close", () => {
            const index = clients.indexOf(res);

            if (index !== -1) {
                clients.splice(index, 1);
            }
        });

        return;
    }

    // Broadcast message
    if (req.method === "POST" && req.url === "/message") {
        handleBroadcastRequest(req, res, "message");
        return;
    }

    // Broadcast warning
    if (req.method === "POST" && req.url === "/warning") {
        handleBroadcastRequest(req, res, "warning");
        return;
    }

    res.writeHead(404, {
        "Content-Type": "application/json",
        ...corsHeaders,
    });

    res.end(
        JSON.stringify({
            error: "Route not found",
        })
    );
});

function handleBroadcastRequest(req, res, type) {
    let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {
        try {
            const { text } = JSON.parse(body);

            if (!text) {
                res.writeHead(400, {
                    "Content-Type": "application/json",
                    ...corsHeaders,
                });

                res.end(
                    JSON.stringify({
                        error: "Text is required",
                    })
                );

                return;
            }

            eventEmitter.emit("broadcast", {
                type,
                text,
                timestamp: new Date().toISOString(),
            });

            res.writeHead(200, {
                "Content-Type": "application/json",
                ...corsHeaders,
            });

            res.end(
                JSON.stringify({
                    success: true,
                    type,
                    text,
                })
            );
        } catch {
            res.writeHead(400, {
                "Content-Type": "application/json",
                ...corsHeaders,
            });

            res.end(
                JSON.stringify({
                    error: "Invalid JSON",
                })
            );
        }
    });
}

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
