import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1>Dashboard Page</h1>
      <p>Welcome to the Dashboard page using React Routing.</p>
    </div>
  );
};

// Inline styles for basic design
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    height: '100vh',
  }
};

export default Dashboard;
