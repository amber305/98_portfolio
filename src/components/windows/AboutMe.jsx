import React from 'react';

const AboutMe = () => {
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

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
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
    color: '#000'
  };

  const sectionLabel = {
    fontWeight: 'bold',
    marginBottom: '4px'
  };

  const sectionText = {
    marginBottom: '8px',
    lineHeight: '1.4'
  };

  const hrStyle = {
    borderTop: '1px solid #808080',
    borderBottom: '1px solid #ffffff',
    borderLeft: 'none',
    borderRight: 'none',
    margin: '12px 0'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={{ width: '48px', height: '48px', marginRight: '16px', backgroundColor: '#000080', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '24px', border: '2px inset #fff' }}>
          AK
        </div>
        <div>
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Amber Kaushik</div>
          <div>Full-Stack Engineer & B.Tech Student</div>
          <div style={{ color: '#000080', textDecoration: 'underline', marginTop: '4px' }}>mbrcodes | mbrkaushik@gmail.com</div>
        </div>
      </div>

      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Professional Summary</legend>
        <div style={sectionText}>
          Final-year B.Tech student and full-stack engineer with hands-on experience building production-grade MERN applications that solve real-world problems in fintech and agri-tech. Proven ability to design clean APIs, integrate cross-language services, and translate business logic into scalable backend systems. Strong problem-solver with 300+ DSA problems solved and a focus on maintainable, performance-driven engineering.
        </div>
      </fieldset>

      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Technical Skills</legend>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ width: '35%', fontWeight: 'bold', verticalAlign: 'top', paddingBottom: '4px' }}>Programming:</td>
              <td style={{ verticalAlign: 'top', paddingBottom: '4px' }}>JavaScript, Python</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', verticalAlign: 'top', paddingBottom: '4px' }}>Web & MERN Stack:</td>
              <td style={{ verticalAlign: 'top', paddingBottom: '4px' }}>React.js, Redux, Node.js, Express.js, MongoDB, Next.js, HTML, CSS, Tailwind CSS</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', verticalAlign: 'top', paddingBottom: '4px' }}>Backend & APIs:</td>
              <td style={{ verticalAlign: 'top', paddingBottom: '4px' }}>RESTful APIs, Authentication (JWT), Middleware, MVC Architecture</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', verticalAlign: 'top', paddingBottom: '4px' }}>Databases & Tools:</td>
              <td style={{ verticalAlign: 'top', paddingBottom: '4px' }}>MongoDB, SQL, Git, GitHub, Postman</td>
            </tr>
          </tbody>
        </table>
      </fieldset>

      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Education & Certifications</legend>
        <div style={sectionLabel}>Galgotias University (2022–2026)</div>
        <div style={sectionText}>B.Tech • Greater Noida, India • CGPA: 8.7</div>
        
        <div style={sectionLabel}>G.D. Goenka Public School (2021–2022)</div>
        <div style={sectionText}>Class XII (CBSE) • Karkardooma, India • 85%</div>
        
        <hr style={hrStyle} />
        
        <div style={sectionLabel}>Certifications & Achievements</div>
        <ul style={{ margin: '4px 0 0 0', paddingLeft: '20px', lineHeight: '1.4' }}>
          <li>MERN Stack Development - Udemy</li>
          <li>5-Star Rated in Python and SQL on HackerRank</li>
          <li>Solved 300+ DSA problems across multiple coding platforms</li>
        </ul>
      </fieldset>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <button className="window-button" style={{ padding: '4px 24px', width: 'auto' }} onClick={(e) => {
          // Close behavior can be simulated if passed via props, otherwise just active state effect
          e.currentTarget.style.borderStyle = 'inset';
          setTimeout(() => e.currentTarget.style.borderStyle = 'outset', 100);
        }}>OK</button>
      </div>

    </div>
  );
};

export default AboutMe;
