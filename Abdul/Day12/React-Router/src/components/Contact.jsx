import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:aaaaa@gmail.com">aaaaa@gmail.com</a></p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Street, City, Country</p>
    </div>
  );
};

// Inline styles for basic styling
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    height: '100vh',
  }
};

export default Contact;
