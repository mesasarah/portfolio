import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const webDevelopmentProjects = [
    {
      title: "DOCBOT",
      description: "Offline Document Assistant",
      imgUrl: projImg1,
    },
    {
      title: "E Bidding Platform",
      description: "Design & Development Software Engineering Project",
      imgUrl: projImg2,
    },
    {
      title: "Resume-Matching Engine",
      description: "An Applicant Tracking System (ATS)",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  const dataAnalyticsProjects = [
    {
      title: "DOCBOT",
      description: "Offline Document Assistant",
      imgUrl: projImg1,
    },
    {
      title: "E Bidding Platform",
      description: "Design & Development Software Engineering Project",
      imgUrl: projImg2,
    },
    {
      title: "Resume-Matching Engine",
      description: "An Applicant Tracking System (ATS)",
      imgUrl: projImg3,
    },
    {
      title: "Data Visualization Tool",
      description: "Visualizing Data for Insights",
      imgUrl: projImg1,
    },
    {
      title: "Sales Prediction Model",
      description: "Predicting Sales Using Machine Learning",
      imgUrl: projImg2,
    },
  ];

  const blockchainProjects = [
    {
      title: "Blockchain-based Voting System",
      description: "Secure and Transparent Voting",
      imgUrl: projImg1,
    },
    {
      title: "Cryptocurrency Wallet",
      description: "Secure Digital Wallet",
      imgUrl: projImg2,
    },
    {
      title: "Decentralized Marketplace",
      description: "Buy and Sell Using Blockchain",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects" style={styles.projectSection}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={styles.header}>Projects</h2>
                  <p style={styles.description}>
                    As a full-stack developer, I have worked on various projects that showcase my ability to create dynamic and responsive web applications. My passion for web development drives me to explore innovative solutions, while my current studies in data analytics enable me to make data-driven decisions that enhance user experience and functionality. Below are some of the projects I’ve been involved in:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          style={{ ...styles.tabStyle }}
                          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff69b4')}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                          Web Development
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          style={{ ...styles.tabStyle }}
                          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff69b4')}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                          Data Analytics
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="third"
                          style={{ ...styles.tabStyle }}
                          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff69b4')}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                          Blockchain
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webDevelopmentProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {dataAnalyticsProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {blockchainProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Design" style={styles.backgroundImage} />
    </section>
  );
};

// Inline CSS Styles
const styles = {
  projectSection: {
    backgroundColor: '#000', // Pitch black background for the section
    position: 'relative',
    padding: '50px 0', // Adjust padding as needed
    overflow: 'hidden',
  },
  header: {
    color: '#fff', // White color for the header
    textAlign: 'center',
    marginBottom: '20px',
  },
  description: {
    color: '#ddd', // Light gray color for the description
    textAlign: 'center',
    marginBottom: '40px',
  },
  backgroundImage: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '0.1', // Adjust opacity to create a subtle background effect
    zIndex: -1, // Ensure it stays behind other content
  },
  tabStyle: {
    color: 'white',
    borderRadius: '50px',
    padding: '10px 20px',
    fontWeight: 'bold',
    backgroundColor: 'transparent', // Default background
    border: '2px solidrgb(180, 22, 101)', // Optional border to make the button pop
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
    cursor: 'pointer',
  },
};
