import React from 'react';
import './Certificates.css';

import dotNetCertificate from '../assets/certificates/.net certificate.pdf';
import aiAgentCertificate from '../assets/certificates/ai agent vanderbilt.pdf';
import aiAutomationCertificate from '../assets/certificates/Ai Automation certificate.pdf';
import aiAutomationCourse from '../assets/certificates/Ai automation.pdf';
import aiAwitCertificate from '../assets/certificates/ai AWIT AND ANTHROPIC.pdf';
import aiMcpCertificate from '../assets/certificates/ai MCP Vanderbilt.pdf';
import anthropicCertificate from '../assets/certificates/anthropic.pdf';
import promptEngineeringCertificate from '../assets/certificates/Certificate - Prompt Engineering - Adham Medhat Elsaeed.pdf';
import nodeCourseCertificate from '../assets/certificates/certificate-of-completion-for-the-complete-node-js-course.pdf';
import deepseekCertificate from '../assets/certificates/deepseek certificate.pdf';
import googleAiCertificate from '../assets/certificates/google ai certificate.pdf';
import googleAiEssentialsCertificate from '../assets/certificates/google ai essentials.pdf';
import googleAiPromptCertificate from '../assets/certificates/google Ai prompt.pdf';
import javaSpringCertificate from '../assets/certificates/java spring boot certificate.pdf';
import metaBackendCertificate from '../assets/certificates/meta backend.pdf';
import metaFrontendCertificate from '../assets/certificates/Meta Front End Certificate.pdf';
import promptEngineeringCourse from '../assets/certificates/prompt engineering.pdf';

const certificates = [
  ['AI Agent', aiAgentCertificate], ['AI Automation', aiAutomationCertificate],
  ['AI Automation Course', aiAutomationCourse], ['AI AWIT and Anthropic', aiAwitCertificate],
  ['AI MCP', aiMcpCertificate], ['Anthropic', anthropicCertificate],
  ['Prompt Engineering', promptEngineeringCertificate], ['Prompt Engineering Course', promptEngineeringCourse],
  ['DeepSeek', deepseekCertificate], ['Google AI', googleAiCertificate],
  ['Google AI Essentials', googleAiEssentialsCertificate], ['Google AI Prompt', googleAiPromptCertificate],
  ['Meta Backend Developer', metaBackendCertificate], ['Meta Front-End Developer', metaFrontendCertificate],
  ['Java Spring Boot', javaSpringCertificate], ['.NET', dotNetCertificate],
  ['Node.js Course', nodeCourseCertificate], 
];

const Certificates = ({ language, translations }) => {
  const t = translations[language];

  return (
    <section id="certificates" className={`certificates ${language === 'ar' ? 'rtl' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.certificatesTag}</span>
          <h2 className="section-title">{t.certificatesTitle}</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">{t.certificatesSubtitle}</p>
        </div>
        <div className="certificates-grid">
          {certificates.map(([name, file]) => (
            <article className="certificate-card" key={name}>
              <a className="certificate-preview" href={file} target="_blank" rel="noopener noreferrer" aria-label={`${t.openCertificate}: ${name}`}>
                <object data={file} type="application/pdf" aria-label={name}>
                  <div className="certificate-fallback"><i className="fas fa-file-pdf"></i><span>{t.openCertificate}</span></div>
                </object>
                <span className="certificate-overlay"><i className="fas fa-expand-alt"></i>{t.openCertificate}</span>
              </a>
              <div className="certificate-info"><i className="fas fa-certificate"></i><h3>{name}</h3></div>
            </article>
          ))}
        </div>
      </div>
      <div className="section-number">05</div>
    </section>
  );
};

export default Certificates;
