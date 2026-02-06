import React from 'react';

function Features() {
  const features = [
    {
      icon: '🎮',
      title: 'Classic Controls',
      description: 'Intuitive joystick and button layouts for seamless gameplay.'
    },
    {
      icon: '⚡',
      title: 'High Scores',
      description: 'Compete globally and climb the leaderboards.'
    },
    {
      icon: '🔄',
      title: 'Endless Modes',
      description: 'Multiple game modes to keep the arcade spirit alive.'
    }
  ];

  return (
    <section className="features">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;