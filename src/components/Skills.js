import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactSVG from '../assets/img/meter1.svg';
import NodeSVG from '../assets/img/meter2.svg';
import PythonSVG from '../assets/img/meter3.svg';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" style={styles.section}>
      {/* Floating Container */}
      <div className="floating-container" style={styles.floatingContainer}>
        <h2 style={styles.heading}>Skills</h2>
        <p style={styles.description}>
          As a Full Stack Developer, I excel at creating dynamic, responsive web applications.
          My passion also extends into data analytics, where I am continually learning and applying
          insights to drive innovation.
        </p>
        
        <Carousel
          responsive={responsive}
          infinite={true}
          className="skill-slider"
          autoPlay={true}
          autoPlaySpeed={3000}
          pauseOnHover={true}
          draggable={true}
        >
          {/* Skill Items with Liquid Fill Effect */}
          <div className="item" style={styles.item}>
            <div className="liquid-fill-container" style={styles.liquidFillContainer}>
              <img src={ReactSVG} alt="React" className="liquid-fill" />
            </div>
            <h5 style={styles.skillText}>React</h5>
          </div>
          <div className="item" style={styles.item}>
            <div className="liquid-fill-container" style={styles.liquidFillContainer}>
              <img src={NodeSVG} alt="Node.js" className="liquid-fill" />
            </div>
            <h5 style={styles.skillText}>Node.js</h5>
          </div>
          <div className="item" style={styles.item}>
            <div className="liquid-fill-container" style={styles.liquidFillContainer}>
              <img src={PythonSVG} alt="Python" className="liquid-fill" />
            </div>
            <h5 style={styles.skillText}>Python</h5>
          </div>
        </Carousel>
      </div>

      {/* Subtle Pink Glow Effect */}
      <div className="floating-glow" style={styles.floatingGlow}></div>
    </section>
  );
};

// Inline CSS Styles
const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#000', // Keep entire background black
    color: '#fff', // White text
    position: 'relative',
    overflow: 'hidden',
  },
  floatingContainer: {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background for the container
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.7)',
    zIndex: 10,
    textAlign: 'center',
  },
  heading: {
    fontSize: '40px',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#FF007F', // Hot pink color
  },
  description: {
    color: '#B8B8B8', // Light gray text for description
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '45px',
  },
  item: {
    textAlign: 'center',
    padding: '20px',
    transition: 'transform 0.3s ease',
  },
  skillText: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '600',
  },
  floatingGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '300%',
    height: '300%',
    background: 'rgba(255, 0, 127, 0.2)', // Light pink glow around the section
    zIndex: '-1',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    animation: 'glowEffect 5s ease-in-out infinite',
  },
  liquidFillContainer: {
    position: 'relative',
    display: 'inline-block',
    width: '80px',
    height: '80px',
  },
  liquidFill: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    animation: 'liquidEffect 1.5s infinite', // Adding animation for the liquid effect
  },
};

// Keyframes for the Glow Animation
const glowEffect = `
@keyframes glowEffect {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.4;
  }
}
`;

// Keyframes for the Liquid Fill Animation
const liquidEffect = `
@keyframes liquidEffect {
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
}
`;

// Inject animations into the page
document.head.insertAdjacentHTML('beforeend', `<style>${glowEffect} ${liquidEffect}</style>`);

export default Skills;
