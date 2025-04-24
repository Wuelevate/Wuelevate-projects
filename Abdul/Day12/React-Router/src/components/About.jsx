import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>We are a company dedicated to building amazing React applications!</p>
    </div>
  );
};

// Basic styling
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    height: '100vh',
  }
};

export default About;
