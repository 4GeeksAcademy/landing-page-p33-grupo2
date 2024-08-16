import React from 'react';

const WelcomeComponent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>A Warm Welcome!</h1>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
        odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
      </p>
      <button style={styles.button}>Call to action!</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'left',

  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#6c757d',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default WelcomeComponent;
