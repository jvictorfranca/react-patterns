import { useEffect, useState } from "react";
import styles from "./ServerEventEmitter_Impl.module.css";

const ServerEventEmitter_Impl = () => {
    const [connectionStatus, setConnectionStatus] = useState("pending");
    const [messages, setMessages] = useState([]);
    const [warnings, setWarnings] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [warningInput, setWarningInput] = useState("");

    useEffect(() => {
        const eventSource = new EventSource(
            "http://localhost:3001/events"
        );

        eventSource.onmessage = (event) => {
            const payload = JSON.parse(event.data);

            switch (payload.type) {
                case "connected":
                    setConnectionStatus("success");
                    break;

                case "message":
                    setMessages((prev) => [...prev, payload]);
                    break;

                case "warning":
                    setWarnings((prev) => [...prev, payload]);
                    break;

                default:
                    console.warn("Unknown event type:", payload);
                    break;
            }
        };

        eventSource.onerror = () => {
            setConnectionStatus("error");
        };

        return () => {
            eventSource.close();
        };
    }, []);

    const sendEvent = async (type, text) => {
        if (!text.trim()) return;

        try {
            await fetch(`http://localhost:3001/${type}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text,
                }),
            });

            if (type === "message") {
                setMessageInput("");
            }

            if (type === "warning") {
                setWarningInput("");
            }
        } catch (error) {
            console.error(`Failed to send ${type}:`, error);
        }
    };

    const formatDate = (date) => {
        return new Date(date)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-");
    };

    const statusConfig = {
        pending: {
            label: "Connecting...",
            className: styles.pending,
        },
        error: {
            label: "Connection failed",
            className: styles.error,
        },
        success: {
            label: "Connected",
            className: styles.success,
        },
    };

    const currentStatus = statusConfig[connectionStatus];

    return (
        <div className={styles.container}>
            <div
                className={`${styles.connectionCard} ${currentStatus.className}`}
            >
                <div className={styles.statusIndicator} />

                <div>
                    <h3 className={styles.connectionTitle}>
                        Connection Status
                    </h3>

                    <p className={styles.status}>
                        {currentStatus.label}
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                <section className={`${styles.eventCard} ${styles.warningCard}`}>
                    <div className={styles.eventHeader}>
                        <span className={styles.icon}>⚠️</span>
                        <h3 className={styles.eventTitle}>Warnings</h3>
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            value={warningInput}
                            onChange={(event) =>
                                setWarningInput(event.target.value)
                            }
                            placeholder="Enter a warning..."
                            className={styles.input}
                        />

                        <button
                            onClick={() =>
                                sendEvent("warning", warningInput)
                            }
                            className={`${styles.button} ${styles.warningButton}`}
                        >
                            Send Warning
                        </button>
                    </div>

                    <div className={styles.list}>
                        {warnings.map((warning, index) => (
                            <div
                                key={`${warning.timestamp}-${index}`}
                                className={`${styles.eventItem} ${styles.warningItem}`}
                            >
                                <strong>
                                    {formatDate(warning.timestamp)}
                                </strong>{" "}
                                - {warning.text}
                            </div>
                        ))}
                    </div>
                </section>

                <section className={`${styles.eventCard} ${styles.messageCard}`}>
                    <div className={styles.eventHeader}>
                        <span className={styles.icon}>💬</span>
                        <h3 className={styles.eventTitle}>Messages</h3>
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            value={messageInput}
                            onChange={(event) =>
                                setMessageInput(event.target.value)
                            }
                            placeholder="Enter a message..."
                            className={styles.input}
                        />

                        <button
                            onClick={() =>
                                sendEvent("message", messageInput)
                            }
                            className={`${styles.button} ${styles.messageButton}`}
                        >
                            Send Message
                        </button>
                    </div>

                    <div className={styles.list}>
                        {messages.map((message, index) => (
                            <div
                                key={`${message.timestamp}-${index}`}
                                className={`${styles.eventItem} ${styles.messageItem}`}
                            >
                                <strong>
                                    {formatDate(message.timestamp)}
                                </strong>{" "}
                                - {message.text}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServerEventEmitter_Impl;