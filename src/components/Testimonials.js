import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote: "PixelArcade brought back the magic of arcades I loved as a kid. Highly recommend!",
      author: "Alex Gamer (Demo)"
    },
    {
      quote: "Smooth gameplay and addictive challenges. Can't stop playing!",
      author: "Jordan Retro (Demo)"
    },
    {
      quote: "The perfect blend of nostalgia and modern tech. A must-try for gamers.",
      author: "Taylor Arcade (Demo)"
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Players Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <cite>- {testimonial.author}</cite>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;