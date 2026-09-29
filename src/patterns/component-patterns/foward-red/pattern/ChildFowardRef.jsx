import { forwardRef, useImperativeHandle, useState } from "react";

const ChildFowardRef = forwardRef((_, ref) => {
    const [flipped, setFlipped] = useState(false);

    useImperativeHandle(ref, () => ({
        flip() {
            setFlipped(true);
        },

        unflip() {
            setFlipped(false);
        },
    }));

    return (
        <div style={styles.scene}>
            <div
                style={{
                    ...styles.card,
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                <div style={styles.front}>
                    Front
                </div>

                <div style={styles.back}>
                    Back
                </div>
            </div>
        </div>
    );
});

const styles = {
    scene: {
        width: "200px",
        height: "120px",
        perspective: "1000px",
        margin: "20px auto",
    },

    card: {
        width: "100%",
        height: "100%",
        position: "relative",
        transition: "transform 0.6s",
        transformStyle: "preserve-3d",
    },

    front: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#2563eb",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        fontSize: "24px",
        fontWeight: "bold",
        backfaceVisibility: "hidden",
    },

    back: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#dc2626",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        fontSize: "24px",
        fontWeight: "bold",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
    },
};

export default ChildFowardRef;
