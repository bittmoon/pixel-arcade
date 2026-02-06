import React from 'react';

function Footer() {
  return (
    <div className="footer-content">
      <h2>Ready to Play?</h2>
      <p>Join thousands of players in the ultimate arcade experience.</p>
      <button className="cta-button">Get Started Now</button>
      <a href="#hero" className="secondary-link">Learn More</a>
      <nav className="footer-nav">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#testimonials">Testimonials</a>
      </nav>
    </div>
  );
}

export default Footer;