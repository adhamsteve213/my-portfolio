import React, { useEffect, useState } from 'react';
import './Certificates.css';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';

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
import coursatMarketingCertificate from '../assets/certificates/coursat plus marketing content creation.pdf';
import coursatUiUxCertificate from '../assets/certificates/coursatplus uiux certificate.pdf';
import mernStackCertificate from '../assets/certificates/MERN Stack packt-coursera.pdf';
import microsoftCopilotCertificate from '../assets/certificates/microsoft copilot prompt.pdf';
import notionCertificate from '../assets/certificates/notion coursera.pdf';
import flutterCertificate from '../assets/certificates/packt flutter certificate.pdf';
import reactNativeCertificate from '../assets/certificates/packt react native coursera.pdf';
import uiuxCalartsCertificate from '../assets/certificates/uiux calarts - coursera.pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

const certificates = [
  { name: 'AI Agent', file: aiAgentCertificate, description: 'A certificate focused on building AI agents with Vanderbilt University.' },
  { name: 'AI Automation', file: aiAutomationCertificate, description: 'A certificate in practical AI automation workflows.' },
  { name: 'AI Automation Course', file: aiAutomationCourse, description: 'Completed coursework in AI automation and applied tools.' },
  { name: 'AI AWIT and Anthropic', file: aiAwitCertificate, description: 'Completed training in AI workflows and Anthropic technologies.' },
  { name: 'AI MCP', file: aiMcpCertificate, description: 'A certificate in Model Context Protocol concepts and applications.' },
  { name: 'Anthropic', file: anthropicCertificate, description: 'Completed training focused on Anthropic AI technologies.' },
  { name: 'Prompt Engineering', file: promptEngineeringCertificate, description: 'A certificate in writing effective prompts for AI systems.' },
  { name: 'Prompt Engineering Course', file: promptEngineeringCourse, description: 'Completed a course in prompt engineering techniques.' },
  { name: 'DeepSeek', file: deepseekCertificate, description: 'A certificate focused on DeepSeek and generative AI tools.' },
  { name: 'Google AI', file: googleAiCertificate, description: 'Completed training in Google AI concepts and tools.' },
  { name: 'Google AI Essentials', file: googleAiEssentialsCertificate, description: 'Completed Google AI Essentials training.' },
  { name: 'Google AI Prompt', file: googleAiPromptCertificate, description: 'Completed Google training in AI prompting.' },
  { name: 'Meta Backend Developer', file: metaBackendCertificate, description: 'A certificate in backend development from Meta.' },
  { name: 'Meta Front-End Developer', file: metaFrontendCertificate, description: 'A certificate in front-end development from Meta.' },
  { name: 'Java Spring Boot', file: javaSpringCertificate, description: 'Completed training in Java and Spring Boot application development.' },
  { name: '.NET', file: dotNetCertificate, description: 'A certificate in .NET development.' },
  { name: 'Node.js Course', file: nodeCourseCertificate, description: 'Completed a comprehensive Node.js development course.' },
  { name: 'Marketing Content Creation', file: coursatMarketingCertificate, description: 'Completed training in marketing content creation.' },
  { name: 'UI/UX Design', file: coursatUiUxCertificate, description: 'Completed training in UI/UX design principles.' },
  { name: 'MERN Stack', file: mernStackCertificate, description: 'Completed training in full-stack MERN development.' },
  { name: 'Microsoft Copilot Prompting', file: microsoftCopilotCertificate, description: 'Completed training in prompting with Microsoft Copilot.' },
  { name: 'Notion', file: notionCertificate, description: 'Completed training in Notion and digital productivity workflows.' },
  { name: 'Flutter', file: flutterCertificate, description: 'Completed training in Flutter mobile application development.' },
  { name: 'React Native', file: reactNativeCertificate, description: 'Completed training in React Native mobile application development.' },
  { name: 'UI/UX Design at CalArts', file: uiuxCalartsCertificate, description: 'Completed UI/UX design coursework from CalArts.' },
];

const CertificatePreview = ({ file, name, className = '' }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    let active = true;
    const renderPreview = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(file).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
        if (active) setImage(canvas.toDataURL('image/jpeg', 0.88));
      } catch (error) {
        if (active) setImage('');
      }
    };

    renderPreview();
    return () => { active = false; };
  }, [file]);

  return image ? <img className={className} src={image} alt={name} /> : (
    <div className="certificate-fallback"><i className="fas fa-file-pdf"></i><span>{name}</span></div>
  );
};

const Certificates = ({ language, translations }) => {
  const t = translations[language];
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedCertificate ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedCertificate]);

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
          {certificates.map(certificate => (
            <article className="certificate-card" key={certificate.name}>
              <button className="certificate-preview" type="button" onClick={() => setSelectedCertificate(certificate)} aria-label={`${t.openCertificate}: ${certificate.name}`}>
                <CertificatePreview file={certificate.file} name={certificate.name} className="certificate-image" />
                <span className="certificate-overlay"><i className="fas fa-expand-alt"></i>{t.openCertificate}</span>
              </button>
              <div className="certificate-info"><i className="fas fa-certificate"></i><h3>{certificate.name}</h3></div>
            </article>
          ))}
        </div>
      </div>
      <div className="section-number">05</div>
      {selectedCertificate && (
        <div className="certificate-modal-backdrop" role="presentation" onClick={() => setSelectedCertificate(null)}>
          <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" onClick={event => event.stopPropagation()}>
            <button className="certificate-modal-close" type="button" onClick={() => setSelectedCertificate(null)} aria-label={t.closeCertificate}>
              <i className="fas fa-times"></i>
            </button>
            <div className="certificate-modal-image"><CertificatePreview file={selectedCertificate.file} name={selectedCertificate.name} className="certificate-image" /></div>
            <div className="certificate-modal-content">
              <span className="section-tag">{t.certificatesTag}</span>
              <h2 id="certificate-modal-title">{selectedCertificate.name}</h2>
              <p>{selectedCertificate.description}</p>
              {selectedCertificate.link && <a className="certificate-action certificate-link" href={selectedCertificate.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>{t.certificateLink}</a>}
              <a className="certificate-action certificate-download" href={selectedCertificate.file} download><i className="fas fa-download"></i>{t.downloadCertificate}</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
