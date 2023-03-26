// import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: 200,
        position: "absolute",
        width: "100%",
        // bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        color: "whitesmoke",
        paddingBottom: 20,
        alignItems: "baseline",
        overflow: "hidden",
      }}
    >
      <div>
        <h2 style={{}}>Shortly</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
        <div style={{}}>
          <h4>Features</h4>
          <h6>Link shortning</h6>
          <h6>Branded links</h6>
          <h6>Analytics</h6>
        </div>
        <div>
          <h4>Resources</h4>
          <h6>Blog</h6>
          <h6>Developers</h6>
          <h6>Support</h6>
        </div>
        <div>
          <h4>Company</h4>
          <h6>About</h6>
          <h6>Our teams</h6>
          <h6>Careers</h6>
          <h6>Contact</h6>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
        <h4>Login</h4>
        <h4>Sign up</h4>
      </div>
    </div>
  );
};

export default Footer;
