import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgVideo from "../assets/img/banner-bg.mp4"; // Same video as banner

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, message } = formDetails;
    if (!firstName || !lastName || !email || !message) {
      setStatus({ success: false, message: "All fields are required!" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });

      let result = await response.json();
      setButtonText("Send");

      if (result.code === 200) {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again later." });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Network error. Please try again later." });
    }
  };

  return (
    <section id="connect" style={styles.contactSection}>
      {/* Background Video */}
      <div style={styles.videoContainer}>
        <video autoPlay muted loop style={styles.videoBackground}>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>

      <Container>
        <Row className="align-items-center" style={styles.row}>
          <Col size={12} md={12} style={styles.col}>
            <h2 style={styles.heading}>Get In Touch</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    style={styles.inputField}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    style={styles.inputField}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    style={styles.inputField}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    style={styles.inputField}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    style={styles.textareaField}
                  ></textarea>
                  <button type="submit" style={styles.submitButton}>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p style={status.success ? styles.successMessage : styles.dangerMessage}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Inline Styles
const styles = {
  contactSection: {
    position: "relative",
    padding: "80px 0", // Increased padding for more space
    color: "white",
    height: "100vh", // Full viewport height
    display: "flex",
    flexDirection: "column", // Column layout
    justifyContent: "flex-start", // Align content at the top
    textAlign: "center", // Center the content horizontally
    alignItems: "center", // Center the content vertically
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
  },
  videoBackground: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // Align the form content to the top
    width: "100%",
    minHeight: "calc(100vh - 80px)", // Adjusting for padding
  },
  col: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left", // Align text to the left in the form
    paddingTop: "30px", // Padding for spacing at the top
    maxWidth: "800px", // Limiting width of the form
    width: "100%", // Ensuring it takes full available width
  },
  heading: {
    color: "white",
    marginBottom: "40px",
    fontSize: "36px", // Adjusting font size for better visibility
    fontWeight: "bold",
    textAlign: "center", // Ensure heading is centered
    paddingTop: "20px", // Padding to move it to the top
  },
  form: {
    width: "100%",
    maxWidth: "600px", // Limit the width for the form
    marginLeft: "auto",
    marginRight: "auto", // Centering the form horizontally
  },
  inputField: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid #555",
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    transition: "border-color 0.3s, background-color 0.3s",
  },
  textareaField: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid #555",
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    transition: "border-color 0.3s, background-color 0.3s",
  },
  submitButton: {
    backgroundColor: "pink",
    border: "none",
    color: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    marginTop: "20px",
  },
  successMessage: {
    color: "#4BB543",
    transition: "opacity 0.3s",
  },
  dangerMessage: {
    color: "#ff3333",
    transition: "opacity 0.3s",
  },
};
