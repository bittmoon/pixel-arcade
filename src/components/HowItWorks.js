import React from 'react';

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Game',
      description: 'Select from a curated collection of arcade classics.'
    },
    {
      number: 2,
      title: 'Insert Coin',
      description: 'Start your session with a simple virtual coin system.'
    },
    {
      number: 3,
      title: 'Play and Win',
      description: 'Master the games and earn points for the high score table.'
    }
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;