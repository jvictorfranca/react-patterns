const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "1rem 0",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #ddd",
      }}
    >
      © {new Date().getFullYear()} My React App
    </footer>
  );
};

export default Footer;