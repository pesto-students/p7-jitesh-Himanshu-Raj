import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <nav style={{ padding: 0 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h3>Shortly</h3>
          </div>
          <ul
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "row",
              listStyleType: "none",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
              <li>
                <Link
                  style={{
                    textDecorationLine: "none",
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    textDecorationLine: "none",
                  }}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    textDecorationLine: "none",
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 30,
              }}
            >
              <Link
                style={{
                  textDecorationLine: "none",
                }}
                to="/login"
              >
                Login
              </Link>
              <Link
                style={{
                  textDecorationLine: "none",
                }}
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
