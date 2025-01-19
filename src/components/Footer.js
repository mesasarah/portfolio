import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useState } from "react";

export const Footer = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  const socialIcons = [
    { src: navIcon1, alt: "LinkedIn", link: "#" },
    { src: navIcon2, alt: "GitHub", link: "#" },
    { src: navIcon3, alt: "Twitter", link: "#" },
  ];

  return (
    <footer style={styles.footer}>
      <Container>
        <Row style={styles.footerRow}>
          <Col style={styles.logoCol}>
            <img src={logo} alt="SARAH" style={styles.logo} />
          </Col>
          <Col style={styles.socialAndCopyrightCol}>
            <p style={styles.copyrightText}>
            © 2024 All Rights Reserved | Sarah
            </p>
          </Col>
          <Col style={styles.socialCol}>
            <div style={styles.socialIconContainer}>
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  style={styles.iconLink}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    style={{
                      ...styles.socialIcon,
                      transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
                      opacity: hoverIndex === index ? 0.7 : 1,
                    }}
                  />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Inline Styles
const styles = {
  footer: {
    backgroundColor: "black",
    padding: "20px 0", // Maintain the original footer size
    color: "white",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  footerRow: {
    display: "flex",
    justifyContent: "space-between", // Distribute space between elements
    alignItems: "center",
  },
  logoCol: {
    display: "flex",
    justifyContent: "flex-start", // Align logo to the left
  },
  socialAndCopyrightCol: {
    display: "flex",
    justifyContent: "center", // Center the copyright text
    alignItems: "center", // Vertically center the content
    width: "100%",
  },
  socialCol: {
    display: "flex",
    justifyContent: "flex-end", // Align social icons to the right
    alignItems: "center",
  },
  logo: {
    maxWidth: "120px",
  },
  socialIconContainer: {
    display: "flex",
    gap: "15px", // Space between icons
  },
  socialIcon: {
    width: "30px",
    transition: "transform 0.3s, opacity 0.3s",
  },
  iconLink: {
    color: "white",
    textDecoration: "none",
  },
  copyrightText: {
    color: "white",
    marginTop: "0", // Remove margin to align it properly
  },
};
