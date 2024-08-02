import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>123 Main Street</p>
          <p style={styles.text}>City, State, ZIP</p>
          <p style={styles.text}>Phone: (123) 456-7890</p>
          <p style={styles.text}>Email: info@restaurant.com</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com" style={styles.icon}>Facebook</a>
            <a href="https://www.twitter.com" style={styles.icon}>Twitter</a>
            <a href="https://www.instagram.com" style={styles.icon}>Instagram</a>
          </div>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Opening Hours</h3>
          <p style={styles.text}>Mon - Fri: 9:00 AM - 10:00 PM</p>
          <p style={styles.text}>Sat - Sun: 10:00 AM - 11:00 PM</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.text}>©2024 Komal Chavan & Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#D2691E', // Chocolate color
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  column: {
    flex: '1',
    padding: '10px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    margin: '5px 0',
    color: '#FAFAD2', // Light goldenrod yellow color for text
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    margin: '0 10px',
    color: '#FAFAD2', // Light goldenrod yellow color for icons
    textDecoration: 'none',
  },
  bottom: {
    marginTop: '20px',
  },
};

export default Footer;
