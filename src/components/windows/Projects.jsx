import React from 'react';

const Projects = () => {
  const containerStyle = {
    padding: '12px',
    backgroundColor: '#c0c0c0',
    height: '100%',
    boxSizing: 'border-box',
    overflowY: 'auto',
    fontFamily: '"MS Sans Serif", Arial, sans-serif',
    fontSize: '12px',
    color: '#000'
  };

  const fieldsetStyle = {
    border: '2px inset #ffffff',
    borderTop: '2px solid #808080',
    borderLeft: '2px solid #808080',
    borderBottom: '2px solid #ffffff',
    borderRight: '2px solid #ffffff',
    padding: '8px 12px 12px 12px',
    marginBottom: '16px'
  };

  const legendStyle = {
    padding: '0 4px',
    backgroundColor: '#c0c0c0',
    color: '#000',
    fontWeight: 'bold'
  };

  const projectTitle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: '4px'
  };

  const projectMeta = {
    fontStyle: 'italic',
    color: '#333',
    marginBottom: '8px'
  };

  const listStyle = {
    margin: '0',
    paddingLeft: '20px',
    lineHeight: '1.4'
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #808080', paddingBottom: '8px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Featured Projects</div>
          <div style={{ color: '#555' }}>C:\\Users\\Amber\\Projects</div>
        </div>
      </div>

      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>CreditBaaz</legend>
        <div style={projectTitle}>Alternative Credit Scoring Platform</div>
        <div style={projectMeta}>MERN Stack, REST APIs | Sept 2025</div>
        <ul style={listStyle}>
          <li>Contributed as a core developer to an alternative credit scoring platform designed to evaluate creditworthiness of freshers with no formal credit history, addressing a real gap in traditional financial systems.</li>
          <li>Took ownership of frontend–backend integration, designing React components and consuming REST APIs to ensure reliable data flow and smooth user interactions.</li>
          <li>Implemented backend routes using Node.js and Express to process user inputs and credit-related parameters, with structured validation and error handling.</li>
          <li>Designed MongoDB schemas to securely store user profiles and non-traditional credit indicators, focusing on scalability and data integrity.</li>
          <li>Applied system-level thinking to translate business logic (alternative indicators instead of CIBIL scores) into a modular, extensible backend architecture.</li>
        </ul>
      </fieldset>

      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>AgriGuard</legend>
        <div style={projectTitle}>Full-Stack MERN Crop Advisory Platform</div>
        <div style={projectMeta}>MERN, FastAPI | Apr 2025</div>
        <ul style={listStyle}>
          <li>Architected a hybrid MERN + FastAPI system where FastAPI acted as a dedicated AI inference service, enabling faster predictions and clean separation of concerns.</li>
          <li>Built scalable REST APIs using Node.js and Express, and connected them with a FastAPI-powered inference layer for plant disease detection and advisory responses.</li>
          <li>Implemented secure cross-stack communication between the MERN backend and the FastAPI service, ensuring consistent request handling and structured responses.</li>
          <li>Focused on clean architecture by clearly separating frontend, backend, and AI service layers to improve maintainability and future scalability.</li>
          <li>Optimized frontend performance using reusable React components and best practices for state and API management.</li>
        </ul>
      </fieldset>

    </div>
  );
};

export default Projects;
