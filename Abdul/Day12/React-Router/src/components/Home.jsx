import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Website</h1>
      <p>This is the home page of our React application.</p>
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

export default Home;
