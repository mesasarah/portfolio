import { Col } from "react-bootstrap";
import { useState } from "react"; // Import useState for hover effect

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

  return (
    <Col xs={12} sm={6} md={4} style={styles.col}>
      <div 
        style={{ 
          ...styles.projImgBx,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Apply scale on hover
          boxShadow: isHovered ? '0 6px 12px rgba(255, 0, 128, 0.5)' : '0 4px 10px rgba(255, 0, 128, 0.3)' // Adjusted shadow color to match theme
        }}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      >
        <img src={imgUrl} alt={title} style={styles.projectImage} />
        <div 
          style={{ 
            ...styles.projTxtx, 
            opacity: isHovered ? 1 : 0 // Change opacity based on hover state
          }}
        >
          <h4 style={styles.title}>{title}</h4>
          <span style={styles.description}>{description}</span>
        </div>
        {/* Pink gradient overlay */}
        <div 
          style={{ 
            ...styles.gradientOverlay, 
            opacity: isHovered ? 1 : 0 // Show gradient on hover
          }} 
        />
      </div>
    </Col>
  );
};

// Inline CSS Styles
const styles = {
  col: {
    padding: '15px',
  },
  projImgBx: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    backgroundColor: '#000', // Pitch black background for the card
    border: '1px solid rgba(255, 0, 128, 0.3)', // Slight border for definition
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '15px',
    transition: 'transform 0.3s',
  },
  projTxtx: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker overlay for better contrast
    padding: '10px 15px',
    borderRadius: '10px',
    transition: 'opacity 0.3s',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#fff', // White text for title
    margin: 0,
  },
  description: {
    fontSize: '14px',
    color: '#ddd', // Light gray for description
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.7), rgba(255, 105, 180, 0.7))', // Pink gradient
    transition: 'opacity 0.3s',
    borderRadius: '15px', // Match border radius with project image
    zIndex: 1, // Ensure it appears above other content
  },
};

// Note: Hover effects are handled by the React component state instead of CSS alone.
