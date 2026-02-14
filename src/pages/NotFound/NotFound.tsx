import { Link } from "react-router-dom";
import type { JSX, CSSProperties } from "react";

/**       
 * <Routes>
 *   <Route path="*" element={<NotFound />} />
 * </Routes>
 */
export default function NotFound(): JSX.Element {
    const sectionStyle: CSSProperties = {
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }

    const h1Style: CSSProperties = {
        fontSize: "3rem",
        marginBottom: "0"
    }

    const pStyle: CSSProperties = {
        fontSize: "2rem",
        marginBottom: "1rem"
    }
    const backButtonStyle: CSSProperties = {
        color: "white",
        textDecoration: "none",
        fontWeight: "500",
        backgroundColor: "#161616",
        padding: "1rem",
        borderRadius: "0.6rem"
    }

    return (
        <section style={sectionStyle}>
            <h1 style={h1Style}>404 - Page Not Found</h1>
            <p style={pStyle}>Sorry, the page you are looking for doesn't exist.</p>
            <Link to="/" style={backButtonStyle}>
                Go back to Home
            </Link>
        </section >
    );
}

