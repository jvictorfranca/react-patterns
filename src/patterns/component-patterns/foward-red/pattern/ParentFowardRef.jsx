import { useRef } from "react";
import ChildFowardRef from "./ChildFowardRef";

const ParentFowardRef = () => {
    const cardRef = useRef(null);

    const handleFlip = () => {
        cardRef.current?.flip();
    };

    const handleUnflip = () => {
        cardRef.current?.unflip();
    };

    return (
        <div style={styles.container}>
            <h2>useImperativeHandle + forwardRef</h2>

            <p style={styles.description}>
                The parent component controls the card through an
                imperative API exposed by the child component.
                Click the buttons below to test the exposed actions.
            </p>

            <div style={styles.buttons}>
                <button
                    onClick={handleFlip}
                    style={{ ...styles.button, ...styles.flipButton }}
                >
                    Flip
                </button>

                <button
                    onClick={handleUnflip}
                    style={{ ...styles.button, ...styles.unflipButton }}
                >
                    Unflip
                </button>
            </div>

            <ChildFowardRef ref={cardRef} />
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "500px",
        margin: "50px auto",
        padding: "24px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },

    description: {
        color: "#666",
        lineHeight: "1.5",
    },

    buttons: {
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "24px",
    },

    button: {
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "opacity 0.2s",
    },

    flipButton: {
        backgroundColor: "#2563eb",
    },

    unflipButton: {
        backgroundColor: "#dc2626",
    },
};

export default ParentFowardRef;
