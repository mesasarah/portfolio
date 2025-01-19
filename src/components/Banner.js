import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Lottie from "react-lottie";
import runningCatAnimation from "../assets/running cat.json"; // Ensure the path is correct
import bgVideo from "../assets/img/banner-bg.mp4";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Innovative Full Stack Developer",
    "Creative Web Application Specialist",
    "Passionate Data Analytics Learner",
  ];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300 - Math.random() * 100);
    }
  };

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: runningCatAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="banner" id="home">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay muted loop className="video-background" aria-hidden="true">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Remove container padding and margins */}
      <Container fluid style={{ padding: "0", margin: "0" }}>
        <Row className="align-items-center justify-content-center" style={{ margin: "0" }}>
          <Col xs={12} md={10} lg={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* Move the cat animation to the left top and remove the gradient */}
                  <span
                    className="tagline"
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      background: "transparent", // Remove any background (including gradient)
                      border: "none", // Remove border
                      outline: "none", // Remove outline
                    }}
                  >
                    <Lottie options={defaultOptions} height={50} width={50} />
                  </span>
                  <h1>
                    {`I'm Sarah - `}
                    <span className="txt-rotate">
                      <span className="wrap">{text || "Full Stack Developer"}</span>
                    </span>
                  </h1>
                  <p>
                    I'm a developer passionate about crafting interactive, data-driven
                    applications. Whether it's building engaging web experiences or learning
                    data analytics, I'm always looking to innovate.
                  </p>
                  <button
                    className="connect-btn"
                    onClick={() => alert("Thank you for wanting to collaborate!")}
                    aria-label="Collaboration button"
                  >
                    Let’s Collaborate <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
