import FowardRef_Impl from "./pattern/FowardRef_Impl";

const FowardRef = () => {
    return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h2>Forward Ref + useImperativeHandle Pattern</h2>

            <p>
                <code>forwardRef</code> allows a parent component to pass a
                ref to a child component. This is useful when the parent needs
                access to something inside the child that cannot be controlled
                through regular props.
            </p>

            <p>
                <code>useImperativeHandle</code> lets the child define exactly
                what the parent can access through that ref. Instead of exposing
                the entire internal implementation, the child can expose a
                small and controlled API with specific methods or values.
            </p>

            <FowardRef_Impl />

            <p>
                <strong>Key Concept:</strong> Use <code>forwardRef</code> to
                forward a ref from the parent to the child, and
                <code>useImperativeHandle</code> to control what the parent can
                access through that ref.
            </p>
        </div>
    );
};

export default FowardRef;
