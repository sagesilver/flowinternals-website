import React from 'react';
import Layout from '../components/Layout';

const GptBotSquad: React.FC = () => {
  return (
    <Layout
      title="Software Engineering GPT Squad"
      description="Assist your software delivery with AI-agent bots that never tire, sleep or eat!"
    >
      <section className="section">
        <div className="section-content">
          <h2>Product Overview</h2>
          <p>The Software Engineering GPT Squad is a team of specialized AI agents that:</p>
          <ul className="step-list">
            <li>Accelerate code reviews and quality assurance</li>
            <li>Assist with technical documentation and knowledge management</li>
            <li>Help debug complex issues and suggest optimizations</li>
            <li>Support architectural decision-making with best practices</li>
            <li>Automate routine development tasks</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Squad Members</h2>
          <p>Your AI engineering team includes:</p>
          <ul className="step-list">
            <li>Code Review Specialist</li>
            <li>Documentation Expert</li>
            <li>Debug Assistant</li>
            <li>Architecture Advisor</li>
            <li>Automation Engineer</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Integration</h2>
          <p>Seamlessly integrates with your existing development workflow through:</p>
          <ul className="step-list">
            <li>GitHub/GitLab integration</li>
            <li>IDE plugins</li>
            <li>CLI tools</li>
            <li>REST API</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default GptBotSquad; 